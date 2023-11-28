import { Trait, TraitProvider } from "./trait";
import { Character } from "./character";

export enum CharacterClass {
    Fighter,
    Cleric,
    Monk,
    Wizard,
    Rogue,
    Druid,
    Paladin,
    Ranger,
    Warlock,
    Bard
}

export class ClassLevel implements TraitProvider {
    readonly characterClass: CharacterClass;
    readonly level: number;
    readonly traits: Trait[];
    readonly canApply: (character: Character) => boolean;

    constructor(characterClass: CharacterClass, level: number, traits: Trait[], canApplyFn: (character: Character) => boolean) {
        this.characterClass = characterClass;
        this.traits = traits;
        this.level = level;
        this.canApply = canApplyFn;
    }

}

export const FIGHTER_1 = new ClassLevel(CharacterClass.Fighter, 1, [], (character) => character.strength >= 13)
export const FIGHTER_2 = new ClassLevel(CharacterClass.Fighter, 2, [], (character) => character.hasClassLevel(FIGHTER_1))

export const CLERIC_1 = new ClassLevel(CharacterClass.Cleric, 1, [], (character) => character.wisdom >= 13)
export const WIZARD_1 = new ClassLevel(CharacterClass.Wizard, 1, [], (character) => character.intelligence >= 13)


