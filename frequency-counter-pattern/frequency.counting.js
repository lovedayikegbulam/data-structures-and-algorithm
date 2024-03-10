//frequency counter pattern
//Naive solution
//time complexity of n*2
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value) => {
    const squaredIndex = arr2.indexOf(value ** 2);
    if (squaredIndex !== -1) {
      arr2.splice(squaredIndex, 1);
      return true;
    }
    return false;
  });
}

//Refactored solution
//Time complexity of 2n
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

//please comment out either of the function before executing the code 

// Example usage:
console.log(same([1,2,3,2,5], [9,1,4,4,11]))
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (frequency of 1 is not the same)
