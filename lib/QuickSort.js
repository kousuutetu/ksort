
"use strict";

var quickSort = module.exports = function quickSort (array, compfunc, p, r, randomized) {

    compfunc = compfunc || function(a, b){return a > b};


    p = (typeof p === "undefined") ? 0 : p;
    r = (typeof r === "undefined") ? array.length - 1 : r;
    var q;
    if (p < r) {
        q = partition(array, p, r, compfunc);
        quickSort(array, compfunc, p, q - 1, randomized);
        quickSort(array, compfunc, q + 1, r, randomized);
    }
    return array;
};

var partition = function partition (array, p, r, compfunc) {
    var x = array[r];
    var i = p - 1;
    var temp;
    for (var j = p; j < r; j++) {
        if (compfunc(array[j], x)) {
            i++;
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[r];
    array[r] = temp;
    return i + 1;
};
