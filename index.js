// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
     

function createFareMultiplier(integer) {
    return ((x) => x * integer);
}

const fareDoubler = x => x * 2;

const fareTripler = x => x * 3; 

const selectDifferentDrivers = (array, returnFirstTwoDrivers) =>  {
    return returnFirstTwoDrivers(array)
}

