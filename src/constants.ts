export const DEFAULT_OLLAMA_URL = "http://localhost:11434/api/generate";

export const DEFAULT_MODELS = [
  "llama3.2-vision:11b",
  "llama3.2-vision:90b",
  "llava:7b",
  "llava:13b",
  "llava:34b",
  "bakllava:7b",
  "moondream:1.8b",
] as const;

export const OCR_MODES = {
  markdown: "markdown",
  plaintext: "plaintext",
  structured: "structured",
  json: "json",
  custom: "custom",
} as const;

export const OCR_PROMPTS = {
  markdown: (
    language: string
  ) => `Extract all text content from this image in ${language} **exactly as it appears**, without modification, summarization, or omission.
Format the output in markdown:
- Use headers (#, ##, ###) **only if they appear in the image**
- Preserve original lists (-, *, numbered lists) as they are
- Maintain all text formatting (bold, italics, underlines) exactly as seen
- For mathematical equations, use LaTeX format: $$equation$$
- For tables, format as Markdown tables
- **Do not add, interpret, or restructure any content**`,

  plaintext: (
    language: string
  ) => `Extract all visible text from this image in ${language} **without any changes**.
- **Do not summarize, paraphrase, or infer missing text.**
- Retain all spacing, punctuation, and formatting exactly as in the image.
- If text is unclear or partially visible, extract as much as possible without guessing.
- **Include all text, even if it seems irrelevant or repeated.**`,

  structured: (
    language: string
  ) => `Extract all text from this image in ${language}, **ensuring complete structural accuracy**:
- Identify and format tables **without altering content**.
- Preserve list structures (bulleted, numbered) **exactly as shown**.
- Maintain all section headings, indents, and alignments.
- **Do not add, infer, or restructure the content in any way.**`,

  json: (
    language: string
  ) => `Extract all text from this image in ${language} and format it as JSON, **strictly preserving** the structure.
- **Do not summarize, add, or modify any text.**
- Maintain hierarchical sections and subsections as they appear.
- Use keys that reflect the document's actual structure (e.g., "title", "body", "footer").
- Include all text, even if fragmented, blurry, or unclear.`,
};

export const DEFAULT_TEMPERATURE = 0.1;
export const DEFAULT_MAX_TOKENS = 4096;
