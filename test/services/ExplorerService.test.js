const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mission", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});

describe("Test para ExplorerService", () => {
    test("Requerimiento 2: test para getAmountOfExplorersByMission", () => {
        const explorers = [{mission: "node"}, {mission: "node"}];
        const explorer = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorer).toBe(2);
    });
});

describe("Test para ExplorerService", () => {
    test("Requerimiento 3: Obtiene los users en base a una mission", () => {
        const explorers = [{mission: "node", githubUsername: "Rosa"}, {mission: "node", githubUsername: "Hugo"}, {mission: "java", githubUsername: "Manuel"}];
        const explorerUser = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorerUser).toStrictEqual(["Rosa", "Hugo"]);
        expect(explorerUser.length).toBe(2);
    });
    test("Requerimiento 3.1: Obtiene los users en base a una mission", () => {
        const explorers = [{mission: "node", githubUsername: "Rosa"}, {mission: "node", githubUsername: "Hugo"}, {mission: "java", githubUsername: "Manuel"}];
        const explorerUser = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        expect(explorerUser).toStrictEqual(["Manuel"]);
        expect(explorerUser.length).toBe(1);
    });
});