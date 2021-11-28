"use strict";
const Uni3lMainAbl = require("../../abl/uni3l-main-abl.js");

class Uni3lMainController {
  init(ucEnv) {
    return Uni3lMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new Uni3lMainController();
