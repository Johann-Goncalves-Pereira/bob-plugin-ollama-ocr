declare const $option: {
  baseUrl?: string;
  model?: string;
  customModel?: string;
  ocrMode?: string;
  temperature?: string;
  maxTokens?: string;
  customPrompt?: string;
};

declare const $http: {
  request: (options: {
    method: string;
    url: string;
    header?: Record<string, string>;
    body?: any;
    handler: (result: {
      error?: any;
      data?: any;
      response?: {
        statusCode: number;
      };
    }) => void;
  }) => void;
};

declare const $log: {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

declare global {
  const $option: {
    baseUrl?: string;
    model?: string;
    customModel?: string;
    ocrMode?: string;
    temperature?: string;
    maxTokens?: string;
    customPrompt?: string;
  };

  const $http: {
    request: (options: {
      method: string;
      url: string;
      header?: Record<string, string>;
      body?: any;
      handler: (result: {
        error?: any;
        data?: any;
        response?: {
          statusCode: number;
        };
      }) => void;
    }) => void;
  };

  const $log: {
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
  };
}

export interface OCRQuery {
  image: {
    toBase64(): string;
  };
  detectFrom: string;
}

export interface OCRResult {
  texts: Array<{ text: string }>;
  from?: string;
}

export interface OCRError {
  type: string;
  message: string;
  addition?: string;
}

export interface OCRCompletion {
  result?: {
    texts: Array<{ text: string }>;
    from?: string;
  };
  error?: OCRError;
}
