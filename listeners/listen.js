import { mainMenuListener } from "./mainMenuListener.js";
import { backToMainMenuListener } from "./backToMainMenuListener.js";

export const listen = (bot) => {
  mainMenuListener(bot);
  backToMainMenuListener(bot);
}