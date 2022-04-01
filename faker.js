const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
const randomPassword = faker.internet.password(); // KVH{f9>o

console.log(
    'Name: '+randomName+'\n'+'Email: '+randomEmail+'\n'+'Phone: '+ randomPhoneNumber+'\n'+'Password: '+randomPassword
    );

module.exports = { randomName, randomEmail, randomPhoneNumber, randomPassword };
