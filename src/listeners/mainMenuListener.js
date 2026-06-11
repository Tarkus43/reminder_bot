import { backToMainMenuMarkup } from "../markups/backToMainMenuMarkup.js";
export const mainMenuListener = (bot) => {
  bot.hears('⏰ My timers', (ctx) => {
    ctx.reply('Here are your timers:', backToMainMenuMarkup);
  });
  
  bot.hears('➕ New timer', (ctx) => {
    ctx.reply('function in progress :)', backToMainMenuMarkup);
  });
  
  bot.hears('❓ Help', (ctx) => {
    ctx.reply('Help:', backToMainMenuMarkup);
  });
}