const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mission", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
})