import { transformToTree } from "../translation/transform-to-tree";

export function GET() {
  return new Response("Hello, Next.js!");
}

export function POST() {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    transformToTree();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Response("Application started successfully!"));
      }, 1000);
    });
  }

  return new Response("Application started successfully!");
}
