// export const fetchClient = ({
//   url,
//   key,
//   query,
//   variables = {},
// }: {
//   url: string;
//   key: string;
//   query: string;
//   variables?: any;
// }) => {
//   const hash = JSON.stringify({
//     ...{
//       url,
//       query,
//       key,
//     },
//     ...variables,
//   });
//   return fetch(`${url}#${hash})}`, {
//     method: 'POST',
//     cache: 'force-cache',
//     next: {
//       revalidate: 3600, // 1 hour
//     },
//     headers: {
//       'Content-Type': 'application/json',
//       //Authorization: `Basic ${key}`,
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   }).then((res) => res.json());
// };

// export const maryahClient = ({
//   query,
//   variables = {},
// }: {
//   query: string;
//   variables?: any;
// }) => {
//   return fetchClient({
//     url: String(process.env.WORDPRESS_API_URL),
//     key: String(process.env.WP_MARYAH_TOKEN),
//     query,
//     variables,
//   });
// };

const API_URL = `${process.env.WORDPRESS_API_URL}`;

export const fetchAPI = async <T extends {}>(
  query: string,
  { variables = {} } = {}
): Promise<T> => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.append(
      'Authorization',
      `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    );
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    next: {
      revalidate: 3600, // 1 hour
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  console.log('json', json);
  return json.data as T;
};

export default fetchAPI;
