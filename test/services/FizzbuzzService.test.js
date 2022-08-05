const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test for FizzbuzzService applyValidationInExplorer", () => {
    test("Condición: Else", () => {
        const explorer = {name: "Explorer1", score: 1}
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toBe(1);
    }); 
})