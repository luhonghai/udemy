const add = function(a, b) {
    return a + b;
}

const newAdd = (a, b) => {
    return a + b;
}

const shortAdd = (a, b) => a + b;

console.log(add(1,2));
console.log(newAdd(1,2));
console.log(shortAdd(1,2));

// Single argument
const double = number => 2 * number;
console.log(double(8));

const numbers = [1,2,3];
console.log(numbers.map(number => 2 * number));

const team = {
    members: ['Jason', 'Alex', 'Eric'],
    teamName: 'Android',
    teamSummary: function() {
       return this.members.map(member => `${member} is on team ${this.teamName}`);
    }
};

console.log(team.teamSummary());