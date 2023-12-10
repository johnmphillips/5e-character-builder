import { Trait } from "../traits/trait";
import { TraitProvider } from "../traits/TraitProvider";

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

export const DWARF = new Race("Dwarf", 25, [
    { name: "Darkvision", description: `Accustomed to life underground, you have superior vision in dark and dim conditions. 
                                        You can see in dim light within 60 feet of you as if it were bright light, and in darkness 
                                        as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: "Dwarven Resilience", description: `You have advantage on saving throws against poison, and you have resistance 
                                        against poison damage`},
    { name: "Stonecunning", description: `Whenever you make an Intelligence (History) check related to the origin of stonework, 
                                        you are considered proficient in the History skill and add double your proficiency bonus 
                                        to the check, instead of your normal proficiency bonus.`},


]);
export const ELF = new Race("Elf", 30, [
    { name: "Fey Ancestry", description: `You have advantage on saving throws against being charmed, and magic can’t put you to 
                                        sleep.`}
])
export const HUMAN = new Race("Human", 30, [])