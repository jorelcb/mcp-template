# 🧩 MCP Server Template

> The ultimate starter kit for building professional Model Context Protocol servers.

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-TypeScript-blue.svg)]()
[![MCP](https://img.shields.io/badge/MCP-Ready-green.svg)](https://modelcontextprotocol.io)

---

## 🎯 Overview

Stop reinventing the wheel. This template provides a **production-ready foundation** for creating new MCP servers, pre-configured with the best practices for TypeScript, Docker, and Gemini CLI Extensions.

### ✨ What's Included?

- **🏗️ Dual-Layer Architecture**: Setup for both Raw MCP and Gemini Extensions.
- **🔌 Official SDK**: Pre-configured `@modelcontextprotocol/sdk`.
- **🐳 Docker Ready**: `Dockerfile` optimized for deployment.
- **🤖 Agent Context**: `GEMINI.md` structure for "Soft Logic".
- **🛠️ TypeScript**: Strict mode, linting, and build scripts.

## 🚀 Usage

### 1. Create a New Server

```bash
# 1. Clone the template
git clone https://github.com/jorelcb/mcp-template my-new-server

# 2. Reset git history
cd my-new-server
rm -rf .git
git init

# 3. Install dependencies
npm install
```

### 2. Customize

1.  **Update `package.json`**: Set your server name and description.
2.  **Implement Logic**: Edit `src/index.ts` to add your Tools.
3.  **Define Agent Persona**: Edit `GEMINI.md` to guide the AI.
4.  **Add Commands**: Create `.toml` files in `commands/`.

## 📂 Project Structure

```
.
├── src/                # 🧠 TypeScript Source Code
├── commands/           # ⚡ Gemini CLI Slash Commands
├── GEMINI.md           # 🤖 Agent Context (Soft Logic)
├── gemini-extension.yaml # ⚙️ Extension Config
└── Dockerfile          # 🐳 Container Config
```

## 🤝 Contributing

Contributions to the template are welcome! Please ensure any changes are generic and useful for *all* future servers.

---
**Part of the [MCP Servers Monorepo](../README.md)**
