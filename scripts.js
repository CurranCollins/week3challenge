

// for (var i = 0; i <= passwordlength; i++) {
//     var randomnumber = Math.floor(Math.random() * passwordText.length);
//     generateBtn += passwordText.substring(randomnumber, randomnumber +1);
// }

const criteria = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specialSymbols: "!@#$%^&*()?><",
};

export const generatePassword = (length, options = {}) => {
  const optionsKeysLength = criteria.keys(options).length;

  if (optionsKeysLength === 0) {
    throw new error("Not enough options");
  }

  if (optionsKeysLength > length) {
    throw new error("Password too short");
  }

  const password = [];
  let characters = "";

  for (const property in options) {
    characters += criteria[property];
    password.push(randomChar(criteria[property]));
  }

  return shuffleArray(password).join("");
};

const randomChar = (string) =>
string[Math.floor(Math.random() * string.length)];
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);