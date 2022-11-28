//select which criteria to include in the pword
//how long will the pword be, 8-128
//select which types, lcase, ucase, num, special charaters
//atleast one character type 
//pword matches selected criteria
//pword displayed in an alert or written on page
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Arrays for password criteria

// var passwordLen = 0

var pword = ""
var lcase = ["abcdefghijklmnopqrstuvwxyz"]
var ucase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers = ["0123456789"]
var specSymbols = ["!@#$%^&*()-_+=:;?/>.<,"]

// password generate function for given code.

function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be? Must be 8-128 characters.");
 //statement that sets length requirements and checks parameters.
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length does not meet requirements must be 8-128 characters.");
    var passwordLength = prompt("How long would you like your password to be? Must be 8-128 characters.");
  } if (isNaN(passwordLength)) {
    alert("Must input a number from 8-128.");
    var passwordLength = prompt("How long would you like your password to be? Must be 8-128 characters.");
  }

  //var confirms for chosen criteria.
  var lowercase = confirm("Would you like to use Lower Case characters?");
  console.log(lowercase);

  var uppercase = confirm("Would you like to use Upper Case characters?");
  console.log(uppercase);

  var numeric = confirm("Would you like to use Numeric characters?")
  console.log(numeric);

  var specialSymbols = confirm("Would you like to use Special characters?");
  console.log(specialSymbols);

  //While statement ensures atleast one criteria was chosen.
  while (lowercase == false && uppercase == false && numeric == false && specialSymbols == false) {
    alert("Please select atleast one criteria.");
    var lowercase = confirm("Would you like to use Lower Case characters?");
    var uppercase = confirm("Would you like to use Upper Case characters?");
    var numeric = confirm("Would you like to use Numeric characters?");
    var specialSymbols = confirm("Would you like to use Special characters?");
  }

  var pwordcrit = []
  var pwordindex = 0;

// if statements that tell what criteria to pull
  if (lowercase) {
    pwordcrit = pwordcrit.concat(lcase)
  }

  if (uppercase) {
    pwordcrit = pwordcrit.concat(ucase)
  }

  if (numeric) {
    pwordcrit = pwordcrit.concat(numbers)
  }

  if (specialSymbols) {
    pwordcrit = pwordcrit.concat(specSymbols)
  }

// for loop determines which criteria to pull
  for (let i = pwordindex; i < passwordLength; i++) {
    pwordcrit.push(
      pwordcrit[Math.floor(Math.random() * pwordindex)]
    );

  }

  var password = "";

  // for loop for choosing the number of characters to pull.
  for (let i = 0; i < pwordcrit.length; i++) {
    var passwordLength = pwordcrit[i];
    password +=
      passwordLength[Math.floor(Math.random() * passwordLength.length)
      ];
  }

  return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




