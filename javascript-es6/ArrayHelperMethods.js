// Every, some

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];
console.log(
    computers.every(function (computer) {
        console.log(computer.name);
      return computer.ram > 16;
    })
);
console.log(
    computers.some(function (computer) {
        console.log(computer.name);
        return computer.ram > 16;
    })
);

function Field(value) {
    this.value = value;
}
Field.prototype.validate = function() {
  return this.value.length > 0;
};
var username = new Field("2cool");
var password = new Field("my_password");
var dob = new Field("my_password");
console.log(username.validate() && password.validate());
var fields = [username, password, dob];

// Reduce
var numbers = [ 10, 20, 30 ];
var sum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log(sum);
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];
var rams = computers.reduce(function (previous, computer) {
    previous.push(computer.ram);
    return previous;
}, []);
console.log(rams);

function balancedParens(s) {
    return s.split("").reduce(function (previous, c) {
        if (previous < 0) return previous;
        if (c === "{") return ++previous;
        if (c === "}") return --previous;
        return previous;
    }, 0);
}
console.log(balancedParens("{}{}{}{}{}"));