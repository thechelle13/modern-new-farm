console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
const thePlan = createPlan()
console.log(thePlan)

import { createAsparagus } from "./seeds/asparagus.js";
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js";
const cornSeed = createCorn(createPlan)
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js";
const potatoSeed = createPotato(createPlan)
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js";
const soybeanSeed = createSoybean(createPlan)
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js";
const sunflowerSeed = createSunflower(createPlan)
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js";
const wheatSeed = createWheat(createPlan)
console.log(wheatSeed)

// not having output in console from main. empty arrays
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

console.log(addPlant)

console.log(usePlants)

import { plantSeeds } from "./tractor.js";
const babyPlants = plantSeeds(thePlan)
console.log(babyPlants)

import { harvestPlants } from "./harvester.js";
const bigPlants = harvestPlants()
console.log(bigPlants)



