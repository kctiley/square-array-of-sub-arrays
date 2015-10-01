// Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...
// Example 1:
var exampleArray =
                  [[1, 0, 0, 0],
                  [0, 1, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1]]

var exampleArray2 =
                 [[1, 0, 0, 0, 0],
                  [0, 1, 0, 0, 0],
                  [0, 0, 1, 0, 0],
                  [0, 0, 0, 1, 0],
                  [0, 0, 0, 0, 1]]

var sumDiagonal = function(inputArr){
    var result = 0;
    var counter = 0;
    for (var i = 0; i < inputArr.length; i++){
        result += inputArr[counter][counter];
        counter += 1; 
    }
    return result;
}


console.log(sumDiagonal(exampleArray));
console.log(sumDiagonal(exampleArray2));
=> 4
=> 5