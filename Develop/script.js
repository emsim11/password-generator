// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define variables for password characters
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialABC = ",!#$%&'()*+-./:;<=>?@[]^_`{|}~";
var numberABC = "1234567890";

// Define variables for user selections and final password
var userInput = "";
var finalPassword = "";

function generatePassword() {
  console.log("You clicked the button!");
// 1. Prompt the user for the password criteria.
//    a. Password length between 8 and 128 characters
      var keyLength = prompt("How many characters would you like your password to have?");
//    b. Confirm the user selected a key length that is a number between 8 and 128.
      if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
            alert("Invalid entry - Please enter a numerical value between 8 and 128.");
            return
      }
      if (keyLength === Number && keyLength >= 8 && keyLength <= 128) {
            alert("Your password will be " + passwordLength + " characters long.");
      }
      console.log(keyLength);
//    c. Lowercase, uppercase, numbers, special characters
      var lowercase = confirm("Would you like your password to include lowercase letters?");
      console.log(lowercase);
      var uppercase = confirm("Would you like your password to include uppercase characters?");
      console.log(uppercase);
      var numbers = confirm("Would you like your password to include numeric characters?");
      console.log(numbers);
      var specials = confirm("Would you like your password to include special characters?");
      console.log(specials);
// 2. Validate the user input for character selection(s).
//    a. Check to see if the user selected at least one type of character input.
      if (lowercase === false && uppercase === false && numbers === false && specials === false) {
        alert("You must select at least one character type for your generated password.")
        return;
      }
//    b. For the user selected character types, add them into the user input string.
      userInput = "";
      if (lowercase) userInput += lowercaseABC;
      if (uppercase) userInput += uppercaseABC;
      if (numbers) userInput += numberABC;
      if (specials) userInput += specialABC;
      
// 3. Generate password based on criteria pulled from the user input string.
      finalPassword = ""
      for (var i=0; i < keyLength; i++) {
        var randomIndex = Math.floor(Math.random() * userInput.length);
        finalPassword += userInput[randomIndex];
      }
// 4. Display password the to page.
      return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);