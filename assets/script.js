// Assignment Code
var generateBtn = document.querySelector("#generate");
// all variables for password criteria
var numericCharacters = '0123456789';
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!#$%^&*(),-:;<>+=?}{][_|`~';
var passwordConfirmation = '';
var passwordComplete = '';

function writePassword(){
  var length = prompt("How many characters would you like your password to contain?")
  if (!length){
      return;
  }  
  if (length <= 8 || length >= 128) { 
      alert("Unfortunately, you cannot have a password less than 8 characters, or more than 128 characters.")
      return;
  }
// turns string into integer (number) for sake of calculations *might be redundant?*
  var passwordLength = parseInt(length);
// confirmation to choose randomiser, works with cancel"
  var userNumericChoice = confirm('Click OK to confirm including a Number in your Password');
  var userUpperCaseChoice = confirm('Click OK to confirm including Upper Case Letters in your Password');
  var userLowerCaseChoice = confirm('Click OK to confirm including Lower Case Letters in your Password');
  var userSpecialCharactersChoice = confirm('Click OK to confirm including Special Characters in your Password');
// if all confirmations are true
  if (userNumericChoice === true) {
    passwordConfirmation += numericCharacters
  }

  if (userUpperCaseChoice === true) {
    passwordConfirmation += upperCaseLetters
  }

  if (userLowerCaseChoice === true) {
    passwordConfirmation += lowerCaseLetters
  }
  if (userSpecialCharactersChoice === true) {
    passwordConfirmation += specialCharacters
  }
    // adding no value.
  if (!userNumericChoice || !userUpperCaseChoice || !userLowerCaseChoice || !userSpecialCharactersChoice){
    passwordConfirmation += ''
  }
  if (passwordConfirmation === 0){
    alert("No password could be generated, please try again")
  }

    // math.floor starting at the beginning of the variable and then randomise; then multiply by length?? gathers number for password
  for (i = 0; i < passwordLength; i++){
    passwordComplete += passwordConfirmation.charAt(Math.floor(Math.random() * passwordConfirmation.length));
  }
    
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordComplete;
}   
// understand what code below means?
// Write password to the #password input
// function writePassword() {
// var password = generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

