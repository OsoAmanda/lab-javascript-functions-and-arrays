// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNum, secondNum) {
  //return Math.max(maxOfTwoNumbers);
   if (firstNum > secondNum) {
     return firstNum;
 } else {
     return secondNum;
 }
}
//console.log(maxOfTwoNumbers(18, 21));



// Iteration #2: Find longest word
function findLongestWord(arr) {
  if (arr.length === 0){return null;}
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}




// Iteration #3: Calculate the sum
function sumNumbers(arr) {
  return arr.reduce((a, b) => a + b, 0);
}



// Iteration #3.1 Bonus:
function sum(arr) {
  let total = 0;
  for(let item of arr){
    if (typeof(item) == 'number')total+=item;
    else if (typeof(item) == 'boolean')total+=((item)? 1:0);
    else if (typeof(item) == 'string'){total+=item.length;}
    else {throw new Error("Unsupported data type sir or ma'am");}
  }
  return total;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(arr) {
  if (arr.length === 0){return null;}
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  let avg = total / arr.length;
  return avg;
}

// Level 2: Array of strings
function averageWordLength(arr) { 
  if (arr.length === 0){return null;}
  let longest = arr.reduce(function(a,b){
    return a + b.length
  }
  ,0);
  return longest / arr.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  if(arr.length === 0){return null;}
  let avg = 0;
  for(let item of arr){
    if (typeof(item) == 'number')avg+=item;
    else if (typeof(item) == 'boolean')avg+=((item)? 1:0);
    else if (typeof(item) == 'string'){avg+=item.length;}
  }
  return parseFloat((avg/arr.length).toFixed(2));
}

// Iteration #5: Unique arrays
function uniquifyArray(arr) {
  if (arr.length === 0){return null;}
  const unique = Array.from(new Set(arr));
  return unique;
}



// Iteration #6: Find elements
function doesWordExist(arr, word) {
  if(arr.length == 0){ //test
    return null;
  }
  for(let eachWord of arr){
    console.log(eachWord,word)
    if(eachWord === word){
      return true;
    }
  }
  return false;
}



// Iteration #7: Count repetition
function howManyTimes(arr,search) {
    if (arr.length === 0){return 0;}
    let count = arr.reduce(function(total,item){
      if (item == search){return total += 1}
      else return total;
    },0);
    return count;
}



// Iteration #8: Bonus
function greatestProduct(matrix) {
  // console.log(matrix)
  let maxProduct = 0;
  for(let row = 0; row<matrix.length; row++){
    for(let col = 0; col<matrix[row].length; col++){
      let maxRow = 1;
      let maxCol = 1;
      for(let tmp = 0; tmp<4; tmp++){
        maxRow *= matrix[row][col+tmp];
        maxCol *= matrix[row+tmp]?.[col];
      }
      if (maxRow > maxProduct){maxProduct = maxRow;}
      if (maxCol > maxProduct){maxProduct = maxCol;}
      // console.log(maxProduct+' '+maxRow+' '+maxCol)
    }
  }
  return maxProduct;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
