const TelegramBot = require('node-telegram-bot-api');
const config = require('../server/config');

const bot = new TelegramBot(config.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/predict (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const input = match[1];
  // Add API communication logic
  bot.sendMessage(chatId, `Prediction for "${input}": ${Math.random()}`);
});

console.log('Telegram bot started');
