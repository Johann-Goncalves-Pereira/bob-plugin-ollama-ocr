import { OCRQuery, OCRCompletion } from "./types";
import {
  DEFAULT_OLLAMA_URL,
  OCR_PROMPTS,
  DEFAULT_TEMPERATURE,
  DEFAULT_MAX_TOKENS,
  OCR_MODES,
} from "./constants";
import {
  handleOCRError,
  validateConfiguration,
  getLanguageFromCode,
} from "./utils";

interface OllamaRequest {
  model: string;
  prompt: string;
  images: string[];
  stream: boolean;
  options?: {
    temperature?: number;
    num_predict?: number;
  };
}

interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

export async function processOCR(
  query: OCRQuery,
  completion: (result: OCRCompletion) => void
): Promise<void> {
  try {
    // Validate configuration
    const validation = validateConfiguration();
    if (!validation.isValid) {
      return handleOCRError(
        {
          type: "config",
          message: validation.message || "Configuration error",
          addition: "Please check your plugin settings",
        },
        completion
      );
    }

    // Get image data
    const imageData = query.image;
    if (!imageData) {
      return handleOCRError(
        {
          type: "param",
          message: "No image data provided",
          addition: "Please select an image to process",
        },
        completion
      );
    }

    const base64Image = imageData.toBase64();
    if (!base64Image) {
      return handleOCRError(
        {
          type: "param",
          message: "Failed to convert image to base64",
          addition: "Image format may not be supported",
        },
        completion
      );
    }

    // Get configuration options
    const {
      baseUrl = DEFAULT_OLLAMA_URL,
      model = "llama3.2-vision:11b",
      customModel,
      ocrMode = "markdown",
      temperature = DEFAULT_TEMPERATURE.toString(),
      maxTokens = DEFAULT_MAX_TOKENS.toString(),
      customPrompt,
    } = $option;

    // Determine the model to use
    const selectedModel =
      model === "custom" ? customModel || "llama3.2-vision:11b" : model;

    // Determine the prompt to use
    const language = getLanguageFromCode(query.detectFrom);
    let prompt: string;

    if (ocrMode === OCR_MODES.custom && customPrompt && customPrompt.trim()) {
      prompt = customPrompt.replace("{language}", language);
    } else {
      const promptGenerator =
        OCR_PROMPTS[ocrMode as keyof typeof OCR_PROMPTS] ||
        OCR_PROMPTS.markdown;
      prompt = promptGenerator(language);
    }

    // Prepare request body
    const requestBody: OllamaRequest = {
      model: selectedModel,
      prompt: prompt,
      images: [base64Image],
      stream: false,
      options: {
        temperature: parseFloat(temperature) || DEFAULT_TEMPERATURE,
        num_predict: parseInt(maxTokens) || DEFAULT_MAX_TOKENS,
      },
    };

    $log.info(
      `Starting OCR with model: ${selectedModel}, mode: ${ocrMode}, language: ${language}`
    );

    // Make the API request
    $http.request({
      method: "POST",
      url: baseUrl,
      header: {
        "Content-Type": "application/json",
      },
      body: requestBody,
      handler: (result) => {
        if (result.error) {
          return handleOCRError(
            {
              type: "network",
              message: `Network error: ${result.error.message || "Unknown error"}`,
              addition:
                "Please check if Ollama server is running and accessible",
            },
            completion
          );
        }

        if (result.response && result.response.statusCode >= 400) {
          let errorMessage = `HTTP ${result.response.statusCode}`;
          if (result.data && typeof result.data === "object") {
            errorMessage += `: ${result.data.error || "Unknown error"}`;
          }

          return handleOCRError(
            {
              type: "api",
              message: errorMessage,
              addition:
                result.response.statusCode === 404
                  ? "Model not found. Please ensure the model is installed in Ollama"
                  : "API request failed",
            },
            completion
          );
        }

        try {
          const responseData = result.data as OllamaResponse;

          if (!responseData || !responseData.response) {
            return handleOCRError(
              {
                type: "api",
                message: "No response from Ollama",
                addition: "Empty or invalid response received",
              },
              completion
            );
          }

          const extractedText = responseData.response.trim();

          if (!extractedText) {
            return handleOCRError(
              {
                type: "api",
                message: "No text extracted from image",
                addition:
                  "The image may not contain readable text or the model failed to process it",
              },
              completion
            );
          }

          $log.info(
            `OCR completed successfully. Extracted ${extractedText.length} characters`
          );

          // Return successful result
          completion({
            result: {
              texts: [{ text: extractedText }],
              from: query.detectFrom,
            },
          });
        } catch (parseError) {
          return handleOCRError(
            {
              type: "api",
              message: "Failed to parse response",
              addition: `Response parsing error: ${parseError instanceof Error ? parseError.message : "Unknown error"}`,
            },
            completion
          );
        }
      },
    });
  } catch (error) {
    return handleOCRError(
      {
        type: "unknown",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
        addition: "Unexpected error during OCR processing",
      },
      completion
    );
  }
}
