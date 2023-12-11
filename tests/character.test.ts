
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

    describe("Traits", () => {

        it("should return all of the traits posessed by a character", () => {

            character = new Character("Dwarfy", DWARF, 10, 10, 10, 10, 10, 10);

            expect(character.traits.find(t => t.name == "Stonecunning"))
            expect(character.traits.find(t => t.name == "Dwarven Resilience"))
            expect(character.traits.find(t => t.name == "Stonecunning"))
        });
    });

    describe("Skills", () => {
        it("should return underlying attribute bonus for skills that character is not proficient in", () => {
            character = new Character("Dwarfy", DWARF, 8, 10, 12, 14, 16, 18);
            //str
            expect(character.skills.athletics).toBe(-1);
            //dex
            expect(character.skills.stealth).toBe(0);
            expect(character.skills.sleightOfHand).toBe(0);
            expect(character.skills.acrobatics).toBe(0);
            //wis
            expect(character.skills.animalHandling).toBe(2);
            expect(character.skills.insight).toBe(2);
            expect(character.skills.medicine).toBe(2);
            expect(character.skills.perception).toBe(2);
            expect(character.skills.survival).toBe(2);
            //int
            expect(character.skills.arcana).toBe(3);
            expect(character.skills.history).toBe(3);
            expect(character.skills.investigation).toBe(3);
            expect(character.skills.nature).toBe(3);
            expect(character.skills.religion).toBe(3);
            //cha
            expect(character.skills.deception).toBe(4);
            expect(character.skills.intimidation).toBe(4);
            expect(character.skills.performance).toBe(4);
            expect(character.skills.persuasion).toBe(4);
        });
    });

    describe("Hit Dice", () => {
        it("Should return the hitdice for every class level", () => {
            character.gainClassLevel(WIZARD_1);
            character.gainClassLevel(FIGHTER_1);
            character.gainClassLevel(CLERIC_1);

            const result = character.hitDice;

            expect(result.length).toBe(3);
            expect(result).toContain("1d10");
            expect(result).toContain("1d8");
            expect(result).toContain("1d6");
        });
    });

    describe("Movement Speed", () => {
        it("should return the sum of the base speed and any speed bonuses from traits", () => {
            const quickRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    speed: 10
                },
                {
                    name: "example trait 2",
                    speed: 5
                },
            ]};
            
            character = new Character("Speedy", quickRace, 10, 10, 10, 10, 10, 10);

            const result = character.speed;

            expect(result).toBe(45);
        });

    });

    describe("Class Summary", () => {
        it("should return the class name  and highest level of a character with a single class", () => {
            character.gainClassLevel(FIGHTER_1);
            character.gainClassLevel(FIGHTER_2);
    
            const result = character.classSummary;
    
            expect(result).toBe("Fighter 2");
        });
    
        it("should return the class names and highest levels of a character with a multiple classes", () => {
            character.gainClassLevel(FIGHTER_1);
            character.gainClassLevel(FIGHTER_2);
            character.gainClassLevel(WIZARD_1);
            character.gainClassLevel(CLERIC_1);
    
            const result = character.classSummary;
    
            expect(result).toBe("Fighter 2 / Wizard 1 / Cleric 1");
        });
    
        it("should return an empty string if a character has no class levels", () => {
            const result = character.classSummary;
    
            expect(result).toBe("");
        });
    });

    describe("Proficiencies", () => {
        it("should include all weapon proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    weaponProficiencies: ["example weapon", "another weapon"]
                },
                {
                    name: "example trait2",
                    weaponProficiencies: ["a stick"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.weaponProficiencies;

            expect(result.size).toBe(3);
            expect(result).toContain("example weapon"); 
            expect(result).toContain("another weapon");
            expect(result).toContain("a stick");
        });

        it("should not include duplicate weapon proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    weaponProficiencies: ["example weapon", "another weapon"]
                },
                {
                    name: "example trait2",
                    weaponProficiencies: ["another weapon"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.weaponProficiencies;

            expect(result.size).toBe(2);
            expect(result).toContain("example weapon"); 
            expect(result).toContain("another weapon");
        });

        it("should include all armor proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    armorProficiencies: ["heavy armor"]
                },
                {
                    name: "example trait2",
                    armorProficiencies: ["light armor"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.armorProficiencies;

            expect(result.size).toBe(2);
            expect(result).toContain("heavy armor"); 
            expect(result).toContain("light armor");
        });
        
        it("should not include duplicate armor proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    armorProficiencies: ["light armor"]
                },
                {
                    name: "example trait2",
                    armorProficiencies: ["light armor"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.armorProficiencies;

            expect(result.size).toBe(1);
            expect(result).toContain("light armor"); 
        });

        it("should include all skill proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    skillProficiencies: ["athletics"]
                },
                {
                    name: "example trait2",
                    skillProficiencies: ["animal handling"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.skillProficiencies;

            expect(result.size).toBe(2);
            expect(result).toContain("athletics"); 
            expect(result).toContain("animal handling");
        });
        
        it("should not include duplicate skill proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    skillProficiencies: ["animal handling"]
                },
                {
                    name: "example trait2",
                    skillProficiencies: ["animal handling"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.skillProficiencies;

            expect(result.size).toBe(1);
            expect(result).toContain("animal handling"); 
        });

        it("should include all skill expertise", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    skillExpertise: ["athletics"]
                },
                {
                    name: "example trait2",
                    skillExpertise: ["animal handling"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.skillExpertise;

            expect(result.size).toBe(2);
            expect(result).toContain("athletics"); 
            expect(result).toContain("animal handling");
        });
        
        it("should not include duplicate skill expertise", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    skillExpertise: ["animal handling"]
                },
                {
                    name: "example trait2",
                    skillExpertise: ["animal handling"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.skillExpertise;

            expect(result.size).toBe(1);
            expect(result).toContain("animal handling"); 
        });

        it("should include all tool proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    toolProficiencies: ["Alchemist's supplies"]
                },
                {
                    name: "example trait2",
                    toolProficiencies: ["Smith's tools"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.toolProficiencies;

            expect(result.size).toBe(2);
            expect(result).toContain("Alchemist's supplies");
            expect(result).toContain("Smith's tools");
        });
        
        it("should not include duplicate tool proficiencies", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    toolProficiencies: ["Alchemist's supplies"]
                },
                {
                    name: "example trait2",
                    toolProficiencies: ["Alchemist's supplies"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.toolProficiencies;

            expect(result.size).toBe(1);
            expect(result).toContain("Alchemist's supplies");
        });

        it("should include all languages", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    languages: ["Common"]
                },
                {
                    name: "example trait2",
                    languages: ["Elvish"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.languages;

            expect(result.size).toBe(2);
            expect(result).toContain("Common");
            expect(result).toContain("Elvish");
        });
        
        it("should not include duplicate languages", () => {  

            const testRace = { name: "example", speed:30, traits: [
                {
                    name: "example trait",
                    languages: ["Common"]
                },
                {
                    name: "example trait2",
                    languages: ["Common"]
                }
            ]};
            character = new Character("proftest", testRace, 10, 10, 10, 10, 10, 10);

            const result = character.languages;

            expect(result.size).toBe(1);
            expect(result).toContain("Common");
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
import { DWARF, HUMAN } from "../src/races/race";
import { ROGUE_1 } from "../src/classes/Rogue";

