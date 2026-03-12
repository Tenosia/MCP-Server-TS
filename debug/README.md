# Debug

HTTP files for testing the API. Use with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) in VS Code or Cursor.

## Usage

1. Run `pnpm dev` so the Next.js API is available at `http://127.0.0.1:3000`.
2. Open `apitest.http` and run requests with the "Send Request" link above each `###` block.

## Endpoints

| Endpoint | Method | Body |
|----------|--------|------|
| `/api/submit-project` | POST | `{ url, content?, status?, is_featured?, sort? }` |
| `/api/submit-projects` | POST | `[{ url }, ...]` |
| `/api/summarize-project` | POST | `{ name }` |
| `/api/summarize-projects` | POST | `{ page?, limit? }` |
