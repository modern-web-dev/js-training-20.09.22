// Model, View, View Model(Component) (Model)

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class EmployeeComponent {
    employee

    constructor(document) {
        this.doc = document;
        const form = document.querySelector('form');
        console.log(this);
        form.addEventListener('submit', handleSubmit.bind(this)); // JavaScript ABC => apply, bind, call
        // form.addEventListener('submit',  (event) => {
        //     event.preventDefault();
        //     console.log(this.getCurrentEmployee());
        // });
    }

    initializeWith(employee) {
        this.employee = employee;
        this.updateView();
    }

    getCurrentEmployee() {
        const firstNameInput = this.doc.querySelector('#firstName');
        const lastNameInput = this.doc.querySelector('#lastName');

        return new Employee(firstNameInput.value, lastNameInput.value)
    }

    updateView() {
        const firstNameInput = this.doc.querySelector('#firstName');
        firstNameInput.value = this.employee.firstName;
        const lastNameInput = this.doc.querySelector('#lastName');
        lastNameInput.value = this.employee.lastName;
    }
}

function handleSubmit (event) {
    event.preventDefault();
    console.log(this.getCurrentEmployee());
}

const component = new EmployeeComponent(document);
component.initializeWith(new Employee('John', 'Smith'));
