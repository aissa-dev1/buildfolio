import path from "path";
import fs from "fs";

/**
 * @deprecated
 * This function is not currently in use
 */
export function readTree(lang: string) {
  const filePath = path.join(
    process.cwd(),
    `src/app/api/translation/tree/${lang}.json`
  );
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}
