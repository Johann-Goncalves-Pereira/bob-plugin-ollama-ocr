import { OCRCompletion } from "./types";

export function handleOCRError(
  error: {
    type: string;
    message: string;
    addition?: string;
  },
  completion: (result: OCRCompletion) => void
): void {
  $log.error(`OCR Error: ${error.type} - ${error.message}`);

  completion({
    error: {
      type: error.type,
      message: error.message,
      addition: error.addition,
    },
  });
}

export function validateConfiguration(): {
  isValid: boolean;
  message?: string;
} {
  const { baseUrl, model, customModel } = $option;

  // Check if base URL is provided
  if (!baseUrl || !baseUrl.trim()) {
    return {
      isValid: false,
      message:
        "Base URL is required. Please configure the Ollama server URL in settings.",
    };
  }

  // Check if model is configured
  const selectedModel = model === "custom" ? customModel : model;
  if (!selectedModel || !selectedModel.trim()) {
    return {
      isValid: false,
      message:
        "Model is required. Please select or configure a vision model in settings.",
    };
  }

  return { isValid: true };
}

export function getLanguageFromCode(langCode: string): string {
  const languageMap: Record<string, string> = {
    auto: "auto-detected language",
    "zh-Hans": "Simplified Chinese",
    "zh-Hant": "Traditional Chinese",
    en: "English",
    ja: "Japanese",
    ko: "Korean",
    fr: "French",
    de: "German",
    es: "Spanish",
    it: "Italian",
    ru: "Russian",
    pt: "Portuguese",
    ar: "Arabic",
    hi: "Hindi",
    th: "Thai",
    vi: "Vietnamese",
  };

  return languageMap[langCode] || langCode;
}
