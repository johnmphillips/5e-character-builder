import { Attributes } from "../src/attributes";

describe("Character Attributes", () => {
    test.each([
        [3, -4],
        [4, -3],
        [5, -3],
        [6, -2],
        [7, -2],
        [8, -1],
        [9, -1],
        [10, 0],
        [11, 0],
        [12, 1],
        [13, 1],
        [14, 2],
        [15, 2],
        [16, 3],
        [17, 3],
        [18, 4],
        [19, 4],
        [20, 5]])('modifier should be computed for ability score %i', (score, expected) => {
            const attributes = new Attributes(score, score, score, score, score, score);
            
            expect(attributes.strengthModifier).toBe(expected);
            expect(attributes.dexterityModifier).toBe(expected);
            expect(attributes.constitutionModifier).toBe(expected);
            expect(attributes.wisdomModifier).toBe(expected);
            expect(attributes.intelligenceModifier).toBe(expected);
            expect(attributes.charismaModifier).toBe(expected);
        });
    
    
});