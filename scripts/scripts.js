$(document).ready(function() {
  var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2){
    return number1 - number2;
  };
  var multiply = function (number1, number2){
    return number1 * number2;
  };
  var divide= function(number1, number2){
      return number1 / number2;
    };
  var errorMessage = "Can't divide by zero!"

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
    $("#additionResult").text(number3);
    $(".results").slideDown();
    event.preventDefault();
  });
  $('button#subtract').click(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt(subtract(number1, number2));
    $("#subtractionResult").text(number3);
    $(".results").slideDown();
    event.preventDefault();
  });
  $('button#multiply').click(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt(multiply(number1, number2));
    $("#multiplicationResult").text(number3);
    $(".results").slideDown();
    event.preventDefault();
  });
  $('button#divide').click(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    if (number2 === 0) {
      alert("Glitch in the matrix!")
      event.preventDefault();
      return errorMessage;
    }
    var number3 = parseFloat(divide(number1, number2)).toFixed(2);
    $("#divisionResult").text(number3);
    $(".results").slideDown();
    event.preventDefault();
  });
});
// var weight = parseFloat(prompt("Enter your weight(lbs)"));
// var height = parseFloat(prompt("Enter your height(inch)"));

    //
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
