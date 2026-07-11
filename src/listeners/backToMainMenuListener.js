import { mainMenuMarkup } from "../markups/mainMenuMarkup.js";
import { userStates } from "../userStates.js";

export const backToMainMenuListener = (bot) => {
  bot.hears('↩ back to main menu', (ctx) => {
    userStates.set(ctx.from.id, 'pending')
    ctx.reply('Welcome to the main menu:', mainMenuMarkup)
  })
}