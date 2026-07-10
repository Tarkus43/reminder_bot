import { backToMainMenuMarkup } from "../markups/backToMainMenuMarkup.js";
import * as chrono from "chrono-node";


export const mainMenuListener = (bot) => {
  bot.hears('⏰ My timers', (ctx) => {
    ctx.reply('Here are your timers:', backToMainMenuMarkup);      
    });
    
  bot.hears('❓ Help', (ctx) => {
    ctx.reply('Help:', backToMainMenuMarkup) ;
    });

  bot.hears('➕ New timer', (ctx) => {
    ctx.reply('enter in EN any time you want', backToMainMenuMarkup)
    bot.on('text', (ctx) => {
      const result = ctx.message.text 
      const time = chrono.parse(result, new Date(), {forwardDate: true,})
      const msTime = time[0].date().getTime()
      if (!msTime) {
        ctx.reply('please, try again, I didnt understand', backToMainMenuMarkup)
      } else {
        ctx.reply('your time is: ' + msTime, backToMainMenuMarkup)
      }
      // usersStates.delete(ctx.from.id)
    })
  })
}
