/**
 * Created by christine on 1/7/17.
 */

//Example linear search using a for loop
    // if we double the stuff we will double the search time, if we triple it triples.
    // minimum times to each 1 max time to search # of items in the array. (14)
    // use benchmark.js to time how long it takes the code to execute


var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
var random_value = stuff[Math.ceil(Math.random() * 14)];

for (var i = 0; i < stuff.length; i++) {

    if (stuff[i] === random_value) {
        console.log(i + " : " + random_value)
    }

}




