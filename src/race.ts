import { Trait } from "./trait";

export class Race {
    readonly name: string;
    readonly traits: Trait[];
    constructor(name: string, traits: Trait[]) {
        this.name = name;
        this.traits = traits;
    }
}

export const DWARF = new Race("Dwarf", [])
export const ELF = new Race("Elf", [])
export const HUMAN = new Race("Human", [])