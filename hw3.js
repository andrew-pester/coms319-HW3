var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');
fNum1.substr

console.log("Factorial of the 1st digit is = "+factorial(fNum1));
console.log("The sum of all the digits of the 2nd number is = "+addDigits(fNum2));
console.log("The reverse of the 3rd number is = "+reverse(fNum3));
console.log("Is the 4th number a palindrome (True/False)? = "+palindrome(fNum4));


function factorial(num){
    if(num == 0){
        return 1;
    }else{
        return (num*factorial(num-1));
    }
}
function addDigits(num){
    var count = 0;
    for(var i = 0; i<num.length; i++){
        count += parseInt(num.substring(i,i+1));
    }
    return count;
}
function reverse(num){
    var ret = "";
    for(var i = num.length; i>0;i--){
        ret += num.substring(i-1,i)
    }
    return ret;
}
function palindrome (num){
    var ret = "";
    for(var i = num.length; i>0;i--){
        ret += num.substring(i-1,i)
    }
    for(var i = 0; i< num.length;i++){
        if(num.charAt(i) != ret.charAt(i)){
            return false;
        }
    }
    return true;

}