const businessMan = 4250;
const minister = 350;
const armyPerson = 650;
/* if (businessMan > minister && businessMan > armyPerson) {
    console.log('businessman is greater')
}
else if (minister > businessMan && minister > armyPerson) {
    console.log("minister is greater");
}
else {
    console.log("army person is greater");
}
var max = Math.max(businessMan, minister, armyPerson);
console.log('largest is ', max); 
*/

function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

const largest = findLargest(345, 3450, 6356);
console.log(largest);

