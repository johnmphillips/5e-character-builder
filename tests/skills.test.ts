import { Character } from "../src/character";
import { FIGHTER_1 } from "../src/classes/Fighter";
import { DWARF } from "../src/races/race";

describe("Character Skills", () => {
    
    it("should use the underlying ability modifier if the character does not have any expertise/poficiency/bonuses to the skill", () => {
        const character = new Character("Gromdal Bronzebeard", DWARF, 14, 10, 10, 10, 10, 10);
        expect(character.skills.athletics).toBe(character.attributes.strengthModifier);
    });

    it("should add the proficiency bonus if the character is proficient in the skill", () => {
        const testRace = { name: "testRace", speed: 30, traits: [
            {
                name: "testTrait",
                skillProficiencies: ["athletics"]
            }
        ] };

        const character = new Character("Gromdal Bronzebeard", testRace, 14, 10, 10, 10, 10, 10);
        character.gainClassLevel(FIGHTER_1); //should be +2 proficiency bonus
        
        expect(character.skills.athletics).toBe(4); //+2 str +2 proficiency
    });
    
    it("should add double the proficiency bonus if the character has expertise in the skill", () => {
        const testRace = { name: "testRace", speed: 30, traits: [
            {
                name: "testTrait",
                skillExpertise: ["athletics"]
            }
        ] };

        const character = new Character("Gromdal Bronzebeard", testRace, 14, 10, 10, 10, 10, 10);
        character.gainClassLevel(FIGHTER_1); //should be +2 proficiency bonus
        
        expect(character.skills.athletics).toBe(6); //+2 str +4 expertise
    });
    
});