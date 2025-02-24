const contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullName": function () {
        return "Ash Springs"
    }
}

let ashSpringsFullName = contact.fullName()
console.log(ashSpringsFullName)

const user1 = {
    "name": "Usuario",
    "lastName": "Apellido",
    "age": 90,
    "printName": function () {
        console.log(`${this.name} ${this.lastName}`);
    }
}

user1.printName();

console.log(typeof(console))


const number = 5.6
console.log(Math.floor(number));
console.log(Math.round(number));
console.log(Math.ceil(number));

console.log(Math.abs("-56"));
console.log(Math.PI);

console.log(user1.name.toUpperCase());
console.log(user1.name.toLowerCase());

function Person(name, lastName, age, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
}

const person1 = new Person("Luis", "Miguel", 56);
const person2 = new Person("Katy", "Perry", 47);
const person3 = new Person("Katy");
console.log(person1);
console.log(person2.lastName);
person3.lastName = "Salazar"
console.log(person3);
console.log(person4);