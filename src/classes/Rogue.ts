import { CharacterClass, ClassLevel } from "../classlevel";

export const ROGUE_1 = new ClassLevel(CharacterClass.Rogue, 1, "1d8", [], (character) => character.dexterity >= 13);
export const ROGUE_2 = new ClassLevel(CharacterClass.Rogue, 2, "1d8", [], (character) => character.hasClassLevel(ROGUE_1));
export const ROGUE_3 = new ClassLevel(CharacterClass.Rogue, 3, "1d8", [], (character) => character.hasClassLevel(ROGUE_2));
export const ROGUE_4 = new ClassLevel(CharacterClass.Rogue, 4, "1d8", [], (character) => character.hasClassLevel(ROGUE_3));
export const ROGUE_5 = new ClassLevel(CharacterClass.Rogue, 5, "1d8", [], (character) => character.hasClassLevel(ROGUE_4));
export const ROGUE_6 = new ClassLevel(CharacterClass.Rogue, 6, "1d8", [], (character) => character.hasClassLevel(ROGUE_5));
export const ROGUE_7 = new ClassLevel(CharacterClass.Rogue, 7, "1d8", [], (character) => character.hasClassLevel(ROGUE_6));
export const ROGUE_8 = new ClassLevel(CharacterClass.Rogue, 8, "1d8", [], (character) => character.hasClassLevel(ROGUE_7));
export const ROGUE_9 = new ClassLevel(CharacterClass.Rogue, 9, "1d8", [], (character) => character.hasClassLevel(ROGUE_8));
export const ROGUE_10 = new ClassLevel(CharacterClass.Rogue, 10, "1d8", [], (character) => character.hasClassLevel(ROGUE_9));
export const ROGUE_11 = new ClassLevel(CharacterClass.Rogue, 11, "1d8", [], (character) => character.hasClassLevel(ROGUE_10));
export const ROGUE_12 = new ClassLevel(CharacterClass.Rogue, 12, "1d8", [], (character) => character.hasClassLevel(ROGUE_11));
export const ROGUE_13 = new ClassLevel(CharacterClass.Rogue, 13, "1d8", [], (character) => character.hasClassLevel(ROGUE_12));
export const ROGUE_14 = new ClassLevel(CharacterClass.Rogue, 14, "1d8", [], (character) => character.hasClassLevel(ROGUE_13));
export const ROGUE_15 = new ClassLevel(CharacterClass.Rogue, 15, "1d8", [], (character) => character.hasClassLevel(ROGUE_14));
export const ROGUE_16 = new ClassLevel(CharacterClass.Rogue, 16, "1d8", [], (character) => character.hasClassLevel(ROGUE_15));
export const ROGUE_17 = new ClassLevel(CharacterClass.Rogue, 17, "1d8", [], (character) => character.hasClassLevel(ROGUE_16));
export const ROGUE_18 = new ClassLevel(CharacterClass.Rogue, 18, "1d8", [], (character) => character.hasClassLevel(ROGUE_17));
export const ROGUE_19 = new ClassLevel(CharacterClass.Rogue, 19, "1d8", [], (character) => character.hasClassLevel(ROGUE_18));
export const ROGUE_20 = new ClassLevel(CharacterClass.Rogue, 20, "1d8", [], (character) => character.hasClassLevel(ROGUE_19));
export const AllRogueLevels = [
    ROGUE_1,
    ROGUE_2,
    ROGUE_3,
    ROGUE_4,
    ROGUE_5,
    ROGUE_6,
    ROGUE_7,
    ROGUE_8,
    ROGUE_9,
    ROGUE_10,
    ROGUE_11,
    ROGUE_12,
    ROGUE_13,
    ROGUE_14,
    ROGUE_15,
    ROGUE_16,
    ROGUE_17,
    ROGUE_18,
    ROGUE_19,
    ROGUE_20,
];
