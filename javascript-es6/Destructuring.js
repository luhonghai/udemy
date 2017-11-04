var expense = {
    type: 'Business',
    amount: '$56'
};

const { type, amount } = expense;

console.log(`${type} ${amount}`);

// Argument object

var savedFiled = {
    extension: '.jpq',
    name: 'report',
    size: 14040
};

function fileSummary({ name, extension, size }) {
    return `This file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled));

// Array

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name ] = companies; // const name = companies[0];
console.log(name);
console.log(companies[0]);
const [ name1, name2, name3 ] = companies;
console.log(`${name1} ${name2} ${name3}`);

const [ name0, ...rest ] = companies;
console.log(`${name0} ${rest}`);


//
const developers = [
    { name: 'Jason', location: 'Thanh Hoa' },
    { name: 'Alex', location: 'Ha Noi' },
    { name: 'Eric', location: 'Hung Yen' }
];

const [ { location } ] = developers;

console.log(location);

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ loc ] } = Google;
console.log(loc);

//

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

const x = points.map(([ x, y ]) => {
    return { x, y }
});
console.log(x);

const numbers = [1, 2, 3];

function double(numbers) {
    const [ number, ...rest ] = numbers;
    if (!number) {
        return [];
    } else {
        return [number * 2, ...double(rest)];
    }
}

console.log(double(numbers));