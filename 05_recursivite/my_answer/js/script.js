function sum1(tab) {
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        result += tab[i];
    }
    return result;
}

function sum2(tab, i) {
    let result = 0;
    if (i < tab.length) {
        result = tab[i] + sum2(tab, i + 1);
    }
    else {
        return result;
    }

    return result;
}

function factorial(n) {
    if (n < 0) {
        return 0;
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return (n * factorial(n - 1));
    }
}

function fibonacci(x) {
	if (x < 0) {
		return (-1);
    }
	if (x == 0) {
		return (0);
    }
	if (x == 1) {
		return (1);
    }
	return (fibonacci(x - 1) + fibonacci(x - 2));
}

const nbrs_tab = [1, 2, 3];
console.log("step 1 - iterative sum\nResult with [1, 2, 3] array = " + sum1(nbrs_tab))
console.log("step 2 - recursive sum\nResult with [1, 2, 3] array = " + sum2(nbrs_tab, 0));
console.log("step 3 - recursive factorial\nResult (with n=3) = " + factorial(3));
console.log("step 4 - fibonacci recursive\nresult (with x=5) = " + fibonacci(7));