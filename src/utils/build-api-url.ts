export function buildApiUrl(path: string) {
  return path.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/api${path}`
    : `${process.env.NEXT_PUBLIC_SITE_URL}/api/${path}`;
}
