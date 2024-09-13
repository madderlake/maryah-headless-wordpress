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
          columns {
            ...ColumnsFragment
          }
        }
        ... on FlexTemplateFlexContentSectionLayout {
          sectionM {
            ...SectionMFragment
            content {
              containerized
              contentClass
              fieldGroupName
              sectionContent
            }
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
}

fragment ColumnsFragment on FlexTemplateFlexContentColumns {
  column {
    ... on FlexTemplateFlexContentColumnsColumnContentLayout {
      class
      content
      width {
        desktop
        mobile
        tablet
      }
    }
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
