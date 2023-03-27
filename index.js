const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(driversArray) {
  return driversArray.slice(0, 2);
}

returnFirstTwoDrivers(drivers);

function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2)
}

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(driversArray, selectDriversFunction) {
    return selectDriversFunction(driversArray);
  }
  
  selectDifferentDrivers(drivers, selectingDrivers[0]);
  selectDifferentDrivers(drivers, selectingDrivers[1]);