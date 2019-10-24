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
var errorMessage = "Can't divide by zero!";
$(document).ready(function() {
  $("#calculatorForm").submit(function(event) {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "+") {
      result = add(number1, number2);
    } else if (operator === "-")  {
      result = subtract(number1, number2);
    } else if (operator === "*")  {
      result = multiply(number1, number2);
    } else if (operator === "/")  {
      result = divide(number1, number2);
    } else {
      return ("We're Screwed.");
    }
    $('#result').text(result);
    $(".results").slideDown();
    event.preventDefault();

  // $('button#add').click(function() {
  //   var number1 = parseInt($("input#number1").val());
  //   var number2 = parseInt($("input#number2").val());
  //   var result = parseInt(add(number1, number2));
  //   $("#additionResult").text(result);
  //   $(".results").slideDown();
  //   event.preventDefault();
  // });
  // $('button#subtract').click(function() {
  //   var number1 = parseInt($("input#number1").val());
  //   var number2 = parseInt($("input#number2").val());
  //   var result = parseInt(subtract(number1, number2));
  //   $("#subtractionResult").text(result);
  //   $(".results").slideDown();
  //   event.preventDefault();
  // });
  // $('button#multiply').click(function() {
  //   var number1 = parseInt($("input#number1").val());
  //   var number2 = parseInt($("input#number2").val());
  //   var result = parseInt(multiply(number1, number2));
  //   $("#multiplicationResult").text(result);
  //   $(".results").slideDown();
  //   event.preventDefault();
  // });
  // $('button#divide').click(function() {
  //   var number1 = parseInt($("input#number1").val());
  //   var number2 = parseInt($("input#number2").val());
  //   if (number2 === 0) {
  //     alert("Glitch in the matrix!")
  //     event.preventDefault();
  //     return errorMessage;
  //   }
    var result = parseFloat(divide(number1, number2)).toFixed(2);
    $("#divisionResult").text(result);
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
