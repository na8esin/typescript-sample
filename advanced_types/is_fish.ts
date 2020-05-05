interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function isFish2(pet: Fish | Bird): pet is Fish {
    return true;
}

console.log(isFish({swim: () =>{}, layEggs: () =>{}}));
console.log(isFish({fly: () =>{}, layEggs: () =>{}}));

// predicates自体に大きな強制力があるわけではない
console.log(isFish2({swim: () =>{}, layEggs: () =>{}}));
console.log(isFish2({fly: () =>{}, layEggs: () =>{}}));