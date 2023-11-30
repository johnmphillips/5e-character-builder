export interface Trait {
    readonly name: string;
    readonly description: string;
}

export interface Skill {
    readonly name: string;
    readonly attribute: string;
}

export interface ProficiencyTrait extends Trait{
    readonly skillProficiencies: []
    readonly skillExpertises: []
    readonly weaponProficiencies: []
    readonly armorProficiencies: []
    readonly toolProficiencies: []
}