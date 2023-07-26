// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
// import { harvestPlants } from "./harvester"


export const catalog = (harvestedPlants) => {
    let htmlString = ``
    for (const harvest of harvestedPlants) {
        htmlString += `<section class="plant">${harvest.type}</section>`

    }
    return htmlString
}