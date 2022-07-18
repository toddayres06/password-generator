// Assignment Code

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCase = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."];
// 

var passwordCharacters = [];



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Below is what teacher added for us to help
function generatePassword() {
  // your code goes here

  var passwordLength = prompt("How many characters do you want your password? Password must be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Your password needs to be between 8 and 128 characters.");
    return null;
  }
  var passwordLowerCase = confirm("Do you want to use lower case characters?");
  var passwordUpperCase = confirm("Do you want to use upper case characters?");
  var passwordNumeric = confirm("Do you want to use numeric characters?");
  var passwordSpecial = confirm("Do you want to use special characters?");

  if (passwordUpperCase + passwordLowerCase + passwordNumeric + passwordSpecial == 0) {
    alert("You have selected too few characters types.");
    return null;
  }

  if (passwordLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
    console.log("yes");
  }
  if (passwordUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }
  if (passwordNumeric) {
    passwordCharacters = passwordCharacters.concat(numberCase);
  }
  if (passwordSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCase);
  }



  const random = Math.floor(Math.random() * passwordCharacters.length);

  var randomPassword = []
  for (let i = 0; i < passwordLength; i++) {
    var thisCharacter = randomCharacter();
    randomPassword.push(thisCharacter);
    console.log(thisCharacter);
  }

  return randomPassword.join("");

  // push characters from global variables to lowercase into passwordCharacters array on line 25. passwordCharacters.push (...lowerCase) 

}

function randomCharacter () {
  const random = Math.floor(Math.random() * passwordCharacters.length);
  var singleCharacter = passwordCharacters[random]
  return singleCharacter;
}





  //  }

  // List of numbers, special chars, uppercase and lowercase
  //array
  //combine all arrays into one array
  //random choose characters
  // create a string set equal to password var
  //array method to check if something is an array
  // generate random password
  // return password


