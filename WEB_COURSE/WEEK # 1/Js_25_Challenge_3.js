/*

Complete the solution so that it reverses the string passed into it.

function solution(str){

}

*/
// sol:

function solution(str){
    const arr = str.split("");
    const reversed = arr.reverse("");
    const reversestr = reversed.join("");
    return reversestr;
}
//ok