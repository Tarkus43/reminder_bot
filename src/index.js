import { Telegraf } from "telegraf";
import { config } from "../config.js";
import { mainMenuMarkup } from "./markups/mainMenuMarkup.js";
import { listen } from "./listeners/listen.js";

const bot = new Telegraf(config.telegramToken);
listen(bot);

bot.start((ctx) => {
  ctx.reply("Welcome to my reminder/timer bot! Choose an option below:", mainMenuMarkup)
  
});


bot.launch();