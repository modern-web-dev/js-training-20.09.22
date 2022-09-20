// function Person(firstName, lastName, age) {
//     // this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // this.showWhoIAm = function () {
//     //     return `My name is ${this['$first-name']} ${this.lastName}, I am ${this.age}`;
//     // }
//     // return this;
// }
//
//
// Person.prototype.showWhoIAm = function () {
//     return `My name is ${this['$first-name']} ${this.lastName}, I am ${this.age}`;
// }

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    showWhoIAm() {
        return `My name is ${this['$first-name']} ${this.lastName}, I am ${this.age}`;
    }
}

const myNumberArray = [12, 14];

// console.log(myNumberArray[0]);

const nameValue: string | () => string  =  () => 'dfdsf';

function add () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var value = new BigDecimal("12");
var newValue = value.add(BigDecimal.ZERO);

// function add (a, b, c) {
//     console.log(arguments.length);
// }

console.log(add(1, 5, 5, 5, 6));

// const person = new Person('fds', 'fds', 45)
// // person.showWhoIAm();
// console.log(person.showWhoIAm());


// const marek = new Person('Marek', 'Matczak', 43);
// const john = new Person('John', 'Example', 30);
let person = {
    '$first-name': 'John',
    lastName: 'Example',
    age: 30,
    dateOfBirth: new Date(),
    retired: true,
    address: {
        zipCode: 0
    },
    showWhoIAm() {
        return `My name is ${this['$first-name']} ${this.lastName}, I am ${this.age}`;
    }
};
// person = {...person, age: 45};
// console.log(person.showWhoIAm());

// console.log(person.showWhoIAm());
// person.address = undefined;
// delete person.address;


// console.log(Object.keys(person));
// falsy values in JS: false, '', NaN, 0, null, undefined
// truthy values in JS: [], {}

// plain old JS -> ECMA2015 (ES6) -> ECMA2016...ECMA2022 -> ES.NEXT
// const zipCode = person?.address?.zipCode ?? 'zipCode not defined';
// console.log(zipCode);
// if (person && person.address && person.address.zipCode) {
//     console.log(person.address.zipCode);
// }


// const multiply = function (a, b) { // function expression
//     return a * b;
// };
//
// console.log(add(5, 7));
// console.log(multiply(5, 7));
//
// function add(a, b) { // function declaration
//     return a + b;
// }

