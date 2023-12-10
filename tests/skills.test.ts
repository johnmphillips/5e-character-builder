import { Character } from "../src/character";
import { DWARF } from "../src/races/race";

describe("Character Skills", () => {
    it("should use the underlying ability modifier if the character does not have any expertise/poficiency/bonuses to the skill", () => {
        const character = new Character("Gromdal Bronzebeard", DWARF, 14, 10, 10, 10, 10, 10);
        expect(character.skills.athletics).toBe(character.attributes.strengthModifier);
    });
});