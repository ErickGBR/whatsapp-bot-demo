import fs from "fs";
import path from "path";

export const readMarkdown = (filename: string) => {
  const filePath = path.join(__dirname, "../../md-files", filename);
  return fs.readFileSync(filePath, "utf-8");
};
