import { QueryResult } from '@/types/common';
import { type WPPage } from '@/types/pages/wp-page';
export const GET_PAGE_BY_URI = `
query FlexPageByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    ... on Page {
      id
      content
      title
      template {
        templateName
        ... on Template_FlexContent {
          templateName
          flexTemplate {
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
                columnGroup {
                  ... on FlexTemplateFlexContentColumnGroupColumnLayout {
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
  }
}

fragment SectionMFragment on FlexTemplateFlexContentSectionM {
  bgImg {
    node {
      sourceUrl
    }
  }
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
    button {
      buttonLink
      buttonText
    }
    cardContent
    cardTitle
    image {
      node {
        sourceUrl
      }
    }
  }
}

fragment ColumnsFragment on FlexTemplateFlexContentColumnGroupColumns {
  content
  width {
    large
    medium
    small
  }
}`;

export const GET_PAGE_SLUGS = `
query GetPageSlugs {
  pages {
    nodes {
      slug
    }
  }
}`;

export type GetPageBySlugResult = QueryResult<'nodeByUri', WPPage>;
