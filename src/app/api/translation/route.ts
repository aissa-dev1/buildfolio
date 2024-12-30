import { readTree } from "./read-tree";

export function GET(req: Request) {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") || "en";

  console.log(`Language: ${lang}`);
  return new Response(JSON.stringify(readTree(lang)));
}
