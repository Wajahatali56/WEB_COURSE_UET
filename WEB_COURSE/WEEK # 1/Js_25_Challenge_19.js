
/*
given an array of int ,return this array with double of int[1 , 2 , 3] => [2,4,6]

*/
// sol:
function maps(arr){
    const result = arr.maps((arrItem) =>{
     return arrItem * 2;
    });
    return result;
};