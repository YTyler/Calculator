$(document).ready(function() {
  var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2){
      return number1 - number2;
    }
  // $("#calculatorForm").submit(function(event) {
  //   number1 = parseInt($("input#number1").val());
  //   number2 = parseInt($("input#number2").val());
  //   number3 = parseInt(add(number1, number2));
  //   console.log(number1);
  //   console.log(number2);
  //   console.log(number3);
  //   console.log("Type of: ", typeof(number3));
  //   event.preventDefault();
  $('button#add').click(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt(add(number1, number2));
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log("Type of:", typeof(number3));
    $("#addResult").text(number3);
    event.preventDefault();
  });
  $('button#subtract').click(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt(subtract(number1, number2));
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log("Type of:", typeof(number3));
    $("#subtractResult").text(number3);
    event.preventDefault();
  });
});
// var weight = parseFloat(prompt("Enter your weight(lbs)"));
// var height = parseFloat(prompt("Enter your height(inch)"));
//

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
