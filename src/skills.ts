import { Character } from "./character";

export enum SkillName {
    Acrobatics,
    AnimalHandling,
    Arcana,
    Athletics,
}

export class Skills {

    private character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    private calculateSkillBonus(baseModifier: number, hasExpertise: boolean, hasProficiency: boolean) :number {
        let bonus = baseModifier;
        if(hasExpertise) {
            bonus += this.character.proficiencyBonus * 2;
        } else if(hasProficiency) {
            bonus += this.character.proficiencyBonus;
        }
        return bonus;
    }

    get acrobatics(): number {
        return this.calculateSkillBonus(
            this.character.attributes.dexterityModifier, 
            this.character.skillProficiencies.has("Acrobatics"),
            this.character.skillExpertise.has("Acrobatics")
            );
    }
    
    get animalHandling(): number {
        return this.character.attributes.wisdomModifier
    }

    get arcana(): number {
        return this.character.attributes.intelligenceModifier
    }

    get athletics(): number {
        return this.character.attributes.strengthModifier
    }

    get deception(): number {
        return this.character.attributes.charismaModifier
    }

    get history(): number {
        return this.character.attributes.intelligenceModifier
    }

    get insight(): number {
        return this.character.attributes.wisdomModifier
    }

    get investigation(): number {
        return this.character.attributes.intelligenceModifier
    }

    get intimidation(): number {
        return this.character.attributes.charismaModifier
    }

    get medicine(): number {
        return this.character.attributes.wisdomModifier
    }

    get nature(): number {
        return this.character.attributes.intelligenceModifier
    }

    get performance(): number {
        return this.character.attributes.charismaModifier
    }

    get perception(): number {
        return this.character.attributes.wisdomModifier
    }

    get persuasion(): number {
        return this.character.attributes.charismaModifier
    }

    get religion(): number {
        return this.character.attributes.intelligenceModifier
    }

    get stealth(): number {
        return this.character.attributes.dexterityModifier
    }

    get sleightOfHand(): number {
        return this.character.attributes.dexterityModifier
    }
    
    get survival(): number {
        return this.character.attributes.wisdomModifier
    }
}