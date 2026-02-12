# MCP Server Template

A starter template for building new Model Context Protocol (MCP) servers. It comes pre-configured with TypeScript, the official SDK, and the structure for a Gemini CLI Extension.

## Quick Start

1.  **Copy this directory:**
    ```bash
    cp -r mcp-template my-new-server
    cd my-new-server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Customer `package.json`:** Update the name, description, and version.

4.  **Implement your Tools:** Edit `src/index.ts` to add your custom tools and logic.

5.  **Configure Extension:**
    - Edit `extension.yaml` with your extension name and description.
    - Edit `GEMINI.md` to provide context/rules for the Agent.
    - Add custom prompts in `commands/*.toml`.

6.  **Build:**
    ```bash
    npm run build
    ```

## Structure

- `src/index.ts`: Main entry point for the MCP server.
- `extension.yaml`: Configuration for Gemini CLI.
- `GEMINI.md`: Context file for the Agent.
- `commands/`: Directory for custom slash command definitions (.toml).
