// Create a scripts/field.js module.
// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.

//import { createCorn } from "./seeds/corn"


// Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others.


// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).

const growingPlant = []

export const addPlant = (seedObject) => {
    if(Array.isArray(seedObject)) {
        for (const plant of seedObject) {
            growingPlant.push(plant)} 
    } 
    else {growingPlant.push(seedObject)}

    return growingPlant
}


// const growingPlant = []

// export const addPlant = (seedObject) => {
//     if(Array.isArray(seedObject)) {
//         //for (const plant of seedObject) {
//             seedObject.forEach((corn) => growingPlant.push(corn))
//         //} 
//     } 
//     else {growingPlant.push(seedObject)
//     }

    //return growingPlants

// Define and export a function named usePlants that returns a copy of the array of plants.

export const usePlants = () => {
    return growingPlant
}