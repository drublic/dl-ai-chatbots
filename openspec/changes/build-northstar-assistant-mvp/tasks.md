## 1. Start development

- [x] 1.1 Companion repo `dl-school-chatbots` scaffolds Next.js (App Router, TypeScript, Tailwind) — verify `npm run dev` opens `http://localhost:3000`
- [x] 1.2 AI SDK deps installed (`ai`, `@ai-sdk/openai`, `@ai-sdk/react`, `@ai-sdk/mcp`, `zod`)
- [x] 1.3 `env.example` documents OpenAI, Pinecone, and `HANDBOOK_MCP_CWD` (no `NEXT_PUBLIC_` secrets)

## 2. Initial interface

- [x] 2.1 Chat shell on `app/page.tsx` (message list, input, send, empty state)
- [x] 2.2 `useChat` + `DefaultChatTransport` → `/api/chat`; render `message.parts`

## 3. Wire streaming

- [x] 3.1 `app/api/chat/route.ts` with `streamText` + UI message stream + Northstar instructions
- [x] 3.2 UI surfaces status (disable send while busy, error banner, retry by sending again)
- [x] 3.3 `stop()` while streaming

## 4. Ask via MCP

- [x] 4.1 `lib/mcp.ts` + route: stdio MCP client when `HANDBOOK_MCP_CWD` is set; tools passed to `streamText`; client closed on stream end
- [ ] 4.2 Live verify: remote-days question → MCP search → answer **3** (needs Session 3 checkout + keys)
- [x] 4.3 UI shows “Searching handbook…” for tool parts

## 5. Bring in RAG

- [ ] 5.1 Implement `lib/retrieval.ts` (stub today) with embedding model matching Session 3 ingest
- [ ] 5.2 Integrate citations (`source` + `page`) in the UI for grounded answers

## 6. Query

- [x] 6.1 Golden question list in `data/golden-questions.md` / WORKSHOP.md
- [ ] 6.2 Live verify stock-ticker refusal in the UI
- [x] 6.3 Companion README documents clone/run + MCP path; secrets stay server-side
