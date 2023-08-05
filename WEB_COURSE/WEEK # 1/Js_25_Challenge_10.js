/*
Given an array of integers your solution should find the smallest integer.
*/

// Sol:
class SmallestIntegerFinder {
    findSmallestInt(arrayOfnumbers) {
      let smallestnumber;
      for(let i =0 ; i <arrayOfnumbers.length ; i++){
        const arrnumber = arrayOfnumbers[i];
        if (i === 0){
          smallestnumber = arrnumber;
        }
        if (arrnumber < smallestnumber){
          smallestnumber = arrnumber;
        }
      }
      return smallestnumber;
    }
  }


