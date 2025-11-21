require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MODEL_PATH: process.env.MODEL_PATH || './data/model.json',
  HISTORY_PATH: process.env.HISTORY_PATH || './data/history.json',
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
};
