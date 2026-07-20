import { backToMainMenuMarkup } from "../markups/backToMainMenuMarkup.js";
import * as chrono from "chrono-node";
import {userStates} from "../userStates.js"


export const mainMenuListener = (bot) => {
  bot.hears('⏰ My timers', (ctx) => {
    ctx.reply('Here are your timers:', backToMainMenuMarkup);      
    });
    
  bot.hears('❓ Help', (ctx) => {
    ctx.reply('Help:', backToMainMenuMarkup) ;
    });

  bot.hears('➕ New timer', (ctx) => {
    const reminder = {
      user_id: ctx.from.id,
    }

    ctx.reply('enter in EN any time you want', backToMainMenuMarkup)

    bot.on('text', (ctx) => {
      const result = ctx.message.text 
      const time = chrono.parse(result, new Date(), {forwardDate: true,})
      let msTime
      msTime = time[0].date().getTime()
      const diff = msTime - Date.now()
      
      ctx.reply(`через ${diff}мс (${Math.round(diff / 1000)} секунд)`)
      ctx.reply('enter description or leave it blank')
    })
  })
}
