const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test for FizzbuzzService applyValidationInExplorer", () => {
    test("Condición: Else", () => {
        const explorer = {name: "Explorer1", score: 1};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toBe(1);
    }); 

    test("Condición: Explorer.score % 3 === 0 && explorer.score % 5 === 0", () => {
        const explorer = {name: "Explorer1", score: 15};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toStrictEqual("FIZZBUZZ");
    }); 

    test("Condición: explorer.score % 3 === 0", () => {
        const explorer = {name: "Explorer1", score: 3};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toStrictEqual("FIZZ");
    }); 

    test("Condición: explorer.score % 5 === 0", () => {
        const explorer = {name: "Explorer1", score: 5};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorerTrick.trick).toStrictEqual("BUZZ");
    });
});

describe("Test for FizzbuzzService applyValidationInNumber", () => {
    test("Test 1: number % 3 === 0  && number % 5 === 0", () => {
        const result = FizzbuzzService.applyValidationInNumber(15);
        expect(result).toStrictEqual("FIZZBUZZ");
    });

    test("Test 2: number % 3 === 0", () => {
        const result = FizzbuzzService.applyValidationInNumber(3);
        expect(result).toStrictEqual("FIZZ");
    });
    
    test("Test 3: number % 5 === 0", () => {
        const result = FizzbuzzService.applyValidationInNumber(5);
        expect(result).toStrictEqual("BUZZ");
    });

    test("Test 4: else", () => {
        const result = FizzbuzzService.applyValidationInNumber(14);
        expect(result).toBe(14);
    });
});