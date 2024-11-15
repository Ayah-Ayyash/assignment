
function calculateTotalAndAverage(numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = total / numbers.length;
    return { total, average };
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateTotalAndAverage(numbers);
console.log("Total:", result.total); 
console.log("Average:", result.average); 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(strings);
console.log("Unique strings:", uniqueStrings); 