// Code your solution here
function findMatching(driverArray, driver) {
    return driverArray.filter(name => name.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch(driverArray, driver){
    return driverArray.filter(name => name[0,1] === driver[0,1])
}

function matchName(driverArray, driverName){
    return driverArray.filter(driver => driver.name === driverName)
}
