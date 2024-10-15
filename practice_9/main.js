// task 1
function getSum(a, b) {
    return a + b;
}

// task 2
function isSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

// task 3
function greeting(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

// task 4
function getMin(a, b, c) {
    return Math.min(a, b, c);
}

// task 5
function evenOrOdd(a, b, c) {
    const evenCount = (a % 2 === 0) + (b % 2 === 0) + (c % 2 === 0);
    if (evenCount === 3) return "even";
    if (evenCount === 0) return "odd";
    return "even/odd";
}

// task 6
function inOrOutRange(x, y, num) {
    return (num >= x && num <= y) ? "In range" : "Out of range";
}

// task 7
function createString(min, max, step) {
    let result = '';
    for (let i = min; i <= max; i += step) {
        result += i + ' ';
    }
    return result.trim();
}

// task 8
function rangeSum1(start, n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    for (let j = 0; j < start; j++) {
        total += j;
    }
    return total;
}

// task 9
function rangeSum2(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}

// task 10
function seriesSum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1 / (i * i);
    }
    return total.toFixed(2);
}

// task 11
function countDigits(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Example usage
console.log(getSum(5, 3)); // 8
console.log(isSquare(9)); // true
console.log(greeting('Bill', 'Jacobson', 33)); // "Hello, my name is Bill Jacobson and I am 33 years old."
console.log(getMin(5, 9, 7)); // 5
console.log(evenOrOdd(1, 3, 11)); // "odd"
console.log(inOrOutRange(5, 10, 8)); // "In range"
console.log(createString(0, 20, 5)); // "0 5 10 15 20"
console.log(rangeSum1(0, 3)); // 10
console.log(rangeSum2(5, 10)); // 45
console.log(seriesSum(5)); // "1.45"
console.log(countDigits(123654789)); // 9
