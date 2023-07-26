console.log("Welcome to the main module")




// import { createAsparagus } from "./seeds/asparagus.js";
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// import { createCorn } from "./seeds/corn.js";
// const cornSeed = createCorn()
// console.log(cornSeed)
// import { createPotato } from "./seeds/potato.js";
// const potatoSeed = createPotato()
// console.log(potatoSeed)
// import { createSoybean } from "./seeds/soybean.js";
// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)
// import { createSunflower } from "./seeds/sunflower.js";
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)
// import { createWheat } from "./seeds/wheat.js";
// const wheatSeed = createWheat()
// console.log(wheatSeed)
import { createPlan } from "./plan.js";
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { usePlants } from "./field.js";
const seedObject = usePlants(yearlyPlan)
console.log(seedObject)


import { plantSeeds } from "./tractor.js";
const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)

import { harvestPlants } from "./harvester.js";
const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)



import { catalog } from "./catalog.js";
const htmlString = document.querySelector(".container")
htmlString.innerHTML = catalog(harvestedPlants)
const plantList = catalog(harvestedPlants)
console.log(plantList)




