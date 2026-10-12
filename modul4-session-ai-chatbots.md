# B07/26 — Module 4: Agentic AI Engineering
## Session 4 · Implementing AI Features & Chatbots

**Total duration:** 3 hours (including 2×~10 min breaks)  
**Language:** English  
**Format:** Short theory + OpenSpec map + long step-by-step build  
**Trainer:** Hans Reinl  
**Date:** Tue, 13 Oct 2026 · 18:00–21:00

**Teaching point:** Ship a product UI that classifies season questions, queries shared Postgres, and streams grounded answers. Prior sessions (automate · context · MCP · RAG) supply the mindset; tonight’s live pipe is classify → SQL → stream. MCP wrap of query helpers is optional homework.

**Success:** each attendee has a race-season chatbot **they wired** open in the browser.

**Presentation:** [`index.html`](index.html)  
**Companion lab:** [drublic/dl-school-chatbots](https://github.com/drublic/dl-school-chatbots)  
**OpenSpec MVP (companion):** `openspec/changes/build-race-season-assistant/`

---

### What participants take away

- A Next.js race-season chatbot they assembled via companion checkpoints
- Streaming UI with recognizable loading / error / stop states
- OpenAI Decisions (`experimental_decide`) → SQL on the shared season DB
- Golden queries + refusal verified in their own UI
- Optional homework: MCP wrap of `lib/queries`, deploy, polish

---

### Timeline (skewed to build)

| Block | Content | Emphasis |
|---|---|---|
| Opening | Title · speaker · poll · goals · setup | Short |
| Theory | Compose (honest inventory) · streaming · states · goldens/refusal · five-step map | Short |
| OpenSpec | Map UI ↔ specs · `tasks.md` = tonight’s order · apply loop | Short |
| **Build** | 1 Companion → 2 UI → 3 Wire → 4 Classify+SQL → 5 Query | **Majority** |
| Wrap-up | Lightning demos of *their* bots · homework | Short |

---

### Five build steps (companion checkpoints — not greenfield `create-next-app`)

1. **Start development** — clone/run `dl-school-chatbots`, env, seed, hub tour  
2. **Initial interface** — chat shell + `useChat`  
3. **Wire everything** — `streamText` + visible UI states  
4. **Classify + query** — `experimental_decide` → `lib/queries` → grounded stream  
5. **Query** — golden set + refusal in `/chat`  

Canonical task order: companion `openspec/changes/build-race-season-assistant/tasks.md`.

---

### Run the deck

```bash
npm install
npm start   # http://localhost:1340
```
