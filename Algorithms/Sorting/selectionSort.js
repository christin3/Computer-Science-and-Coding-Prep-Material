function selectionSort() {

    var items = [201, 39, 54, 461, 93, 377, 413, 176, 164, 317, 109, 113, 36, 235, 17, 60, 53, 474, 257, 48];

    var len = items.length,
        min;

    for (i = 0; i < len; i++) {

        //set minimum to this position, holding the index comparing the value
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            //strictly less than
            if (items[j] < items[min]) {
                min = j;
            }
        }

        //if the minimum is not in the position, swap it
        if (i != min) {

            swap(items, i, min);
        }
    }

    return items;
}