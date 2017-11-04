class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class Toyota extends Car {

    constructor({ color, title }) {
        super({ title });
        this.color = color;
    }

    honk() {
        return 'beep';
    }
}

const car = new Car({ title: 'Car' });
console.log(car);
console.log(car.drive());

const toyota = new Toyota({ color: 'red', title: 'Toyota' });
console.log(toyota);
console.log(toyota.honk());