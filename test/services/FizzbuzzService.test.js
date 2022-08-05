const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test for FizzbuzzService applyValidationInExplorer", () => {
    test("Condición: Else", () => {
        const explorer = {name: "Explorer1", score: 1}
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toBe(1);
    }); 

    test("Condición: Explorer.score % 3 === 0 && explorer.score % 5 === 0", () => {
        const explorer = {name: "Explorer1", score: 15}
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toStrictEqual("FIZZBUZZ");
    }); 

    test("Condición: explorer.score % 3 === 0", () => {
        const explorer = {name: "Explorer1", score: 3}
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toStrictEqual("FIZZ");
    }); 
})