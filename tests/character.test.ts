
describe("Character", () => {
    let character: Character;

    beforeEach(() => {
        character = new Character(
            "John",
            HUMAN,
            13,
            12,
            14,
            16,
            18,
            20
        );
    });

    it("should return true if the character has the specified class level", () => {

        character.gainClassLevel(FIGHTER_1)

        const result = character.hasClassLevel(FIGHTER_1);

        expect(result).toBe(true);
    });

    it("should return false if the character does not have the specified class level", () => {
        
        character.gainClassLevel(FIGHTER_1)

        const result = character.hasClassLevel(FIGHTER_2);

        expect(result).toBe(false);
    });

    it("should return the class name  and highest level of a character with a single class", () => {
        character.gainClassLevel(FIGHTER_1);
        character.gainClassLevel(FIGHTER_2);

        const result = character.classSummary();

        expect(result).toBe("Fighter 2");
    });

    it("should return the class names and highest levels of a character with a multiple classes", () => {
        character.gainClassLevel(FIGHTER_1);
        character.gainClassLevel(FIGHTER_2);
        character.gainClassLevel(WIZARD_1);
        character.gainClassLevel(CLERIC_1);

        const result = character.classSummary();

        expect(result).toBe("Fighter 2 / Wizard 1 / Cleric 1");
    });

    it("should return an empty string if a character has no class levels", () => {
        const result = character.classSummary();

        expect(result).toBe("");
    });

    it("should return the total level of the character", () => {
        character.gainClassLevel(FIGHTER_1);
        character.gainClassLevel(FIGHTER_2);
        character.gainClassLevel(WIZARD_1);
        character.gainClassLevel(CLERIC_1);

        const result = character.level();

        expect(result).toBe(4);
    });

    it("should return 0 if the character has no class levels", () => {
        const result = character.level();

        expect(result).toBe(0);
    });
});
import { Character } from "../src/character";
import { CLERIC_1, FIGHTER_1, FIGHTER_2, WIZARD_1 } from "../src/classlevel";
import { HUMAN } from "../src/race";
