$(document).ready(function() {
  $("#calculatorForm").submit(function(event) {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());

    event.preventDefault();
  });
});

// var weight = parseFloat(prompt("Enter your weight(lbs)"));
// var height = parseFloat(prompt("Enter your height(inch)"));
//
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtraction = function(number1, number2){
//   return number1 - number2;
// }
//
// var division = function(number1, number2){
//   return number1 / number2;
// }
//
// var multiplication = function (number1, number2){
//   return number1 * number2;
// }
//
// var bmi = function (weight, height){
//   return (weight * 703) / (height * height);
// }
//
// var result = bmi(weight, height);
// if(isNaN(result)) {
//   alert("Uh oh, make sure not to type \"lb\" or \"in\" with your measurements, digits only!");
// } else {
//   alert("Your BMI is: " + result + ". Refresh the page to calculate again!");
// }
//
// var celsiusPrompt = parseFloat(prompt ("Enter the celsius"));
// var celciusToFahrenheit = function (celsius) {
// return celsiusPrompt * (9/5) + 32;
// }
//   alert (celsiusPrompt +' to fahrenheit: '+ celciusToFahrenheit(celsiusPrompt));
