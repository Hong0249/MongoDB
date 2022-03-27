const bcrypt = require("bcryptjs")
const prompt = require('prompt-sync')();

const password = prompt('Password?');
console.log('Entered password :',password);
const saltRounds = 10;

const hashpass = bcrypt.genSaltSync(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError
  } else {
    bcrypt.hash(password, salt, function (hashError, hash) {
      if (hashError) {
        throw hashError
      } else {
        console.log(hash);
        return hash
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    })
  }
})

module.exports = {hashpass};