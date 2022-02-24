/* In the example below, the random number belongs to the range from 0 to 5 inclusively
   (for number of arrays and for their lengths also)
   Random numbers for arrays filling belong to the range from -6 to 6

   Maximum allowed number safely processed by JS is 2**53-1
   If we want to receive random number belonging to the range from -(2**53-1) to 2**53-1
   we have to use this constant: Number.MAX_SAFE_INTEGER
*/
 
function randomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue)
}
   
function generateArrays(n, maxValue) {
    if (n <= 0) {
        throw new Error ("Number of arrays can't be less than 1 \nPlease pass another value")
    } else if (maxValue < 0) {
        throw new Error ("Allowed length of arrays can't be a negative value \nPlease pass another value")
    } else if (maxValue < n) {
        throw new Error ("Number of arrays can't be greater than allowed lengths of arrays \nPlease pass another values")
    };
    let sortedArrays = [];
    let arrayLengths = [];
    
    for (let i = 0; i < n; i++) {
        let currentArray = [];
        let randomLength;
        do {
            randomLength = randomNumber(maxValue);
        } while (arrayLengths.includes(randomLength));
        arrayLengths.push(randomLength);
        
        for (let k = 0; k < randomLength; k++) {
            currentArray.push(Math.floor(Math.random() * (2 * maxValue) + 1) - maxValue)
        };
               
        if (i % 2) {
            currentArray.sort((a, b) => a - b)
        } else {
            currentArray.sort((a, b) => b - a)
        };
        
        sortedArrays.push(currentArray);
    };
    return sortedArrays;  
  }
    
  console.log(generateArrays(6, 6)); 
  // Pass Number.MAX_SAFE_INTEGER if you want to receive random number belonging to the range from 0 to 2**53-1
