function getSum(num1, num2) {
    return num1 + num2;
}
// console.log("Sum is :",getSum(5,2));
var mySum = function (num1, num2) {
    if (typeof (num1) == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum("546",12))
function getName(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + " " + lastname;
}
console.log(getName("Muhammad"));
function myVoid() {
    return;
}
