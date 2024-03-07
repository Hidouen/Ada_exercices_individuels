function sum1(tab) {
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
        result += tab[i];
    }
    return result;
}

const nbrs_tab = [54, 85, 100024];
console.log(sum1(nbrs_tab));