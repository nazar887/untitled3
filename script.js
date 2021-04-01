console.log(document);

const DocId = document.getElementById("content");
console.log(DocId);

const rules = document.getElementById('rules');
console.log(rules)

DocId.innerHTML = '<hr> Our content wil be here';
DocId.style.color = 'red';
rules.style.color = 'blue';

const CL= document.getElementsByClassName('fc bp');

console.log(CL);

//18-19 чомусь вибиває як помилку та не хоче задати колір (побавився з тим хвилин 15-20 так і не зміг розібратись)??
//const C = document.getElementsByClassName('fc_rules');
//C.style.color = 'red';

// завдання 2


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
//завдання 2 все працює!))

//for (let i = 0; i < users.length; i++){
    //const usersDiv = document.createElement('div');
    //usersDiv.style.margin = '15px';
    //usersDiv.innerHTML = `Hello my name is ${users[i].name} <br> i am ${users[i].age} years old <br> my status is ${users[i].status} <br> my address is ${users[i].address.city} ${users[i].address.country} ${users[i].address.street} ${users[i].address.houseNumber}`;
    //document.body.appendChild(usersDiv);
//}

//завдання 3

for (let i = 0; i < users.length; i++) {
    const usersDiv = document.createElement('div');
    usersDiv.style.margin = '15px';
    usersDiv.innerHTML = `Hello my name is ${users[i].name} <br> i am ${users[i].age} years old <br> my status is ${users[i].status}`;
    document.body.appendChild(usersDiv);
    const add = document.createElement('div');
    add.style.color = 'red';
    add.innerHTML = `My address is ${users[i].address.city} ${users[i].address.country} ${users[i].address.street} ${users[i].address.houseNumber}`;
    document.body.appendChild(add);
}

//завдання 3 також працює відмінно))