#!/usr/bin/env node

/**
 * MCP Server Template
 * 
 * This is a template for creating MCP servers.
 * It uses the @modelcontextprotocol/sdk to expose tools/resources.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

/**
 * Create server instance
 */
const server = new Server(
    {
        name: "mcp-template",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

/**
 * Handler that lists available tools.
 * In this template, we expose a simple 'ping' tool.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "ping",
                description: "A simple health check tool",
                inputSchema: zodToJsonSchema(z.object({})),
            },
        ],
    };
});

/**
 * Handler for the tool execution.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    switch (request.params.name) {
        case "ping": {
            return {
                content: [
                    {
                        type: "text",
                        text: "pong",
                    },
                ],
            };
        }
        default:
            throw new Error("Unknown tool");
    }
});

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output.
 */
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
});

// Helper for Zod schema conversion (simple version for template)
// In a real app, you might use 'zod-to-json-schema' package,
// but for simple templates, we can just define the schema object manually or use a helper.
// For the template, let's keep it simple and explicit in the handler or define a helper.
// Actually, inputSchema expects a JSON Schema object.
function zodToJsonSchema(schema: z.ZodType): any {
    // This is a placeholder. In real implementation, install `zod-to-json-schema`
    // or construct the JSON schema manually for simple cases.
    // For this template, we'll manually return an empty object schema since 'ping' has no args.
    return {
        type: "object",
        properties: {},
    };
}
