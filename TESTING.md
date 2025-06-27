# Testing the Bob Plugin Ollama OCR

## Prerequisites

1. **Install Ollama**

   ```bash
   # macOS
   brew install ollama

   # Or download from https://ollama.ai
   ```

2. **Start Ollama Server**

   ```bash
   ollama serve
   ```

3. **Install a Vision Model**

   ```bash
   # Recommended: Llama 3.2 Vision 11B
   ollama pull llama3.2-vision:11b

   # Alternative lightweight option for testing
   ollama pull moondream:1.8b
   ```

4. **Verify Ollama Setup**

   ```bash
   # List installed models
   ollama list

   # Test with a simple prompt
   curl -X POST http://localhost:11434/api/generate \
     -H "Content-Type: application/json" \
     -d '{"model": "llama3.2-vision:11b", "prompt": "Hello", "stream": false}'
   ```

## Plugin Installation in Bob

1. **Open Bob Translator**
2. **Go to Preferences > Services > OCR**
3. **Click the "+" button to add a new service**
4. **Select the `bob-plugin-ollama-ocr.bobplugin` file from the `dist/` folder**
5. **Configure the plugin:**
   - **Ollama Server URL**: `http://localhost:11434/api/generate`
   - **Vision Model**: Select `llama3.2-vision:11b` or your installed model
   - **OCR Mode**: Start with `Markdown` for best results
   - **Temperature**: Leave at default `0.1`
   - **Max Tokens**: Leave at default `4096`

## Testing

1. **Take a screenshot** or select an image with text
2. **Use Bob's OCR feature** - it should now use the Ollama OCR plugin
3. **Check the extracted text** - it should appear in Bob's interface

## Troubleshooting

### "Connection refused" error

- Make sure Ollama is running: `ollama serve`
- Check if the server is accessible: `curl http://localhost:11434/api/version`

### "Model not found" error

- Verify the model is installed: `ollama list`
- Make sure the model name in the plugin settings matches exactly

### Poor OCR quality

- Try a larger model like `llama3.2-vision:90b`
- Use "Structured" or "Custom" OCR mode for specific content types
- Adjust the temperature setting (lower = more consistent)

## Development Testing

To test changes during development:

```bash
# Rebuild the plugin
pnpm build

# The new plugin will be in dist/bob-plugin-ollama-ocr.bobplugin
# Reinstall it in Bob to test changes
```
