const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const UsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(UsernamesByMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt(request.params.score);
    const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
    response.json({score: score, trick: fizzbuzzTrick});
});