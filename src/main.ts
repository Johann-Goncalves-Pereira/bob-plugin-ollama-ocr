import { supportLanguages } from "./lang";
import { OCRQuery, OCRCompletion } from "./types";
import { processOCR } from "./ocr";

// Export the required functions for Bob
export function ocr(
  query: OCRQuery,
  completion: (result: OCRCompletion) => void
): void {
  processOCR(query, completion);
}

export { supportLanguages };
