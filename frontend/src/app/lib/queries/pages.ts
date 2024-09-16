import { QueryEdgesResult } from '@/types/common';
import { type Page } from '@/types/pages/page';

export const GET_FLEX_PAGE_BY_SLUG = `
query FlexPageByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    __typename
    ... on Page {
      ...PageData
      flexTemplate {
        pageTitleGroup {
          ...PageTitleGroupFragment
        }
        flexContent {
          ... on FlexTemplateFlexContentSectionLayout {
            sectionM {
              ...SectionMFragment
            }
          }
          ... on FlexTemplateFlexContentTabSetLayout {
            sectionM {
              ...SectionMFragment
            }
            tabs {
              tabContent
              tabTitle
            }
          }
          ... on FlexTemplateFlexContentCardsLayout {
            sectionM {
              ...SectionMFragment
            }
            cards {
              card {
                ...CardFragment
              }
              cardColumns {
                ...CardColumnsFragment
              }
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
        }
      }
    }
  }
}

fragment PageData on Page {
  id
  slug
  title
  content
  template {
    templateName
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
  bgImg {
    node {
      sourceUrl
    }
  }
  sectionTitle {
    sectionTitle
    sectionTitleClass
    sectionTitleTag
  }
}

fragment CardFragment on FlexTemplateFlexContentCardsCard {
  button {
    buttonLink
    buttonText
  }
  cardContent
  cardTitle
}

fragment CardColumnsFragment on FlexTemplateFlexContentCardsCardColumns {
  desktop
  phone
  tablet
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
}

fragment PageTitleGroupFragment on FlexTemplatePageTitleGroup {
  pageTitle
  pageTitleClass
}
`;

/* ---------------------------------------------- */
export const GET_PAGE_BY_SLUG = `
  query PageNodeByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    __typename
    ...PageData
  }
}

fragment PageData on Page {
  id
  slug
  title
  content
  template {
    templateName
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

export type GetPageBySlugResult = QueryEdgesResult<'nodeByUri', Page>;
