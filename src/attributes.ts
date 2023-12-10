export class Attributes {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly wisdom: number;
    readonly intelligence: number;
    readonly charisma: number;

    constructor(
        strength: number,
        dexterity: number,
        constitution: number,
        wisdom: number,
        intelligence: number,
        charisma: number
    ) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.wisdom = wisdom;
        this.intelligence = intelligence;
        this.charisma = charisma;
    }

    get strengthModifier() : number {
        return this.getModifier(this.strength);
    }

    get dexterityModifier() : number {
        return this.getModifier(this.dexterity);
    }

    get constitutionModifier() : number {
        return this.getModifier(this.constitution);
    }

    get wisdomModifier() : number {
        return this.getModifier(this.wisdom);
    }

    get intelligenceModifier() : number {
        return this.getModifier(this.intelligence);
    }

    get charismaModifier() : number {
        return this.getModifier(this.charisma);
    }

    private getModifier(score: number) : number {
        return  Math.floor((score - 10) / 2);
    }
}