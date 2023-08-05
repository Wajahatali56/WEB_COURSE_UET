/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

// sol:

function getCount(str) {
    let countVowlels = 0;
    const arr = str.split("");
    for (i = 0 ; i < arr.length ; i++){
      switch (arr[i]){
          case 'a':
          countVowlels++;
          break;
           case 'e':
          countVowlels++;
          break;
           case 'i':
          countVowlels++;
          break;
           case 'o':
          countVowlels++;
          break;
           case 'u':
          countVowlels++;
       
      }
    }
    return countVowlels;
  }