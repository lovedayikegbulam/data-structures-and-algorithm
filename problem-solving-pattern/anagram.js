//first approach
const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split("");
  let arr2 = str2.split("");

  return arr1.every((value) => {
    const index = arr2.indexOf(value);
    if (index !== -1) {
      arr2.splice(index, 1);
      return true;
    }
    return false;
  });
};


//second approach using charater sorted array
let validateAnagrams = (str1, str2) => {

    const sortedStr1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return sortedStr1 === sortedStr2;
    
  }

  //using frequency counter approach
  const areAnagrams = (str1, str2) => {
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // Count frequencies of characters in both strings
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    // Check if frequency counters are equal
    if (Object.keys(frequencyCounter1).length !== Object.keys(frequencyCounter2).length) {
        return false;
    }
    for (let char in frequencyCounter1) {
        if (frequencyCounter1[char] !== frequencyCounter2[char]) {
            return false;
        }
    }
    return true;
  }




console.log(checkAnagrams("joel", "leoj"));
console.log(validateAnagrams("joel", "loej"));
console.log(areAnagrams("joel", "leoj"));
