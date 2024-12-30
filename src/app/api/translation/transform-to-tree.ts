import fs from "fs";
import path from "path";

// Helper function to convert a flat key into a nested tree structure
/**
 * @deprecated
 * This function is not currently in use
 */
function createTreeFromPath(obj: any, path: string, value: string) {
  const keys = path.split("@").filter(Boolean); // Split by '@' and filter out empty strings
  let current = obj;

  keys.forEach((key, index) => {
    // If the key does not exist in the current level, create it
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    }
    current = current[key];
  });
}

// Main function to transform the data into a tree structure
/**
 * @deprecated
 * This function is not currently in use
 */
export function transformToTree() {
  console.log("transform translation to tree");

  // Path to the data files (e.g., en.json, ar.json)
  const dataPath = path.join(process.cwd(), "src/app/api/translation/data");

  // Path to the tree output files (e.g., en.json, ar.json)
  const treePath = path.join(process.cwd(), "src/app/api/translation/tree");

  if (!fs.existsSync(treePath)) {
    fs.mkdirSync(treePath);
  }

  // Read all files in the 'data' directory
  const files = fs.readdirSync(dataPath);

  // Process each file in the data directory
  files.forEach((file) => {
    const filePath = path.join(dataPath, file);
    const fileExtension = path.extname(file);

    // Only process JSON files
    if (fileExtension === ".json") {
      const fileName = path.basename(file, ".json"); // Extract the base file name (e.g., 'en' from 'en.json')

      // Read the JSON data from the file
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      // Initialize an empty object for the transformed data
      const tree: any = {};

      // Transform the data into a tree structure
      Object.entries(data).forEach(([key, value]) => {
        const path = key.replace("@", ""); // Remove the '@' to use it as a path
        createTreeFromPath(tree, path, value as string);
      });

      // Write the transformed tree to the output file
      const outputFilePath = path.join(treePath, `${fileName}.json`);
      fs.writeFileSync(outputFilePath, JSON.stringify(tree, null, 2));

      console.log(`Transformed ${file} and saved to ${outputFilePath}`);
    }
  });

  console.log("Transformation complete!");
}
