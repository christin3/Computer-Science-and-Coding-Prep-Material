// Benchmark is a library that times
var Benchmark = require('benchmark');
var generate = require('./shared/generate');

var items= generate(1000).sort(function (a,b){return a-b});
var item = items[Math.ceil(Math.random() * items.length)];

console.log(binarySearch(item, items));

function binarySearch(search, container) {
    var currentElement;
    var currentIndex;
    var maxIndex = container.length - 1;
    var minIndex = 0;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = container[currentIndex];

        //matches the index
        if (currentElement === search) {
            return currentIndex;
        }
        //less than the index
        else if (currentElement < search) {
            minIndex = currentIndex + 1;
        }

        //more than the index
        else if (currentElement > search) {
            maxIndex = currentIndex - 1;
        }
    }
}
