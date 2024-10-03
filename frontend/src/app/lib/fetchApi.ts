const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`;

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

  return json.data as T;
};

export default fetchAPI;
