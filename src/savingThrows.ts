import { Character } from "./character";

export class SavingThrows {

    private character: Character;

    constructor(character: Character) {
        this.character = character;
    }
    
    public get strength() : number {
        return this.character.savingThrowProficiencies.has("strength") ? 
            this.character.attributes.strengthModifier + this.character.proficiencyBonus : 
            this.character.attributes.strengthModifier;
    }

    public get dexterity() : number {
        return this.character.savingThrowProficiencies.has("dexterity") ? 
            this.character.attributes.dexterityModifier + this.character.proficiencyBonus : 
            this.character.attributes.dexterityModifier;
    }

    public get constitution() : number {
        return this.character.savingThrowProficiencies.has("constitution") ? 
            this.character.attributes.constitutionModifier + this.character.proficiencyBonus : 
            this.character.attributes.constitutionModifier;
    }

    public get wisdom() : number {
        return this.character.savingThrowProficiencies.has("wisdom") ? 
            this.character.attributes.wisdomModifier + this.character.proficiencyBonus : 
            this.character.attributes.wisdomModifier;
    }

    public get intelligence() : number {
        return this.character.savingThrowProficiencies.has("intelligence") ? 
            this.character.attributes.intelligenceModifier + this.character.proficiencyBonus : 
            this.character.attributes.intelligenceModifier;
    }
    
    public get charisma() : number {
        return this.character.savingThrowProficiencies.has("charisma") ? 
            this.character.attributes.charismaModifier + this.character.proficiencyBonus : 
            this.character.attributes.charismaModifier;
    }
}