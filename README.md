<details>
<summary>简体中文</summary>

# Bob 插件 Ollama OCR

<img src="/public/icon.svg" style="float:left;margin-right:10px;clear:both;"/>

一个强大的 OCR（光学字符识别）插件，适用于 [Bob 翻译](https://bobtranslate.com/)，利用本地 Ollama 视觉模型实现高精度图像文字提取。

## ✨ 功能特色

- 🤖 **AI 驱动 OCR**：采用先进视觉语言模型，识别更精准
- 🏠 **本地处理**：全部在本地通过 Ollama 运行，无需云端
- 🌍 **多语言支持**：自动识别，支持 100+ 种语言
- 📋 **多种输出格式**：支持 Markdown、纯文本、结构化、JSON、自定义格式
- 🎯 **高准确率**：可处理复杂文档、公式、表格、混合内容
- ⚡ **处理速度快**：本地模型推理，优化速度
- 🔧 **高度可配置**：模型、提示词、参数均可自定义

## 🚀 支持的模型

插件支持多种 Ollama 视觉模型：

- **Llama 3.2 Vision**（11B, 90B）- 最新最强
- **LLaVA**（7B, 13B, 34B）- 经典可靠
- **BakLLaVA**（7B）- 优化版本
- **Moondream**（1.8B）- 轻量级
- **自定义模型** - 支持任意 Ollama 视觉模型

## 📦 安装方法

### 前置条件

1. **安装 Bob 翻译**（版本 ≥ 1.8.0）
   - [bobtranslate.com](https://bobtranslate.com/) 下载

2. **安装 Ollama**
   - [ollama.ai](https://ollama.ai/) 下载
   - 确保 Ollama 已在本地运行

3. **下载视觉模型**

   ```bash
   # 推荐：Llama 3.2 Vision 11B
   ollama pull llama3.2-vision:11b

   # 也可尝试其他模型：
   ollama pull llava:7b
   ollama pull moondream:1.8b
   ```

### 插件安装

1. 下载最新版插件：[bob-plugin-ollama-ocr.bobplugin](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/releases/latest)
2. 双击 `.bobplugin` 文件安装
3. 在 Bob 设置中配置插件

## ⚙️ 配置说明

### 基本设置

- **Ollama 服务器地址**：默认 `http://localhost:11434/api/generate`
- **视觉模型**：选择可用模型或自定义
- **OCR 模式**：选择输出格式（Markdown、纯文本等）

### 高级设置

- **自定义提示词**：自定义 OCR 指令
- **Temperature**：控制随机性（0.0-1.0，默认 0.1）
- **最大 Token 数**：最大响应长度（默认 4096）

### OCR 模式说明

| 模式         | 描述                             | 适用场景             |
| ------------ | -------------------------------- | -------------------- |
| **Markdown** | 带格式文本，支持标题、列表、表格 | 学术论文、技术文档   |
| **纯文本**   | 简单文本提取                     | 普通文档、信件       |
| **结构化**   | 保留文档结构                     | 表单、报告、复杂布局 |
| **JSON**     | 结构化数据格式                   | 数据提取、后续处理   |
| **自定义**   | 用户自定义提示词                 | 特殊需求             |

## 🎯 使用方法

1. **截图/图片选择**：使用 Bob 的截图或图片选择功能
2. **OCR 处理**：插件自动用选定 Ollama 模型处理图片
3. **文字提取**：识别结果显示在 Bob 界面
4. **复制/翻译**：可直接翻译或复制识别文本

## 🔧 常见问题

### 常见报错

**“找不到模型”错误**

```bash
# 确认模型已安装
ollama list
ollama pull llama3.2-vision:11b
```

**“连接被拒绝”错误**

- 确保 Ollama 正在运行：`ollama serve`
- 检查插件设置中的服务器地址

**识别效果差**

- 尝试更大模型（如 llama3.2-vision:90b）
- 针对特定内容自定义提示词
- 调整 temperature 获得更稳定结果

### 性能建议

- **追求速度**：用小模型如 `moondream:1.8b`
- **追求准确**：用大模型如 `llama3.2-vision:90b`
- **平衡推荐**：用 `llama3.2-vision:11b`

## 🛠️ 开发说明

### 源码构建

```bash
# 克隆仓库
git clone https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr.git
cd bob-plugin-ollama-ocr

# 安装依赖
pnpm install

# 构建插件
pnpm build
```

### 项目结构

```
bob-plugin-ollama-ocr/
├── src/
│   ├── main.ts          # 入口
│   ├── ocr.ts           # OCR 逻辑
│   ├── constants.ts     # 配置常量
│   ├── utils.ts         # 工具函数
│   ├── lang.ts          # 语言支持
│   └── types.d.ts       # TypeScript 类型定义
├── public/
│   └── info.json        # 插件元数据
├── scripts/
│   └── build.ts         # 构建脚本
└── dist/                # 构建输出
```

## 🤝 参与贡献

欢迎贡献！可提交 issue、功能建议或 PR。

1. Fork 本仓库
2. 新建分支（`git checkout -b feature/xxx`）
3. 提交更改（`git commit -m '添加新功能'`）
4. 推送分支（`git push origin feature/xxx`）
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE)。

## 🙏 鸣谢

- [Bob 翻译](https://bobtranslate.com/) - _优秀的翻译工具_
  - [bob-plugin-ollama-translator](https://github.com/CaicoLeung/bob-plugin-ollama-translator)
  - [bob-plugin-latex-ocr](https://github.com/silver-ymz/bob-plugin-latex-ocr)
  - [bob-plugin-llm-ocr](https://github.com/Henry-Jessie/bob-plugin-llm-ocr)
- [Ollama](https://ollama.ai/) - _本地 AI 模型运行平台_
  - [Ollama OCR](https://github.com/imanoop7/Ollama-OCR) - _强大的 Ollama OCR 工具_
    - [LLaVA](https://llava-vl.github.io/) - _视觉语言模型_
    - [Llama](https://ai.meta.com/llama/) - _Meta 基础模型_

## 📞 支持与反馈

- **问题反馈**：[GitHub Issues](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/issues)
- **讨论区**：[GitHub Discussions](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/discussions)
- **Bob 社区**：[Bob 论坛](https://github.com/ripperhe/Bob/discussions)

---

为 Bob 翻译社区倾情打造 ❤️

</details>

<details open>
<summary>English</summary>

# Bob Plugin Ollama OCR

<img src="/public/icon.svg" style="float:left;margin-right:10px;clear:both;"/>

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

- [Bob Translator](https://bobtranslate.com/) - _The excellent translation app_
  - [bob-plugin-ollama-translator](https://github.com/CaicoLeung/bob-plugin-ollama-translator)
  - [bob-plugin-latex-ocr](https://github.com/silver-ymz/bob-plugin-latex-ocr)
  - [bob-plugin-llm-ocr](https://github.com/Henry-Jessie/bob-plugin-llm-ocr)
- [Ollama](https://ollama.ai/) - _Local AI model runner_
  - [Ollama OCR](https://github.com/imanoop7/Ollama-OCR) - _A powerful Ollama OCR tool to extract text from images and PDFs_
    - [LLaVA](https://llava-vl.github.io/) - _Vision language model_
    - [Llama](https://ai.meta.com/llama/) - _Foundation models by Meta_

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Johann-Goncalves-Pereira/bob-plugin-ollama-ocr/discussions)
- **Bob Community**: [Bob Community Forum](https://github.com/ripperhe/Bob/discussions)

---

Made with ❤️ for the Bob Translator community

</details>
