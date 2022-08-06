const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
    
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersbyMission = ExplorerService.filterByMission(explorers, mission);
    return explorersbyMission;
  }
}

module.exports = ExplorerController;
