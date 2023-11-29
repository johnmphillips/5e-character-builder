
describe("Character", () => {
    let character: Character;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {characterOfLevel} = require("./utils/characterUtils");

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

    describe("Proficiency Bonus", () => {
        test.each([
            [0, 0],
            [1, 2],
            [2, 2],
            [3, 2],
            [4, 2],
            [5, 3],
            [6, 3],
            [7, 3],
            [8, 3],
            [9, 4],
            [10, 4],
            [11, 4],
            [12, 4],
            [13, 5],
            [14, 5],
            [15, 5],
            [16, 5],
            [17, 6],
            [18, 6],
            [19, 6],
            [20, 6]
        ])('proficiency for level %i', (level, expected) => {
            const result = characterOfLevel(level).proficiencyBonus
            expect(result).toBe(expected)
        });
    });

    describe("Movement Speed", () => {
        it("should have the base speed of it's race", () => {
            expect(character.speed).toBe(HUMAN.speed);
        });
    });

    describe("Checking class levels", () => {
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
    });

    describe("Class Summary", () => {
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
    });

    

    

    it("should return the total level of the character", () => {
        character.gainClassLevel(FIGHTER_1);
        character.gainClassLevel(FIGHTER_2);
        character.gainClassLevel(WIZARD_1);
        character.gainClassLevel(CLERIC_1);

        const result = character.level;

        expect(result).toBe(4);
    });

    it("should return 0 if the character has no class levels", () => {
        const result = character.level;

        expect(result).toBe(0);
    });

    describe("Gaining Class Levels", () => {
        it("should throw an error if attempting to gain more than 20 class levels", () => {
            const result = character.level;
    
            expect(result).toBe(0);
        });
    
        it("should throw an error if attempting to gain the same class level twice", () => {
            character = characterOfLevel(20);
            expect(() => {  
                character.gainClassLevel(WIZARD_1); 
            }).toThrow('Maximum level reached')
        });
    
        it("should throw an error if character does not meet requirements for the level", () => {
            expect(() => {
                character.gainClassLevel(ROGUE_1);
            }).toThrow('This character is not eligible to gain the class level Rogue [1]')
        });
    });
    
});
import { Character } from "../src/character";
import { CLERIC_1, WIZARD_1 } from "../src/classlevel";
import { FIGHTER_1, FIGHTER_2 } from "../src/classes/Fighter";
import { HUMAN } from "../src/race";
import { ROGUE_1 } from "../src/classes/Rogue";

