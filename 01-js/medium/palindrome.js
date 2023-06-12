/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let s1 = "";
  for(let i=0;i<str.length;i++){
    let ch = str[i];
    if(ch !== '' && (+ch || (/[a-zA-Z]/).test(ch)))
    s1 = s1 + ch;
  }
  console.log(s1);
  let left = 0,right = s1.length-1;
  while (left < right) {
    if(s1[left++] !== s1[right--])return false;
  }
  return true;
}



module.exports = isPalindrome;
