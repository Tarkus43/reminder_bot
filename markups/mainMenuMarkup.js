import { Markup } from "telegraf";

export const mainMenuMarkup = Markup.keyboard([
  ['⏰ My timers', '➕ New timer'],
  ['❓ Help']
]).resize();