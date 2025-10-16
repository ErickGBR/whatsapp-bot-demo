import { readMarkdown } from "../../src/services/md-reader.service";

test("Leer archivo markdown básico", () => {
  const content = readMarkdown("example.md");
  expect(content).toContain("#");
});
