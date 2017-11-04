function* shopping() {
    const stuffFromStore = yield 'cash';

    const cleanClothes = yield  'laundry';

    return [stuffFromStore, cleanClothes];
}

const gen = shopping();
console.log(gen.next());
console.log(gen.next('groceries'));
console.log(gen.next('clean clothes'));


//
console.log('------');
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const genColors = colors();
console.log(genColors.next());
console.log(genColors.next());
console.log(genColors.next());
console.log(genColors.next());

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);

///
console.log('------');

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const  engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}

console.log(names);

//
console.log('-----');

class Comment {

    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        // map for foreach will not work for this
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

console.log(tree);
console.log('-----');
for (let content of tree) {
    console.log(content);
}