 const flavorFroyo = prompt("Enter a list of froyo flavors (seperate by commas):",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
 );
const flavors = flavorFroyo.split(",");
console.log("Flavor array:", flavors);
console.table("User input:", flavorFroyo);

function count(flavors) {
    const count = {};
    for (const amount of flavors) {
        if (amount in count) {
            count[amount] += 1;
        } else {
            count[amount] = 1;
        }
    }
    return count;
}


function countFlavor(froyo) {
    const count = {};
    for (const amount of flavors) {
        if (amount in count) {
            count [flavors] += 1;
        } else {
            count[flavors] = 1;
        }
    }
    return count;
}

