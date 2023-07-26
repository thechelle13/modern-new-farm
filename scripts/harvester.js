// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. 


// export const harvestPlants = (growingPlants) => {
//     const grownPlants = []
//     for (const plant of growingPlants) {
//         //let crop = plant.output
//         // plant.output
//         // each plant get value of output
//         // address corn output
//         // push into array grownPlants.push(plant)
//         if (plants.type === "Corn".length /2) {
//             // crop.length / 2
//             grownPlants.push(plant)
//             }
//             for (let i = 0; i < plants.output; i++){
//             grownPlants.push(plant)
//             }
//          }
//        if (plants.type !== "Corn".length) {
//         // crop.length / 2
//                 }
//         for (let i = 0; i < plants.output; i++) {
//             grownPlants.push(plants)
        
//             }
        
    
//     return grownPlants
// }

// export const harvestPlants = (plants) => {
//     const grownPlants = []
//     for (const plant of plants) {
//         //const grownPlants = []
//         if (plant !== "Corn") {
//             for(let i = 0;i < plant.output; i++){
//                 grownPlants.push(plant)
//             }
//         } else { for(let i = 0;i < plant.output/2; i++){
//             grownPlants.push(plants)
//         }}
//     } return grownPlants
// }
//const grownPlants = []
export const harvestPlants = (plants) => {
    const grownPlants = []
    for (const plant of plants) {
            if (plant.type === "Corn") {
                for (let i = 0; i < plant.output /2; i++){
                    grownPlants.push(plant)
                    }
                    }
            else  {
            for (let i = 0; i < plant.output; i++) {
            grownPlants.push(plant)
            }
            }
    }
    return grownPlants
}