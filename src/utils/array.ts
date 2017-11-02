'use strict';

interface Array<T> {
    shuffle(): T[];
}

// https://bost.ocks.org/mike/shuffle/
Array.prototype.shuffle = function (): any[]{
    let inputArray: any[] = this;
    let counter = inputArray.length;
    
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = inputArray[counter];
        inputArray[counter] = inputArray[index];
        inputArray[index] = temp;
    }

    return inputArray;    
}