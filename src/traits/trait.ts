export interface Trait {
    name: string;
    description?: string;
    skillProficiencies?: string[];
    skillExpertise?: string[];
    weaponProficiencies?: string[];
    armorProficiencies?: string[];
    toolProficiencies?: string[];
    savingThrowProficiencies?: string[];
    languages?: string[];
    speed?: number;
}