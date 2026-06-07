import { backToMainMenuMarkup } from "../markups/backToMainMenuMarkup.js";
export const mainMenuListener = (bot) => {
  bot.hears('⏰ My timers', (ctx) => {
    ctx.reply('Here are your timers:');
  });
  
  bot.hears('➕ New timer', (ctx) => {
    ctx.reply('Create a new timer:');
  });
  
  bot.hears('❓ Help', (ctx) => {
    ctx.reply('Help:', backToMainMenuMarkup);
  });
}