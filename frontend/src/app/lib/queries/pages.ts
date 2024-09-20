import { QueryResult } from '@/types/common';
import { type WPPage } from '@/types/pages/wp-page';

export const GET_PAGE_BY_URI = `
query PageByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    __typename
    ... on Page {
      ...PageData
      template {
        templateName
        ... on Template_FlexContent {
          templateName
          flexTemplate {
            pageTitleGroup {
              ...PageTitleGroupFragment
            }
            flexContent {
              ... on FlexTemplateFlexContentSectionLayout {
                sectionM {
                  ...SectionFragment
                }
              }
              ... on FlexTemplateFlexContentTabSetLayout {
                sectionM {
                  ...SectionFragment
                }
                tabs {
                  tabTitle
                  tabContent
                }
              }
              ... on FlexTemplateFlexContentCardsLayout {
                sectionM {
                  ...SectionFragment
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
                  ...SectionFragment
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
  }
}

fragment PageData on Page {
  id
  slug
  title
  content
}

fragment SectionFragment on FlexTemplateFlexContentSectionM {
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

export const GET_PAGE_TEMPLATE = `
  query GetPageTemplateBySlug($slug: String!) {
  nodeByUri(uri: $slug) {
  __typename
   ... on Page {
    template {
      templateName
    }
  }
}
}`;

export type GetPageBySlugResult = QueryResult<'nodeByUri', WPPage>;
