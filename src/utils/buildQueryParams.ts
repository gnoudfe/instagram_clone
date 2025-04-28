export const buildQueryParams = (params: Record<string, string | number | null>) =>
  Object.entries(params)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
