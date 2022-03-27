const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233

console.log(
    //faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
    randomName+'\n'+randomEmail+'\n'+randomPhoneNumber
    );

module.exports = { randomName, randomEmail, randomPhoneNumber };
