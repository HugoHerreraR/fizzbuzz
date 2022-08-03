const Reader = require("./lib/utils/Reader")
const ExplorerServices = require("./lib/services/ExplorerService")
const FizzbuzzService = require("./lib/services/FizzbuzzService")

const explorers = Reader.readJsonFile("explorers.json")
console.log(explorers);

console.log("---------> filtro", ExplorerServices.filterByMission(explorers, "node"));
console.log("---------> Mission", ExplorerServices.getAmountOfExplorersByMission(explorers, "node"));
console.log("---------> User",  ExplorerServices.getExplorersUsernamesByMission(explorers, "node"));

const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)) // {name: "Explorer1", score: 1, trick: 1}

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}