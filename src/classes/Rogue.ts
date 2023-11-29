import { CharacterClass, ClassLevel } from "../classlevel";

export const ROGUE_1 = new ClassLevel(CharacterClass.Rogue, 1, [], (character) => character.dexterity >= 13);