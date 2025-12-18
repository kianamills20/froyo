 const flavorFroyo = prompt("Enter a list of froyo flavors (seperate by commas):",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
 );
const flavors = flavorFroyo.split(",");
console.log("Flavor array:", flavors);
console.table("User input:", flavorFroyo);
const flavorCount = count(flavorFroyo);

function count(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        const flavor = arr[i];
        if (flavor in count) {
            count[flavor] += 1;
        } else {
            count[flavor] = 1;
        }
    }
    return count;
}


function countFlavor(froyo) {
      const count = {};
    for (let i = 0; i < arr.length; i++) {
        const flavor = arr[i];
        if (flavor in count) {
            count[flavor] += 1;
        } else {
            count[flavor] = 1;
        }
    }
    return count;
}

