# Aviator Predictor

A template for a prediction API, web front-end, and a Telegram bot.

## Features

- REST API (Express)
- History and statistics endpoint
- Simple ML prediction stub
- Telegram bot integration
- Web front-end (HTML/CSS/JS)
- Chart placeholder
- Easily configurable and extendable

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Environment**
   - Copy `.env.example` to `.env`
   - Update `TELEGRAM_TOKEN` with your bot token.

3. **Run Server**
   ```bash
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000)

4. **Run Bot**
   ```bash
   npm run bot
   ```

## API

- `POST /predict` — Get a prediction.  
  Body: `{ "input": "data" }`
- `GET /history` — All prediction history
- `GET /history/analyze` — Summary stats

## Extending

- Implement your model in `server/services/model.js`
- Add logic to front-end `public/script.js`, and dashboard chart in `public/chart.js`

## License

MIT
