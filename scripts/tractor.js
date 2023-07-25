import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { usePlants } from "./field.js"

// import all seeds and make plants
// what tool to use to run every plant? 

// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// The plan is an array. (in the plan.js) It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed). if (  === "object")
// Take that seed and add it to the array of plants in the field module.

debugger 
export const plantSeeds = (thePlan) => {
    for (plan of thePlan) {
        for(const seed of thePlan) {
            if (seed === "Asparagus"); {
            addPlant(createAsparagus())
            } 
            if (seed === "Corn"); {
            addPlant(createCorn())
            }
            if (seed === "Potato"); {
            addPlant(createPotato())
            }
            if (seed === "Soybean"); {
            addPlant(createSoybean())
            }
            if(seed === "Sunflower"); {
            addPlant(createSunflower())
            }
            if (seed === "Wheat");{
            addPlant(createWheat())
            }
        }    
    // The function must accept the year's planting plan as input (i.e. it must define a parameter).
    }
        return thePlan
}






