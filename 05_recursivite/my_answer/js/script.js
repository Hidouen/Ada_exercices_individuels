// Step 1: Iterative function to sum numbers from an array
function sum1(tab) {
    let result = 0;
    if (!Array.isArray(tab)) {
        return tab;
    }
    for (let i = 0; i < tab.length; i++) {
        result += tab[i];
    }
    return result;
}

// Step 2: Recursive function to sum numbers from an array
function sum2(tab) {
    if (!Array.isArray(tab)) {
        return tab;
    }
    if (tab.length === 0) {
        return 0;
    }
    return tab[0] + sum2(tab.slice(1));
}

// Step 3: Recursive function to calculate factorial of a number
function factorial(n) {
    if (n < 0 || isNaN(n)) {
        return 0;
    }
    else if (n === 0) {
        return 1;
    }
    return (n * factorial(n - 1));
}

// Step 4: Recursive function to solve Fibonacci sequence
function fibonacci(x) {
    if (x <= 1 || isNaN(x)) {
        return x;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

const nbrs_tab = [1, 2, 3];
console.log("step 1 - Iterative sum\nResult (with [1, 2, 3] array) = " + sum1(nbrs_tab))
console.log("step 2 - Recursive sum\nResult (with [1, 2, 3] array) = " + sum2(nbrs_tab));
console.log("step 3 - Recursive factorial\nResult (with n=3) = " + factorial(3));
console.log("step 4 - Recursive Fibonacci sequence\nResult (with x=5) = " + fibonacci(7));