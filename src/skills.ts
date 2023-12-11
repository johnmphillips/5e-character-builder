import { Character } from "./character";

export class Skills {

    private character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    private calculateSkillBonus(baseModifier: number, skillName: string) :number {
        let bonus = baseModifier;
        if(this.character.skillExpertise.has(skillName)) {
            bonus += this.character.proficiencyBonus * 2;
        } else if(this.character.skillProficiencies.has(skillName)) {
            bonus += this.character.proficiencyBonus;
        }
        return bonus;
    }

    get acrobatics(): number {
        return this.calculateSkillBonus(this.character.attributes.dexterityModifier, "acrobatics");
    }
    
    get animalHandling(): number {
        return this.calculateSkillBonus(this.character.attributes.wisdomModifier, "animal handling");
    }

    get arcana(): number {
        return this.calculateSkillBonus(this.character.attributes.intelligenceModifier, "arcana");
    }

    get athletics(): number {
        return this.calculateSkillBonus(this.character.attributes.strengthModifier, "athletics");
    }

    get deception(): number {
        return this.calculateSkillBonus(this.character.attributes.charismaModifier, "deception");
    }

    get history(): number {
        return this.calculateSkillBonus(this.character.attributes.intelligenceModifier, "history");
    }

    get insight(): number {
        return this.calculateSkillBonus(this.character.attributes.wisdomModifier, "insight");
    }

    get investigation(): number {
        return this.calculateSkillBonus(this.character.attributes.intelligenceModifier, "investigation");
    }

    get intimidation(): number {
        return this.calculateSkillBonus(this.character.attributes.charismaModifier, "intimidation");
    }

    get medicine(): number {
        return this.calculateSkillBonus(this.character.attributes.wisdomModifier, "medicine");
    }

    get nature(): number {
        return this.calculateSkillBonus(this.character.attributes.intelligenceModifier, "nature");
    }

    get performance(): number {
        return this.calculateSkillBonus(this.character.attributes.charismaModifier, "performance");
    }

    get perception(): number {
        return this.calculateSkillBonus(this.character.attributes.wisdomModifier, "perception");
    }

    get persuasion(): number {
        return this.calculateSkillBonus(this.character.attributes.charismaModifier, "persuasion");
    }

    get religion(): number {
        return this.calculateSkillBonus(this.character.attributes.intelligenceModifier, "religion");
    }

    get stealth(): number {
        return this.calculateSkillBonus(this.character.attributes.dexterityModifier, "stealth");
    }

    get sleightOfHand(): number {
        return this.calculateSkillBonus(this.character.attributes.dexterityModifier, "sleightOfHand");
    }
    
    get survival(): number {
        return this.calculateSkillBonus(this.character.attributes.wisdomModifier, "survival");
    }
}