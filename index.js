const Reader = require("./lib/utils/Reader")
const ExplorerServices = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")
console.log(explorers);

console.log("---------> filtro", ExplorerServices.filterByMission(explorers, "node"));
console.log("---------> Mission", ExplorerServices.getAmountOfExplorersByMission(explorers, "node"));
console.log("---------> User",  ExplorerServices.getExplorersUsernamesByMission(explorers, "node"));