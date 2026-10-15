# EquipLink Ethiopia — CodePen + secure OpenAI backend

## Important
CodePen runs browser-side HTML/CSS/JS only. It cannot safely store an OpenAI secret or run this Node.js backend. Deploy the backend separately (for example, Render, Railway, Fly.io, or your own server) and store `OPENAI_API_KEY` in that host's environment variables. Never put the key in CodePen.

## CodePen setup
1. Create a new Pen.
2. Paste `codepen-html.txt` into HTML, `codepen-css.txt` into CSS, and `codepen-js.txt` into JS.
3. In Pen Settings → JavaScript, add external scripts: `https://cdn.tailwindcss.com` and `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js`. Optionally add Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap` as a stylesheet in Pen Settings → HTML.
4. In `codepen-js.txt`, replace `https://YOUR-BACKEND-DOMAIN.example/api/assistant` with your deployed backend URL ending in `/api/assistant`.

## Backend setup
1. Deploy `server.js` and `package.json` to a Node.js host. Use Node 18.17+.
2. Set environment variables on the host: `OPENAI_API_KEY` (secret), `OPENAI_MODEL=gpt-4.1-mini`, `OPENAI_WEB_SEARCH_ENABLED=true`, and `ALLOWED_ORIGINS` to the exact origin(s) used by your CodePen preview.
3. Install dependencies with `npm install`; start with `npm start`.
4. Visit `/api/health` on your deployed backend. It should show `openaiConfigured: true`.

## Notes
- OpenAI API calls and web search may cost money.
- Add authentication and stronger usage limits before exposing the backend publicly.
- CodePen preview origins can vary. If CORS blocks requests, add the exact origin shown in your browser to `ALLOWED_ORIGINS`, redeploy, and reload the Pen. Do not use `*` for production.
- App records in this demo are browser-side demo data unless you connect a real database/API.
