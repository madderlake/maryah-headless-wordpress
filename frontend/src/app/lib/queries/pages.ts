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
// export const GET_PAGE_BY_URI_OLD = `
// query PageByUri($slug: String!) {
//   nodeByUri(uri: $slug) {
//     __typename
//     ... on Page {
//       ...PageData
//       template {
//         templateName
//         ... on Template_FlexContent {
//           templateName
//           flexTemplate {
//             pageTitleGroup {
//               ...PageTitleGroupFragment
//             }
//             flexContent {
//               ... on FlexTemplateFlexContentSectionLayout {
//                 sectionM {
//                   ...SectionFragment
//                 }
//               }
//               ... on FlexTemplateFlexContentTabSetLayout {
//                 sectionM {
//                   ...SectionFragment
//                 }
//                 tabs {
//                   tabTitle
//                   tabContent
//                 }
//               }
//               ... on FlexTemplateFlexContentCardsLayout {
//                 sectionM {
//                   ...SectionFragment
//                 }
//                 cards {
//                   card {
//                     ...CardFragment
//                   }
//                   cardColumns {
//                     ...CardColumnsFragment
//                   }
//                 }
//               }
//               ... on FlexTemplateFlexContentColumnsLayout {
//                 sectionM {
//                   ...SectionFragment
//                 }
//                 columns {
//                   ...ColumnsFragment
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// fragment PageData on Page {
//   id
//   slug
//   title
//   content
// }

// fragment SectionFragment on FlexTemplateFlexContentSectionM {
//   content {
//     containerized
//     contentClass
//     sectionContent
//   }
//   inGrid
//   sectionClass
//   bgImg {
//     node {
//       sourceUrl
//     }
//   }
//   sectionTitle {
//     sectionTitle
//     sectionTitleClass
//     sectionTitleTag
//   }
// }

// fragment CardFragment on FlexTemplateFlexContentCardsCard {
//   button {
//     buttonLink
//     buttonText
//   }
//   cardContent
//   cardTitle
// }

// fragment CardColumnsFragment on FlexTemplateFlexContentCardsCardColumns {
//   desktop
//   phone
//   tablet
// }

// fragment ColumnsFragment on FlexTemplateFlexContentColumns {
//   column {
//     ... on FlexTemplateFlexContentColumnsColumnContentLayout {
//       class
//       content
//       width {
//         desktop
//         mobile
//         tablet
//       }
//     }
//   }
// }

// fragment PageTitleGroupFragment on FlexTemplatePageTitleGroup {
//   pageTitle
//   pageTitleClass
// }
// `;

/* ---------------------------------------------- */

// export const GET_PAGE_TEMPLATE = `
//   query GetPageTemplateBySlug($slug: String!) {
//   nodeByUri(uri: $slug) {
//   __typename
//    ... on Page {
//     template {
//       templateName
//     }
//   }
// }
// }`;
export const GET_PAGE_SLUGS = `
query GetPageSlugs {
  pages {
    nodes {
      slug
    }
  }
}`;

export type GetPageBySlugResult = QueryResult<'nodeByUri', WPPage>;
