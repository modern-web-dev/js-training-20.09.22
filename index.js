class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const marek = new Person('Marek', 'Matczak', 43);
const john = new Person('John', 'Example', 30);
let person = {
    '$first-name': 'John',
    lastName: 'Example',
    age: 30,
    dateOfBirth: new Date(),
    retired: true,
    address: {
        zipCode: 0
    }
};

// person.address = undefined;
// delete person.address;


// console.log(Object.keys(person));
// falsy values in JS: false, '', NaN, 0, null, undefined
// truthy values in JS: [], {}

// plain old JS -> ECMA2015 (ES6) -> ECMA2016...ECMA2022 -> ES.NEXT
const zipCode = person?.address?.zipCode ?? 'zipCode not defined';
console.log(zipCode);
// if (person && person.address && person.address.zipCode) {
//     console.log(person.address.zipCode);
// }

