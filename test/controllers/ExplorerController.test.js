const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Test 1: metodo getExplorersByMission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        explorersByMission.forEach(function(explorer) {
            expect(explorer).toHaveProperty("mission", "node");
        });
    });
    test("Test 1.1: metodo getExplorersByMission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("java");
        explorersByMission.forEach(function(explorer) {
            expect(explorer).toHaveProperty("mission", "java");
        });
    });

    test("Test 2: Metodo getExplorersUsernamesByMission", () => {
        const explorerUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerUsername).toEqual(["ajolonauta1", "ajolonauta2","ajolonauta3", "ajolonauta4", "ajolonauta5",
            "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
    
    test("Test 3: Metodo getExplorersAmonutByMission", () => {
        const numUser = ExplorerController.getExplorersAmonutByMission("node");
        expect(numUser).toBe(10);
    });

    test("Test 3.1: Metodo getExplorersAmonutByMission con mission java", () => {
        const numUser = ExplorerController.getExplorersAmonutByMission("java");
        expect(numUser).toBe(5);
    });

    test("Test 4.1: Metodo applyFizzbuzz con score 15", () => {
        const score = ExplorerController.applyFizzbuzz(15);
        expect(score).toStrictEqual("FIZZBUZZ");
    });

    test("Test 4.2: Metodo applyFizzbuzz con score 9", () => {
        const score = ExplorerController.applyFizzbuzz(9);
        expect(score).toStrictEqual("FIZZ");
    }); 

    test("Test 4.3: Metodo applyFizzbuzz con score 10", () => {
        const score = ExplorerController.applyFizzbuzz(10);
        expect(score).toStrictEqual("BUZZ");
    });
});