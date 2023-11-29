import { ClassLevel, CharacterClass } from "../classlevel";

export const FIGHTER_1 = new ClassLevel(CharacterClass.Fighter, 1, [], (character) => character.strength >= 13);
export const FIGHTER_2 = new ClassLevel(CharacterClass.Fighter, 2, [], (character) => character.hasClassLevel(FIGHTER_1));
export const FIGHTER_3 = new ClassLevel(CharacterClass.Fighter, 3, [], (character) => character.hasClassLevel(FIGHTER_2));
export const FIGHTER_4 = new ClassLevel(CharacterClass.Fighter, 4, [], (character) => character.hasClassLevel(FIGHTER_3));
export const FIGHTER_5 = new ClassLevel(CharacterClass.Fighter, 5, [], (character) => character.hasClassLevel(FIGHTER_4));
export const FIGHTER_6 = new ClassLevel(CharacterClass.Fighter, 6, [], (character) => character.hasClassLevel(FIGHTER_5));
export const FIGHTER_7 = new ClassLevel(CharacterClass.Fighter, 7, [], (character) => character.hasClassLevel(FIGHTER_6));
export const FIGHTER_8 = new ClassLevel(CharacterClass.Fighter, 8, [], (character) => character.hasClassLevel(FIGHTER_7));
export const FIGHTER_9 = new ClassLevel(CharacterClass.Fighter, 9, [], (character) => character.hasClassLevel(FIGHTER_8));
export const FIGHTER_10 = new ClassLevel(CharacterClass.Fighter, 10, [], (character) => character.hasClassLevel(FIGHTER_9));
export const FIGHTER_11 = new ClassLevel(CharacterClass.Fighter, 11, [], (character) => character.hasClassLevel(FIGHTER_10));
export const FIGHTER_12 = new ClassLevel(CharacterClass.Fighter, 12, [], (character) => character.hasClassLevel(FIGHTER_11));
export const FIGHTER_13 = new ClassLevel(CharacterClass.Fighter, 13, [], (character) => character.hasClassLevel(FIGHTER_12));
export const FIGHTER_14 = new ClassLevel(CharacterClass.Fighter, 14, [], (character) => character.hasClassLevel(FIGHTER_13));
export const FIGHTER_15 = new ClassLevel(CharacterClass.Fighter, 15, [], (character) => character.hasClassLevel(FIGHTER_14));
export const FIGHTER_16 = new ClassLevel(CharacterClass.Fighter, 16, [], (character) => character.hasClassLevel(FIGHTER_15));
export const FIGHTER_17 = new ClassLevel(CharacterClass.Fighter, 17, [], (character) => character.hasClassLevel(FIGHTER_16));
export const FIGHTER_18 = new ClassLevel(CharacterClass.Fighter, 18, [], (character) => character.hasClassLevel(FIGHTER_17));
export const FIGHTER_19 = new ClassLevel(CharacterClass.Fighter, 19, [], (character) => character.hasClassLevel(FIGHTER_18));
export const FIGHTER_20 = new ClassLevel(CharacterClass.Fighter, 20, [], (character) => character.hasClassLevel(FIGHTER_19));
export const AllFighterLevels = [
    FIGHTER_1,
    FIGHTER_2,
    FIGHTER_3,
    FIGHTER_4,
    FIGHTER_5,
    FIGHTER_6,
    FIGHTER_7,
    FIGHTER_8,
    FIGHTER_9,
    FIGHTER_10,
    FIGHTER_11,
    FIGHTER_12,
    FIGHTER_13,
    FIGHTER_14,
    FIGHTER_15,
    FIGHTER_16,
    FIGHTER_17,
    FIGHTER_18,
    FIGHTER_19,
    FIGHTER_20,
] as const;

