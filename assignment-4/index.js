// Problem:1  radianToDegree
function radianToDegree(radians) {
    if (typeof radians !== 'number') {
        return 'Hey, Enter A Number'
    }

    else{
        const pi = Math.PI;
        const radian = radians * (180 / pi);
        const total = parseFloat(radian.toFixed(2));
        return total;
    }
}

// console.log(radianToDegree(199));

// Problem:2  isJavaScriptFile 

function isJavaScriptFile(string) {
    if ( typeof string !== 'string') {
        return 'Hey, Enter file extenstion'
    }
    const file = string;
    const fileSeparate = file.split('.').pop();
    const validExtenstion = 'js';
    if (validExtenstion === fileSeparate) {
        return true;
    }
    else {
        return false;
    }
}
// const input = isJavaScriptFile('index.js')
// console.log(input);

// Problem 3: oilPrice

function oilPrice(diselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof diselQuantity !== 'number'||typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Hey, Enter A Number';
    }
    else {
        const diselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        const tootalPriceOfDisel = diselPrice * diselQuantity;
        const tootalPriceOfPetrol = petrolPrice * petrolQuantity;
        const tootalPriceOfOctane = octanePrice * octaneQuantity;
        const allPriceOfOil = tootalPriceOfDisel + tootalPriceOfPetrol + tootalPriceOfOctane;
        return allPriceOfOil;
    }
}

// console.log(oilPrice(10,0,0));

// Problem 4: publicBusFare


function publicBusFare(people) {
    if (typeof people !== 'number') {
        return 'Hey, Enter A Number'
    }
    // bus microBus ticket price requirments
    const reservedBus = 50;
    const microBus = 11;
    const publicBusTicketPrice = 250;

    const needBus = parseInt(people / reservedBus);
    // console.log(needBus);
    const busRemainingPeople = people % reservedBus;
    const busRemaining = people % reservedBus;
    if (busRemaining <= 11) {
        return busRemaining * publicBusTicketPrice;
    }
    else {
        const needMicroBus = parseInt(busRemaining / microBus);
        // console.log(needMicroBus);
        const peopleWithPublicBus = busRemaining % microBus;
        // console.log(peopleWithPublicBus);
        return peopleWithPublicBus * publicBusTicketPrice;
    }
}

// console.log(publicBusFare(235));

// Problem 5: isBestFriend 

function isBestFriend(friend1, friend2) {
    if(typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return 'plese provide a object';
    }
    let myFriend1 = friend1;
    let myFriend2 = friend2;

    if (myFriend1.name === myFriend2.friend && myFriend1.friend === myFriend2.name) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isBestFriend({name:'abul' ,friend:'kabul'}, {name:'kabul', friend:'abul'}));

