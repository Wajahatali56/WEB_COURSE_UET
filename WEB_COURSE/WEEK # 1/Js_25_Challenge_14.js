/* Removing the first and last character of string

*/
// Sol:

function removechar(str){
    const lengthOfString = str.length();
    return str.substr(1 , lengthOfString - 2);
};