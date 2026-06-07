import { mainMenuMarkup } from "../markups/mainMenuMarkup.js";

export const backToMainMenuListener = (bot) => {
  bot.hears('↩ back to main menu', (ctx) => {
    ctx.reply('Welcome to the main menu:', mainMenuMarkup)
  })
}