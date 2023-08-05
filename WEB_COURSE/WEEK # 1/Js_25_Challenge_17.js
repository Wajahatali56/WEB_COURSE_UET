/* Repeat the string according to given number */

function reptstr(numberOfRepeats , str){
    let starterString = '';
    for (let i = 0; i<numberOfRepeats; i ++){
       starterString =  starterString+ str;
    }
    return starterString;
}