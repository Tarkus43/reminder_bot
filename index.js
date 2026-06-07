import { Telegraf } from "telegraf";
import { config } from "./config.js";
const bot = new Telegraf(config.telegramToken);
import { mainMenuMarkup } from "./markups/mainMenuMarkup.js";

bot.start((ctx) => {
  ctx.reply("Welcome to my reminder/timer bot! Choose an option below:", mainMenuMarkup)
});

bot.launch();