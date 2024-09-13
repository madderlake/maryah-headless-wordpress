export const GET_ALL_PAGE_BY_SLUG = `
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
          fieldGroupName
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
        }
        ... on FlexibleContentFlexContentTabSetLayout {
          fieldGroupName
          tabs {
            ...FlexibleContentFlexContentTabsFragment
          }
        }
        ... on FlexibleContentFlexContentColumnsLayout {
          fieldGroupName
          sectionM {
            ...FlexibleContentFlexContentSectionMFragment
          }
          colGroup {
            ...FlexibleContentFlexContentColGroupFragment
          }
        }
        ... on FlexibleContentFlexContentCardsLayout {
          fieldGroupName
        }
      }
    }
  }
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
