//select which criteria to include in the pword
//how long will the pword be, 8-128
//select which types, lcase, ucase, num, special charaters
//atleast one character type 
//pword matches selected criteria
//pword displayed in an alert or written on page
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var length = (>=8, <=128);
  //var lcase = ["abcdefghijklmnopqrstuvwxyz"];
  //var ucase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  //var numbers = ["1234567890"];
  //var specSymbols = ["`~!@#$%^&*()_-+=|\}{][':;/?.>,<"]
  //var pword = "";
  //var character = "";

  //  while (pword.length <= length) {
  //   entity1 = Math.ceil(lcase.length * Math.random() * Math.random());
  //   entity2 = Math.ceil(ucase.length * Math.random() * Math.random());
  //   entity3 = Math.ceil(numbers.length * Math.random() * Math.random());
  //   entity4 = Math.ceil(specSymbols.length * Math.random() * Math.random());
  //   hold = lcase.charAt(entity1);
  //   hold = pword.length % 8 == 128 ? hold.toUpperCase() : hold;
  //   character += hold;
  //   character += ucase.charAt(entity2);
  //   character += numbers.charAt(entity3);
  //   character += specSymbols.charAt(entity4);
  //   pword = character;}

  // pword = pword
  // .split("")
  // .sort(function() {
  //   return 0.5 - Math.random();
  // })
  // .join("");
  // return pword.substr(0, len);

 // }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = prompt("How long would you like your password to be? Must be 8-128.");
console.log(passwordLength);

var lowercase = confirm("Would you like to use Lower Case characters?");
console.log(lowercase);

var uppercase = confirm("Would you like to use Upper Case characters?");
console.log(uppercase);

var numeric = confirm("Would you like to use Numeric characters?")
console.log(numeric);

var specialSymbols = confirm("Would you like to use Special characters?");
console.log(specialSymbols);


var lcase = ["abcdefghijklmnopqrstuvwxyz"]
console.log(lcase);

var ucase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
console.log(ucase);

var numbers = ["1234567890"]
console.log(numbers);


var specSymbols = ["`~!@#$%^&*()_-+=|\}{][':;/?.>,<"]
//console.log(specsymbols);

//var length = (>=8, <=128);



if (lowercase == true) {
  //include var lcase
  passwordText += lcase;
}

if (uppercase == true) {
  //include var ucase
  passwordText += ucase;
}

if (numeric == true) {
  //include var numbers
  passwordText += numbers;
}

if (specialSymbols == true) {
  //include var specSymbols
  passwordText += specSymbols;
}
