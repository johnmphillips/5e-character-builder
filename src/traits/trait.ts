export interface Trait {
    name: string;
    description: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isTrait(obj: any): obj is Trait {
    return obj && typeof obj.name === 'string' && typeof obj.description === 'string';
}

export interface SkillProficiencyTrait extends Trait{
    readonly skillProficiencies: []
    readonly skillExpertises: []
    readonly weaponProficiencies: []
    readonly armorProficiencies: []
    readonly toolProficiencies: []
}