import { Trait } from "./traits/trait";
import { TraitProvider } from "./traits/TraitProvider";

export class Race implements TraitProvider {
    readonly name: string;
    readonly speed: number;
    readonly traits: Trait[];
    constructor(name: string, speed: number, traits: Trait[]) {
        this.name = name;
        this.speed = speed;
        this.traits = traits;
    }
}

export const DWARF = new Race("Dwarf", 25, [])
export const ELF = new Race("Elf", 30, [])
export const HUMAN = new Race("Human", 30, [])