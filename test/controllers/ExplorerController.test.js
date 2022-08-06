const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("est para ExplorerController", () => {
    test("Test 1: metodo getExplorersByMission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        explorersByMission.forEach(function(explorer) {
            expect(explorer).toHaveProperty('mission', 'node')
        })
    });
    test("Test 1.1: metodo getExplorersByMission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("java");
        explorersByMission.forEach(function(explorer) {
            expect(explorer).toHaveProperty('mission', 'java')
        })
    })
})