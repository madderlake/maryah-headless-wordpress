export const GET_PRIMARY_MENU = `query GetMenuItems {
   menus(where: {location: PRIMARY_MENU}) {
    nodes {
      menuItems {
        edges {
          node {
            id
            label
            parentId
            url
            uri
          }
        }
      }
    }
  }
  }`;
