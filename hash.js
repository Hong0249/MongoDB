const bcrypt = require("bcryptjs")
const faker = require("./faker.js")
//const prompt = require('prompt-sync')();
//const password = prompt('Password?');
const password = faker.password;
console.log('Entered password :',password);
const saltRounds = 10;

bcrypt.genSaltSync(saltRounds, function (saltError, salt) {
   if (saltError) {
     throw saltError
   } else {
     bcrypt.hash(password, salt, function (hashError, hash) {
       if (hashError) {
         throw hashError
       } else {
         console.log('This is hash',hash);
         //return hash
         //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
       }
     })
   }
 })
 
const hashpass = bcrypt.hashSync(password, saltRounds, function (hashError, hash) {
   if (hashError) {
     throw hashError
   } else {
     console.log('This is hash',hash);
   }
  });

console.log('Hash code generated: ', hashpass);

module.exports = {hashpass};