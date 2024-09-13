import { Edges, QueryEdgesResult } from '@/types/common';
import { type Page } from '@/types/pages/page';
export const GET_FLEX_PAGE_BY_SLUG = `
  query GetFlexContent($slug: String!) {
  pageBy(uri: $slug) {
    id
    title
    content
    slug
    template {
      templateName
    }
    flexibleContent {
      pageTitleGroup {
        pageTitle
        pageTitleClass
      }
      flexContent {
        ... on FlexibleContentFlexContentSectionLayout {
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
        }
        ... on FlexibleContentFlexContentTabSetLayout {
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
          tabs {
            ...FlexibleContentFlexContentTabsFragment
          }
        }
        ... on FlexibleContentFlexContentColumnsLayout {
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
          colGroup {
            ...FlexibleContentFlexContentColGroupFragment
          }
        }
        ... on FlexibleContentFlexContentCardsLayout {
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
          card {
            ...FlexibleContentFlexContentCardFragment
          }
        }
      }
    }
  }
}

fragment FlexibleContentFlexContentSectionMSectionTitleFragment on FlexibleContentFlexContentSectionMSectionTitle {
  sectionTitle
  sectionTitleClass
  sectionTitleTag
}

fragment FlexibleContentFlexContentSectionMContentFragment on FlexibleContentFlexContentSectionMContent {
  containerized
  contentClass
  sectionContent
}

fragment FlexibleContentFlexContentSectionMFragment on FlexibleContentFlexContentSectionM {
  content {
    ...FlexibleContentFlexContentSectionMContentFragment
    containerized
    contentClass
    sectionContent
  }
  inGrid
  sectionClass
  sectionTitle {
    ...FlexibleContentFlexContentSectionMSectionTitleFragment
    sectionTitle
    sectionTitleClass
    sectionTitleTag
  }
}

fragment FlexibleContentFlexContentTabsFragment on FlexibleContentFlexContentTabs {
  tabContent
  tabTitle
}

fragment FlexibleContentFlexContentColGroupFragment on FlexibleContentFlexContentColGroup {
  fieldGroupName
  column1 {
    ... on FlexibleContentFlexContentColGroupColumn1ContentLayout {
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
    ... on FlexibleContentFlexContentColGroupColumn2ContentLayout {
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
    ... on FlexibleContentFlexContentColGroupColumn3ContentLayout {
      class
      content
      width {
        tablet
        desktop
        mobile
      }
    }
  }
  column4 {
    ... on FlexibleContentFlexContentColGroupColumn4ContentLayout {
      class
      content
      width {
        tablet
        mobile
        fieldGroupName
      }
    }
  }
}

fragment FlexibleContentFlexContentCardButtonFragment on FlexibleContentFlexContentCardButton {
  buttonLink
  buttonText
}

fragment FlexibleContentFlexContentCardFragment on FlexibleContentFlexContentCard {
  cardContent
  cardTitle
  image {
    node {
      sourceUrl
    }
  }
  button {
    ...FlexibleContentFlexContentCardButtonFragment
  }
}`;

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
