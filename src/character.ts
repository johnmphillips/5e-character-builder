import { CharacterClass, ClassLevel } from "./classlevel";
import { Race } from "./race";

export class Character {

  readonly name: string;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly wisdom: number;
  readonly intelligence: number;
  readonly charisma: number;
  readonly race: Race;
  private classLevels: ClassLevel[];

  constructor(
    name: string,
    race: Race,
    strength: number,
    dexterity: number,
    constitution: number,
    wisdom: number,
    intelligence: number,
    charisma: number
  ) {
    this.name = name;
    this.race = race;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    this.charisma = charisma;
    this.classLevels = [];
  }

  gainClassLevel(classLevel: ClassLevel) {
    if(classLevel.canApply(this)) {
      this.classLevels.push(classLevel);
    } else {
      throw new Error(`This character is not eligible to gain the class level ${classLevel}`)
    }
  }

  level(): number {
    return this.classLevels.length
  }

  classSummary(): string {
    const highestLevels = new Map<CharacterClass, number>();
    this.classLevels.forEach((x) => {
      if(highestLevels.has(x.characterClass)) {
        if(highestLevels.get(x.characterClass)! < x.level) {
          highestLevels.set(x.characterClass, x.level)
        }
      }
      else {
        highestLevels.set(x.characterClass, x.level)
      }
    });

    return Array.from(highestLevels.keys()).map((k) => `${CharacterClass[k]} ${highestLevels.get(k)}`).join(' / ');
  }

  hasClassLevel(classlevel: ClassLevel): boolean {
    return this.classLevels.includes(classlevel);
  }
}
