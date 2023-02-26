// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters = '0123456789';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!#$%^&*(),-:;<>+=?}{][_|`~';
var passwordConfirmation = '';
var passwordComplete = '';

function writePassword(){
  var length = parseInt(prompt("How many characters would you like your password to contain?"))
  if (length != 12)
  noLength();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function noLength(){
 window.alert("Unfortunately, you cannot have a password less than 8 characters, or more than 128 characters.")
}

    //  this is the var to confirm if user wants lowercased/uppercased characters
    // var hasLowerCasedCharacters = confirm( 'Click OK to confirm including lowercase characters.');
    //  this is the var to confirm if user wants lowercased characters
    // var hasUpperCasedCharacters = confirm( 'Click OK to confirm including Uppercase characters.');
}

// to push a Numeric value after the customer has confirmed they want one if (userResponseToNumeric == true {
//   password.push(numericCharacters);
// if (userResponseToNumeric == true {
//   password.push(numericCharacters);