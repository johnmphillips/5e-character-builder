export interface TraitProvider {
    traits: Trait[]
}

export abstract class Trait {
    readonly name: string;
    readonly description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}