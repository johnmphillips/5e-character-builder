import { Trait } from '../traits/trait';

export interface Race {
  readonly name: string;
  readonly speed: number;
  readonly traits: Trait[];
}

export const DWARF = { name: 'Dwarf', speed: 25, traits: [
  {
    name: 'Darkvision',
    description: `Accustomed to life underground, you have superior vision in dark and dim conditions. 
                    You can see in dim light within 60 feet of you as if it were bright light, and in darkness 
                    as if it were dim light. You can’t discern color in darkness, only shades of gray.`
  },
  {
    name: 'Dwarven Resilience',
    description: `You have advantage on saving throws against poison, and you have resistance 
                                        against poison damage`
  },
  {
    name: 'Stonecunning',
    description: `Whenever you make an Intelligence (History) check related to the origin of stonework, 
                                        you are considered proficient in the History skill and add double your proficiency bonus 
                                        to the check, instead of your normal proficiency bonus.`
  },
  {
    name: 'Dwarven Combat Training',
    description: `You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.`,
    weaponProficiencies: ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
  },
  // TODO: How do we do trait choices?
  // {
  //   name: 'Tool Proficiency',
  //   description: `You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, 
  //                                       or mason’s tools.`
  // },
  {
    name: 'Languages',
    description: `You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and 
                                        guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.`,
    languages: ['Common', 'Dwarvish'] //TODO: add these to a list of constants?
  }
] };
export const ELF = { name: 'Elf', speed: 30, traits: [
  {
    name: 'Fey Ancestry',
    description: `You have advantage on saving throws against being charmed, and magic can’t put you to 
                                        sleep.`
  }
]};
export const HUMAN = { name: 'Human', speed: 30, traits: []};
