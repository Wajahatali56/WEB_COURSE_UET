/* Adding the arrary into an array*/


//sol:

function araryplusArray(arr1 , arr2){
   let sum = 0;
   for (let i = 0; i <arr1.length ; i++){
    const arr1Value = arr1[i];
    const arr2Value = arr2[i];
    const addval = arr1Value + arr2Value;
    sum = sum + addval;
   }
   return sum;
}

