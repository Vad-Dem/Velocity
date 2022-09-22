import * as flsFunction from "./function.js";
import WOW from "../../node_modules/wowjs/dist/wow.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
  new WOW.WOW({
    mobile: false,
  }).init();
});
