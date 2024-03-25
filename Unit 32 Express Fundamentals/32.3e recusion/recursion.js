/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // Base case
  if(i === nums.length) return 1
  // Normal case
  return nums[i] * product(nums.slice(i+1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long=0) {
  // Base case 
  if(i == words.length) return long;
  // Normal case
  long = Math.max(words[i].length,long)
  return longest(words, i+1, long)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newString='') {
  // Base case
  if(i >= str.length) return newString;
  // Normal case
  newString += str[i]
  return everyOther(str, i+2, newString)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let leftIndex = i;
  let rightIndex = str.length -i -1;
  //Base case
  if(leftIndex >= rightIndex) return true;
  //Normal case
  if(str[leftIndex] != str[rightIndex]) return false;
  return isPalindrome(str,i+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  // Base case
  if(i == arr.length) return -1;
  // Normal Case
  if(arr[i] == val) return i;
  return findIndex(arr,val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, newString='') {
  // Base case
  if(newString.length == str.length) return newString;
  // Normal case
  newString += str[str.length -1 -i];
  return revString(str, i+1, newString)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for(let key in obj){
    if(typeof obj[key] == "string") stringArray.push(obj[key]);
    if(typeof obj[key] == "object") stringArray.push(...gatherStrings(obj[key]))
  }
return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if(left > right) return -1;
  let middle = Math.floor((right + left) /2);
  if(arr[middle] == val) {
    return middle;
  }
  if(arr[middle] > val) {
    return binarySearch(arr, val, left, middle -1);
  }
  return binarySearch(arr, val, middle +1, right)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
