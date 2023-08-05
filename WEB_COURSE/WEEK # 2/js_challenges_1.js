
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

*/

function filter_list(numArr) {
    return numArr.filter(callbackfun);
   
  }
  function callbackfun(arritem){
    return arritem >= 0 && typeof arritem === 'number';
  }
// Another solution:

  function filter_list(numArr) {
    return numArr.filter(arritem => {
       return arritem >= 0 && typeof arritem === 'number';
    });
   
  }
//Another solution
  function filter_list(numArr) {
    return numArr.filter(arritem => arritem >= 0 && typeof arritem === 'number');
    };










