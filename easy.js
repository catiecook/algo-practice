/* COUNT AND SAY
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

var countAndSay = function(n) {
  let sayNum = [];

  var arr = n.toString().split('');

  for (var i=0; i< arr.length; i++){
    if(arr[i] == 1 && arr[i+1] == 1) {
      sayNum.push(2);
      sayNum.push(1);
    } else if(arr[i] == 1 && arr[i+1] != 1){
      sayNum.push(1);
      sayNum.push(1);
    } else if(arr[i] == 2 && arr[i+1] == 2){
      sayNum.push(2);
      sayNum.push(2);
    } else if(arr[i] == 2 && arr[i+1] != 2){
      sayNum.push(1);
      sayNum.push(2);
    }
  }
  sayNum = sayNum.join('')
  return sayNum
}


/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

function isPalindrome(x) {
  let reversed, original
  let arr = x.toString().split('').map(function(y){
    return parseInt(y)
  })

  original = parseInt(arr.join(''))
  reversed = parseInt(arr.reverse().join(''));

  if (reversed === original) {
    return true
  } else { return false };
}

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++) {
      for(let k=i+1; k<nums.length; k++) {

        if ((nums[i] + nums[k]) === target) {
             return[i, k];
          }
    }
  }
  return "No matches";
};
