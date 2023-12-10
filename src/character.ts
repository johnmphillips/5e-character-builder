import { Attributes } from "./attributes";
import { CharacterClass, ClassLevel } from "./classlevel";
import { Race } from "./races/race";
import { Skills } from "./skills";
import { Trait, ProficiencyTrait } from "./traits/trait";

export class Character {

  readonly name: string;
  readonly race: Race;
  readonly skills: Skills;
  readonly attributes: Attributes;
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
    this.attributes = new Attributes(strength, dexterity, constitution, wisdom, intelligence, charisma);
    this.skills = new Skills(this);
    this.classLevels = [];
  }

  get traits(): Trait[] {
    const racialTraits = this.race.traits;
    const classTraits = this.classLevels.flatMap(cl => cl.traits);
    return racialTraits.concat(classTraits);
  }

  get skillProficiencies(): string[] {
    return this.traits.filter(t => t instanceof ProficiencyTrait).flatMap(t => t.skillProficiencies);
  }

  get hitDice(): string[] {
    return this.classLevels.map(lvl => lvl.hitDie);
  }

  get speed(): number {
    return this.race.speed; //TODO: add speed from traits
  }

  get proficiencyBonus(): number {
    if(this.level < 1) return 0;
    if(this.level <= 4) return 2;
    if(this.level <= 8) return 3;
    if(this.level <= 12) return 4;
    if(this.level <= 16) return 5;
    return 6;
  }

  gainClassLevel(classLevel: ClassLevel) {
    if(this.classLevels.length >= 20) {
      throw new Error(`Maximum level reached`)
    }
    if(this.classLevels.includes(classLevel)) {
      throw new Error(`The same class level cannot be gained twice`)
    }
    if(classLevel.canApply(this)) {
      this.classLevels.push(classLevel);
    } else {
      throw new Error(`This character is not eligible to gain the class level ${classLevel}`)
    }
  }

  get level(): number {
    return this.classLevels.length
  }

  get classSummary(): string {
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
