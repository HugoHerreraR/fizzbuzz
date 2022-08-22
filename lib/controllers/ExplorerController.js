const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
    
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersbyMission = ExplorerService.filterByMission(explorers, mission);
        return explorersbyMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernames;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const numUsers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numUsers;
    }
}

module.exports = ExplorerController;
