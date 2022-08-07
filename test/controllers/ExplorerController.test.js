const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
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
    });

    test("Test 2: Metodo getExplorersUsernamesByMission", () => {
        const explorerUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerUsername).toEqual(["ajolonauta1", "ajolonauta2","ajolonauta3", "ajolonauta4", "ajolonauta5",
        "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"])
    })
})