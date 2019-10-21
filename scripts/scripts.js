//Number Prompts
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
var weight = parseFloat(prompt("Enter your weight(lbs)"));
var height = parseFloat(prompt("Enter your height(inch)"));

//Addition
var add = function(number1, number2) {
  return number1 + number2;
};

// alert("Addition " + add(number1, number2));

//Subtraction
var subtraction = function(number1, number2){
  return number1 - number2;
}
// alert("Subtraction " + subtraction(number1, number2))

//Division
var division = function(number1, number2){
  return number1 / number2;
}
// alert("Division " + division(number1, number2))
//Multiplication
var multiplication = function (number1, number2){
  return number1 * number2;
}
// alert("Multiplication " + multiplication (number1, number2))

// BMI
var bmi = function (weight, height){
  // alert(weight * height);
  return (weight * 703) / (height * height);
}

var result = bmi(weight, height);
if(isNaN(result)) {
  alert("Uh oh, make sure not to type \"lb\" or \"in\" with your measurements, digits only!");
} else {
  alert("Your BMI is: " + result + ". Refresh the page to calculate again!");
}

// celsius to Fahrenheit
var celsiusPrompt = parseFloat(prompt ("Enter the celsius"));
// var fahrenheit = parseFloat ("Enter the Fahrenheit")
var celciusToFahrenheit = function (celsius) {
return celsiusPrompt * (9/5) + 32;
}
  alert (celsiusPrompt +' to fahrenheit: '+ celciusToFahrenheit(celsiusPrompt));
