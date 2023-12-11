import { Character } from "../src/character";
import { FIGHTER_1 } from "../src/classes/Fighter";
import { DWARF } from "../src/races/race";

describe("Saving Throws", () => {

    it("should use the underlying ability modifier if the character does not have any expertise/proficiency/bonuses to the saving throw", () => {
        const character = new Character("Gromdal Bronzebeard", DWARF, 14, 10, 10, 10, 10, 10);
        expect(character.savingThrows.strength).toBe(character.attributes.strengthModifier);
    });

    it("should add the proficiency bonus if the character is proficient in the saving throw", () => {
        const testRace = { name: "testRace", speed: 30, traits: [
            {
                name: "testTrait",
                savingThrowProficiencies: ["strength"]
            }
        ] };
        const character = new Character("Gromdal Bronzebeard", testRace, 14, 10, 10, 10, 10, 10);
        character.gainClassLevel(FIGHTER_1); //should be +2 proficiency bonus
        expect(character.savingThrows.strength).toBe(4); //+2 str +2 proficiency
    });

});