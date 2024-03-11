//multiple pointer problem solving pattern
//time complexity linear time
const twoSum = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}


function countUniqueValues(arr) {
    // Edge case: if array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Initialize variables
    let uniqueCount = 1;
    let currentValue = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current number is different from the previous one, it's a unique value
        if (arr[i] !== currentValue) {
            uniqueCount++;
            currentValue = arr[i];
        }
    }

    return uniqueCount;
}

// Example usage:
const arr = [-2, -1, -1, 0, 1, 1, 2, 3, 3, 3, 4, 5, 5];
console.log(countUniqueValues(arr)); // Output should be 9
