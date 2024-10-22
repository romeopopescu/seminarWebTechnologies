//Class declaration, constructors, accessors methods

class Person {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    //getter
    get personDetails() {
        return `${this.first_name}, ${this.last_name}, Age: ${this.age}`;
    }

    //setter
    set changeAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
        else {
            console.log('Wrong age');
        }
    }
}


let p1 = new Person("John", "Doe", 25);
console.log(p1.personDetails);

p1.changeAge = 26;
console.log(p1.personDetails);

//Create a new class Car: brand, model, year + getter/setter

// class Car {
//     constructor(car_brand, car_model, year) {
//         this.car_brand = car_brand;
//         this.car_model = car_model;
//         this.year = year;
//     }

//     get carDetails() {
//         return `${this.car_brand}, ${this.car_model} Year of creation: ${this.year}`;
//     }

//     get carBrand() {
//         return `${this.car_brand}`;
//     }

//     get carModel() {
//         return `${this.car_model}`;
//     }

//     get carYear() {
//         return `${this.year}`;
//     }

//     set changeBrand(newBrand) {
//         this.car_brand = newBrand;
//     }

//     set changeYear(newYear) {
//         const currentYear = new Date().getFullYear();
//         if (newYear <= currentYear) {
//             this.year = newYear;
//         }
//         else {
//             console.log('Invalid year');
//         }
//     }
// }

// c1 = new Car('BMW', 'X5', 2002);
// console.log(c1.carDetails);

// c1.changeYear = 2025;
// console.log(c1.carDetails);

//Inheritance --> using "extends"

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

let d1 = new Dog("Rex", "Mixed");
d1.speak();

//class Car & Truck which Inherits class vehicle

class Vehicle {
    constructor(brand, model, year, enginePower) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.enginePower = enginePower;
    }

    info() {
        return `${this.brand} ${this.model} is made in ${this.year} and has a total of ${this.enginePower} kw`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, enginePower, no_seats, type) {
        super(brand, model, year, enginePower);
        this.no_seats = no_seats;
        this.type = type;
    }

    info() {
        return `${super.info()}. It's a ${this.type} with ${this.no_seats} seats`;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, year, enginePower, capacity) {
        super(brand, model, year, enginePower);
        this.capacity = capacity;
    }

    info() {
        return `${super.info()} and has a capacity of ${this.capacity} tons`;
    }
}

c1 = new Car('dacia', 'logan', 2004, 500, 5, 'sedan');
console.log(c1.info());
console.log('');

t1 = new Truck('optimus', 'prime', 1969, 1000, 100);
console.log(t1.info());

//Node.js & http requests



