 const flavorFroyo = prompt("Enter a list of froyo flavors (seperate by commas):",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
 );
console.log(froyo);

function count(flavors) {
    const count = ("");
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
    
}



