import { Trait } from "./traits/trait";
import { TraitProvider } from "./traits/TraitProvider";
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
    readonly hitDie: string;
    readonly traits: Trait[];
    readonly canApply: (character: Character) => boolean;

    constructor(characterClass: CharacterClass, level: number, hitDie: string, traits: Trait[], canApplyFn: (character: Character) => boolean) {
        this.characterClass = characterClass;
        this.traits = traits;
        this.hitDie = hitDie;
        this.level = level;
        this.canApply = canApplyFn;
    }
    toString() : string { return `${CharacterClass[this.characterClass]} [${this.level}]`; }
}

export const CLERIC_1 = new ClassLevel(CharacterClass.Cleric, 1, '1d8', [], (character) => character.wisdom >= 13)
export const WIZARD_1 = new ClassLevel(CharacterClass.Wizard, 1, '1d6', [], (character) => character.intelligence >= 13)


