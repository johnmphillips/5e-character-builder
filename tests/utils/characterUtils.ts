import { Character } from "../../src/character";
import { AllFighterLevels } from "../../src/classes/Fighter";
import { DWARF } from "../../src/races/race";

export function characterOfLevel(level: number): Character {
    const character = new Character("Atlas", DWARF, 13, 10, 10, 10, 10, 10);
    for(let i = 0; i < level; i++) {
        character.gainClassLevel(AllFighterLevels[i]);
    }
    return character;
}