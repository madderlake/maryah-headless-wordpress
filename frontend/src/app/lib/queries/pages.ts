import { Edges, QueryEdgesResult } from '@/types/common';
import { type Page } from '@/types/pages/page';
export const GET_FLEX_PAGE_BY_SLUG = `
query GetFlexTemplate2($slug: String!) {
  pageBy(uri: $slug) {
    id
    content
    title
    template {
      templateName
    }
    slug
    flexTemplate {
      flexContent {
        ... on FlexTemplateFlexContentTabSetLayout {
          sectionM {
            ...SectionMFragment
          }
          tabs {
            ...TabsFragment
          }
        }
        ... on FlexTemplateFlexContentCardsLayout {
          sectionM {
            ...SectionMFragment
          }
          cards {
            ...CardsFragment
          }
        }
        ... on FlexTemplateFlexContentColumnsLayout {
          sectionM {
            ...SectionMFragment
          }
          colGroup {
            ...ColGroupFragment
          }
        }
        ... on FlexTemplateFlexContentSectionLayout {
          sectionM {
            ...SectionMFragment
          }
        }
      }
      pageTitleGroup {
        pageTitle
        pageTitleClass
      }
    }
  }
}

fragment SectionMFragment on FlexTemplateFlexContentSectionM {
  content {
    containerized
    contentClass
    sectionContent
  }
  inGrid
  sectionClass
  sectionTitle {
    sectionTitle
    sectionTitleClass
    sectionTitleTag
  }
}

fragment TabsFragment on FlexTemplateFlexContentTabs {
  tabContent
  tabTitle
}

fragment ColGroupFragment on FlexTemplateFlexContentColGroup {
  column1 {
    ... on FlexTemplateFlexContentColGroupColumn1ContentLayout {
      class
      content
      width {
        desktop
        mobile
        tablet
      }
    }
  }
  column2 {
    ... on FlexTemplateFlexContentColGroupColumn2ContentLayout {
      class
      content
      width {
        desktop
        mobile
        tablet
      }
    }
  }
  column3 {
    ... on FlexTemplateFlexContentColGroupColumn3ContentLayout {
      class
      content
      width {
        desktop
        mobile
        tablet
      }
    }
  }
  column4 {
    ... on FlexTemplateFlexContentColGroupColumn4ContentLayout {
      class
      content
      width {
        desktop
        mobile
        tablet
      }
    }
  }
}

fragment CardsFragment on FlexTemplateFlexContentCards {
  card {
    cardContent
    cardTitle
    button {
      buttonLink
      buttonText
    }
  }
  cardColumns {
    desktop
    phone
    tablet
  }
}`;
/* ---------------------------------------------- */
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
  pageBy(uri: $slug) {
    id
    title
    content
    slug
    template {
     templateName
    }
  }
}`;

export const GET_PAGE_TEMPLATE = `
  query GetPageTemplateBySlug($slug: String!) {
  pageBy(uri: $slug) {
    template {
      templateName
    }
  }
}`;

export type GetPageBySlugResult = QueryEdgesResult<'pageBy', Page>;
