export interface Trait {
    readonly name: string;
    readonly description: string;
}

export class BasicTrait implements Trait {
    readonly name: string;
    readonly description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}