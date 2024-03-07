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
    if (n < 1) {
        return 0;
    }
    if (n > 1) {
        return (n * factorial(n - 1));
    }
    else {
        return n;
    }
}

// const nbrs_tab = [1, 2, 7];
// console.log(sum2(nbrs_tab, 0));
console.log(factorial(3));