// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// // Case 1 - Small Set of Numbers
// var arr = [12, 12, 13, 13];
// for (var index=0, t=40; index<t; index++) {
//     arr.push(Math.round(Math.random() * t))
// }

// Case 2 - Large set of Numbers
var arr = [];
for (var index = 0, t = 400000; index < t; index++) {
    arr.push(Math.round(Math.random() * t));
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items) {
    // number of items in the array
    var len = items.length;
    // the value currently being compared
    var value;
    // index into unsorted section
    // index into sorted section
    var i;
    var j;

    for (i = 0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        // Whenever the value in the sorted section is greater than the value
        // in the unsorted section, shift all items in the sorted section over
        // by one. This creates space in which to insert the value

        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j];
        }

        items[j + 1] = value;
    }

    return items;
}


// ================================================
// FUNCTION CALL
// ================================================

console.log("PRE-SORT");
console.log(arr.join(","));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(arr).join(" "));