## Context

See proposal.md. Prior sessions already delivered MCP handbook tools and a Pinecone corpus. Tonight’s design is a **compose path** inside `northstar-assistant/`, not a second RAG curriculum. Specs: `specs/handbook-assistant/spec.md`.

## Goals / Non-Goals

**Goals:**
- Six-step build that matches the live session: scaffold → UI → wire → MCP → RAG → query.
- Short conceptual surface for streaming + error states (dealt with in the UI/API layer).
- Reuse Session 3 handbook MCP via `@ai-sdk/mcp` from the route handler.

**Non-Goals:**
- Re-teaching chunking, embeddings theory, or LangChain ingest.
- Deploy/auth/eval harness (homework).
- Browser-side MCP.

## Decisions

1. **Compose narrative over RAG-first**
   - Early milestones: empty chat that streams from a model with no tools.
   - Mid: attach MCP tools (`createMCPClient` → `tools()` → `streamText`).
   - Late: add RAG grounding / citations; then golden queries.
   - Alternative (RAG-first product) rejected — conflicts with “stack what we built.”

2. **MCP via AI SDK client (stdio locally)**
   - Local workshop: stdio transport to Session 3 `handbook-server` (or equivalent path).
   - Discover tools with `mcpClient.tools()`; pass into `streamText`; close on stream end (`onFinish` / `onEnd` per current SDK).
   - HTTP MCP is fine later; stdio matches “the MCP we already have.”
   - Alternative: reimplement search as a hand-rolled AI SDK tool only — loses the MCP reuse lesson.

3. **RAG as a late enrichment**
   - After MCP answers work, add retrieval (shared index) and citation UI.
   - Embedding model env must match Session 3 ingest.
   - Keep LangChain out of the chat request path.

4. **Streaming + error recognition in the product shell**
   - `useChat` status: `ready` | `submitted` | `streaming` | `error`.
   - Show spinner / disable send while in-progress; show generic error + retry; optional `stop()`.
   - Server returns UI message stream; no keys with `NEXT_PUBLIC_`.

5. **App location**
   - Companion repo: [drublic/dl-school-chatbots](https://github.com/drublic/dl-school-chatbots) (local: `../dl-school-chatbots`).
   - Deck stays in `dl-ai-chatbots`; apply edits the companion only.

## Risks / Trade-offs

- **[Stdio MCP in Next.js]** Process spawn quirks on serverless → Mitigation: local `next dev` for the workshop; note HTTP MCP for deploy homework.
- **[Embedding mismatch on RAG step]** → Mitigation: document `OPENAI_EMBEDDING_MODEL`; fail loudly.
- **[Scope creep into RAG theory]** → Mitigation: tasks stop at wiring + one citation path; point back to Session 3 slides for depth.
- **[SDK API churn]** → Mitigation: pin versions at apply; follow current `@ai-sdk/mcp` + chat UI docs.

## Migration Plan

1. Scaffold + UI + streaming (no tools).
2. Wire MCP tools; verify remote-days via MCP.
3. Add RAG/citations; run golden set + refusal.
4. Optional `lab-*` tags between steps for catch-up.

Rollback: remove `northstar-assistant/`; corpus and MCP server unchanged.
