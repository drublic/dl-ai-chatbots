## Why

Across Sessions 1–3 attendees already practiced automation, context, MCP tools, and RAG scripts. Session 4’s job is composition: stack those pieces into one product so each person leaves with a chatbot **they built**, open in the browser — not another RAG lecture.

## What Changes

- Ship the companion lab [dl-school-chatbots](https://github.com/drublic/dl-school-chatbots) built in six steps: scaffold → UI → wire streaming → MCP → RAG → query.
- Streaming chat UI with clear loading / error / stop states.
- Reuse the Session 3 handbook MCP (`search_documents` and related) from the chat API via the AI SDK MCP client.
- Add retrieval grounding (RAG) only after MCP works; then run golden questions and a refusal path.
- Secrets stay server-side only.

## Non-goals

- Deep RAG theory redo (covered in Session 3); tonight RAG is a late wiring step.
- Reveal slide-deck edits outside the apply target.
- Vercel deploy, auth, rate limits (homework).
- New document ingest / own Pinecone namespace (homework).
- Multi-agent orchestration or write-actions beyond handbook search/fetch.

## Capabilities

### New Capabilities

- `handbook-assistant`: Compose prior-session MCP + knowledge into a browser chatbot attendees build step by step — streaming UI, MCP tools, then RAG grounding, then golden queries.

### Modified Capabilities

- (none — greenfield)

## Impact

- Companion package `dl-school-chatbots` with `ai`, `@ai-sdk/openai`, `@ai-sdk/react`, `@ai-sdk/mcp`, `zod`, and Pinecone client when the RAG step lands.
- Depends on Session 3 handbook MCP + `workshop-shared` (and matching embedding model for RAG).
- Workshop deck stays at repo root; apply implements only the app.
