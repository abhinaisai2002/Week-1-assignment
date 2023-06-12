/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function getObj(s,obj,mul){
    for(let ch of s){
        if(ch in obj){
            obj[ch]+=mul;
        }
        else
            obj[ch] = 1;
    }
    return obj;
}
function isAnagram(str1, str2) {
    let obj = {};
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    getObj(str1, obj, 1);
    getObj(str2,obj,-1);

    for(let key in obj){
        if(obj[key]>0)return false;
    }
    return true;
}

module.exports = isAnagram;
