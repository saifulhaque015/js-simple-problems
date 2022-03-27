function findMax(numbers) {
    let max = 0;
    for (var i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        if (elements > max) {
            max = elements;
        }
    }
    return max;
}

const ages = [12, 23, 2, 21, 25];
const oldest = findMax(ages)
console.log(oldest);