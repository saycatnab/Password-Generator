// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Start with the prompts first, this collects user input and then everything after will be logic based on user input.
// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
    prompt("Please write down the length you want your password to be")
  )

  // alert(length)
  // If the user inputs a string ie NaN then this alert will pop up
  if(isNaN(length) === true){
    alert(`Please enter a number.`)
    return
  }

  // Given a min of 10 and max of 64 for user input password length
  if(length < 10){
    alert(`Password length must be at least 10 characters long.`)
    return
  }
  if(length >= 65){
    alert(`Password length must be less than 65 characters long.`)
    return
  }

  // Give user options by confirming if theyd like special, numeric, lower case, upper case characters

  let hasSpecialCharacters = confirm(
    "Would you like special characters in your password? Click OK for yes."
  )

  let hasNumericCharacters = confirm(
    "Would you like numeric characters in your password? Click OK for yes."
  )
  let hasLowerCasedCharacters = confirm(
    "Would you like lower-cased character characters in your password? Click OK for yes."
  )
  let hasUpperCaseCharacters = confirm(
    "Would you like upper-cased characters in your password? Click OK for yes."
  
  )

  // To make sure the user picks at least one, this conditional is put here ('false' here means if they clicked 'cancel' on all the confirm prompts)
  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false
    ) {
      alert(`You must pick at least one!`)
      return;
  }
    

  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCaseCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters
  }    

  console.log(passwordOptions)
  return passwordOptions
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex]

  return randomElement
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()
  console.log(options)

  let result = []

  let possibleCharacter = []
  let guaranteedCharacter = []

  if (options.hasSpecialCharacters){
    possibleCharacter = possibleCharacter.concat(specialCharacters)
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  // console.log(possibleCharacter)
  // console.log(guaranteedCharacter) 
  if (options.hasNumericCharacters){
    possibleCharacter = possibleCharacter.concat(numericCharacters)
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if (options.hasLowerCasedCharacters){
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters)
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }
  if (options.hasUpperCasedCharacters){
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters)
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);