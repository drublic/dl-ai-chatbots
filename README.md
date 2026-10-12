# B07/26 · Module 4 · Session 4: AI Features & Chatbots

Reveal.js deck: **compose a race-season chatbot attendees build themselves** (OpenAI classify + shared Postgres).

## Run the deck

```bash
npm install
npm start   # http://localhost:1340
```

- **G**: slide navigator · **S**: speaker view

## Companion lab repo

Hands-on app (clone this in the room):

**https://github.com/drublic/dl-school-chatbots**

```bash
git clone git@github.com:drublic/dl-school-chatbots.git
cd dl-school-chatbots && npm install && cp env.example .env.local
# set OPENAI_API_KEY + DATABASE_URL, then:
DATABASE_URL=... npm run db:seed && npm run dev
```

- App: [http://localhost:3000](http://localhost:3000)
- Anatomy tour: [http://localhost:3000/anatomy](http://localhost:3000/anatomy)
- Steps: [WORKSHOP.md](https://github.com/drublic/dl-school-chatbots/blob/main/WORKSHOP.md)

## Slide map

| File | Content |
|---|---|
| `00-kickoff` | Title, speaker, poll, goals, agenda (theory + OpenSpec), setup |
| `01-theory` | Honest compose · streaming · errors · goldens/refusal · anatomy · five steps → `tasks.md` |
| `01b-openspec` | OpenSpec is the map · map UI ↔ specs · live workflow |
| `02-build-early` | Steps 1–3: companion → UI → wire (+ break 1) |
| `03-build-late` | Steps 4–5: classify → SQL → query (+ break 2) |
| `04-close` | Demos, recap, homework, resources, copyright |

Session brief: [`modul4-session-ai-chatbots.md`](modul4-session-ai-chatbots.md) (aligned with this deck).

## OpenSpec · MVP

Canonical change lives in the **companion** repo (`dl-school-chatbots`):

`openspec/changes/build-race-season-assistant/`

Deck `openspec/config.yaml` mirrors that product (five steps · classify → Postgres). Apply against the companion.

## Docs & links

| Topic | Link |
|---|---|
| AI SDK · Chatbot | https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot |
| AI SDK · Structured output | https://sdk.vercel.ai/docs/ai-sdk-core/generating-structured-data |
| AI SDK · Streaming | https://sdk.vercel.ai/docs/ai-sdk-core/streaming |
| OpenSpec | https://openspec.dev/docs/getting-started |
| Next.js App Router | https://nextjs.org/docs/app/getting-started |
| Companion repo | https://github.com/drublic/dl-school-chatbots |
| MCP homework (optional) | https://github.com/drublic/dl-school-chatbots/blob/main/mcp/README.md |
