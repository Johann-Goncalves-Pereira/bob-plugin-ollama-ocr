# Bob Plugin Ollama OCR

![Bob Logo](https://github.com/ripperhe/Bob/raw/master/docs/.vuepress/public/logo.png)

A powerful OCR (Optical Character Recognition) plugin for [Bob Translator](https://bobtranslate.com/) that leverages local Ollama vision models to extract text from images with AI precision.

## ✨ Features

- 🤖 **AI-Powered OCR**: Uses advanced vision language models for superior text recognition
- 🏠 **Local Processing**: Runs entirely on your local machine via Ollama - no cloud dependencies
- 🌍 **Multi-Language Support**: Supports 100+ languages with automatic language detection
- 📋 **Multiple Output Formats**: Markdown, Plain Text, Structured, JSON, and Custom formats
- 🎯 **High Accuracy**: Handles complex documents, formulas, tables, and mixed content
- ⚡ **Fast Processing**: Optimized for speed with local model inference
- 🔧 **Highly Configurable**: Customizable models, prompts, and parameters

## 🚀 Supported Models

The plugin supports various Ollama vision models:

- **Llama 3.2 Vision** (11B, 90B) - Latest and most capable
- **LLaVA** (7B, 13B, 34B) - Popular and reliable
- **BakLLaVA** (7B) - Optimized variant
- **Moondream** (1.8B) - Lightweight option
- **Custom Models** - Use any Ollama vision model

## 📦 Installation

### Prerequisites

1. **Install Bob Translator** (version >= 1.8.0)
   - Download from [bobtranslate.com](https://bobtranslate.com/)

2. **Install Ollama**
   - Download from [ollama.ai](https://ollama.ai/)
   - Make sure Ollama is running on your system

3. **Download a Vision Model**

   ```bash
   # Recommended: Llama 3.2 Vision 11B
   ollama pull llama3.2-vision:11b

   # Or try other models:
   ollama pull llava:7b
   ollama pull moondream:1.8b
   ```

### Plugin Installation

1. Download the latest plugin: [bob-plugin-ollama-ocr.bobplugin](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/releases/latest)
2. Double-click the `.bobplugin` file to install
3. Configure the plugin in Bob's settings

## ⚙️ Configuration

### Basic Settings

- **Ollama Server URL**: Default `http://localhost:11434/api/generate`
- **Vision Model**: Choose from available models or specify custom
- **OCR Mode**: Select output format (Markdown, Plain Text, etc.)

### Advanced Settings

- **Custom Prompt**: Define your own OCR instructions
- **Temperature**: Control randomness (0.0-1.0, default: 0.1)
- **Max Tokens**: Maximum response length (default: 4096)

### OCR Modes

| Mode           | Description                                | Best For                        |
| -------------- | ------------------------------------------ | ------------------------------- |
| **Markdown**   | Formatted text with headers, lists, tables | Academic papers, technical docs |
| **Plain Text** | Simple text extraction                     | Basic documents, letters        |
| **Structured** | Preserves document structure               | Forms, reports, complex layouts |
| **JSON**       | Structured data format                     | Data extraction, processing     |
| **Custom**     | User-defined prompt                        | Specialized requirements        |

## 🎯 Usage

1. **Screenshot/Image Selection**: Use Bob's screenshot or image selection feature
2. **OCR Processing**: The plugin will automatically process the image using your selected Ollama model
3. **Text Extraction**: Extracted text appears in Bob's interface
4. **Copy/Translate**: Use the extracted text for translation or copy to clipboard

## 🔧 Troubleshooting

### Common Issues

**"Model not found" error**

```bash
# Make sure the model is installed
ollama list
ollama pull llama3.2-vision:11b
```

**"Connection refused" error**

- Ensure Ollama is running: `ollama serve`
- Check the server URL in plugin settings

**Poor OCR quality**

- Try a larger model (e.g., llama3.2-vision:90b)
- Use custom prompts for specific content types
- Adjust temperature for more consistent results

### Performance Tips

- **For speed**: Use smaller models like `moondream:1.8b`
- **For accuracy**: Use larger models like `llama3.2-vision:90b`
- **For balance**: Use `llama3.2-vision:11b` (recommended)

## 🛠️ Development

### Building from Source

```bash
# Clone repository
git clone https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr.git
cd bob-plugin-ollama-ocr

# Install dependencies
pnpm install

# Build plugin
pnpm build
```

### Project Structure

```
bob-plugin-ollama-ocr/
├── src/
│   ├── main.ts          # Entry point
│   ├── ocr.ts           # OCR processing logic
│   ├── constants.ts     # Configuration constants
│   ├── utils.ts         # Utility functions
│   ├── lang.ts          # Language support
│   └── types.d.ts       # TypeScript definitions
├── public/
│   └── info.json        # Plugin metadata
├── scripts/
│   └── build.ts         # Build script
└── dist/                # Build output
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Bob Translator](https://bobtranslate.com/) - The excellent translation app
- [Ollama](https://ollama.ai/) - Local AI model runner
- [LLaVA](https://llava-vl.github.io/) - Vision language model
- [Llama](https://ai.meta.com/llama/) - Foundation models by Meta

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/discussions)
- **Bob Community**: [Bob Community Forum](https://github.com/ripperhe/Bob/discussions)

---

Made with ❤️ for the Bob Translator community
