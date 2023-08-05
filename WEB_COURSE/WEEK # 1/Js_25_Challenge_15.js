/*
Print the Sum of positive numbers:

*/

// sol:

function positiveSum(arr)
{
    let sum;
    for(let i = 0 ; i <arr.length ; i++){
        if(arr[i] > 0 ){
            sum = sum+arr[i];
        }
    }
    return sum;
}