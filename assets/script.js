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
  if (!length){
    return; 
      }
    } if (length <= 8 || length >= 128) { 
      alert("Unfortunately, you cannot have a password less than 8 characters, or more than 128 characters.")
    }

var userNumericChoice = confirm('Click OK to confirm including a Number in your Password');
var userUpperCaseChoice = confirm('Click OK to confirm including Upper Case Letters in your Password');
var userLowerCaseChoice = confirm('Click OK to confirm including Lower Case Letters in your Password');
var userSpecialCharactersChoice = confirm('Click OK to confirm including Special Characters in your Password');


    if (userNumericChoice === true) {
      passwordConfirmation += numericCharacters
    }

    if (userUpperCaseChoice === true) {
      passwordConfirmation += userUpperCaseChoice
    }

    if (userLowerCaseChoice === true) {
      passwordConfirmation += userLowerCaseChoice
    }
    if (userSpecialCharactersChoice === true) {
      passwordConfirmation += userSpecialCharactersChoice
    }
  // adding no value.
    if (!userNumericChoice || !userUpperCaseChoice || !userLowerCaseChoice || !userSpecialCharactersChoice){
      passwordConfirmation += ''
    }
    if (passwordConfirmation = 0){
      alert("No password could be generated, please try again")
      return;
    }

    // math.floor starting at the beginning of the variable and then randomise; then multiply by length?? gathers number for password
    for (i = 0; i < length; i++){
      passwordComplete += passwordConfirmation.charAt(Math.floor(math.random()* passwordConfirmation.length));
    }
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




    //  this is the var to confirm if user wants lowercased/uppercased characters
    // var hasLowerCasedCharacters = confirm( 'Click OK to confirm including lowercase characters.');
    //  this is the var to confirm if user wants lowercased characters
    // var hasUpperCasedCharacters = confirm( 'Click OK to confirm including Uppercase characters.');


// to push a Numeric value after the customer has confirmed they want one if (userResponseToNumeric == true {
//   password.push(numericCharacters);
// if (userResponseToNumeric == true {
//   password.push(numericCharacters);