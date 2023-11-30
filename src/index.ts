import { Character } from "./character";
import { DWARF } from "./races/race";

const atlas = new Character("Atlas Roundstone", DWARF, 10, 10, 10, 10, 10, 10);

// eslint-disable-next-line no-console
console.log(JSON.stringify(atlas));