# B07/26 — Module 4: Agentic AI Engineering
## Session 4 · Implementing AI Features & Chatbots

**Total duration:** 3 hours (including 2×~10 min breaks)  
**Language:** English  
**Format:** Short theory + long step-by-step build  
**Trainer:** Hans Reinl  
**Date:** Tue, 13 Oct 2026 · 18:00–21:00

**Teaching point:** Compose what you already built (context, MCP, RAG) into a product.  
**Success:** each attendee has a chatbot **they wired** open in the browser.

**Presentation:** [`index.html`](index.html)  
**Companion lab:** [drublic/dl-school-chatbots](https://github.com/drublic/dl-school-chatbots)  
**OpenSpec MVP:** `openspec/changes/build-northstar-assistant-mvp/`

---

### What participants take away

- A Next.js chatbot they assembled themselves
- Streaming UI with recognizable loading / error / stop states
- Session 3 handbook MCP called from `/api/chat`
- Optional RAG citations late in the build
- Golden queries + refusal verified in their own UI

---

### Timeline (skewed to build)

| Block | Content | Emphasis |
|---|---|---|
| Opening | Title · speaker · poll · goals · setup | Short |
| Theory | Compose · streaming · error states · six-step map | Short |
| **Build** | 1 Scaffold → 2 UI → 3 Wire → 4 MCP → 5 RAG → 6 Query | **Majority** |
| Wrap-up | Lightning demos of *their* bots · homework | Short |

---

### Six build steps

1. **Start development** — `create-next-app` + AI SDK deps  
2. **Initial interface** — chat shell + `useChat`  
3. **Wire everything** — `streamText` + UI states  
4. **Ask via MCP** — `@ai-sdk/mcp` → handbook-server  
5. **Bring in RAG** — ground + cite (late, light)  
6. **Query** — golden set + refusal in their UI  

---

### Run the deck

```bash
npm install
npm start   # http://localhost:1340
```
