export {};  // Makes it a module for proper typing

const arr: number[] = [9,1,5,2,0,4,6,8,3,7];

interface User {  // Type for objects
    age: number;
    role: string;
    name: string;
}

const users: User[] = [  // Typed array
    { age: 29, role: "user", name: 'Martina' },
    { age: 34, role: "user", name: 'John' },
    { age: 24, role: "user", name: 'Amy' },
    { age: 29, role: "admin", name: 'Mohammad' },
    { age: 41, role: "user", name: 'Sari' }
];

// By age
users.sort((a, b) => a.age - b.age);
console.log(users.map(user => user.name));  // [ "Amy", "Martina", "Mohammad", "John", "Sari" ]

// Typed sort callback
users.sort((a: User, b: User): number => {
    if (a.role === 'admin') return -1;
    if (b.role === 'admin') return 1;
    return a.age - b.age;
});

console.log("sorted users?", users); // ✅ mutated array
console.log("sorted users? 1. pos.:", users[0]); // Mohammed

console.log("admin first:", users.map(user => user.name)); 
// admin first: [ "Mohammad", "Amy", "Martina", "John", "Sari" ]


const usersWithTwoAdmins: User[] = [
    { age: 40, role: "user", name: 'OldUser' },
    { age: 29, role: "admin", name: 'Mohammad' },  // Stays near front
    { age: 24, role: "admin", name: 'YoungAdmin' }, // Moves to front with Mohammad
    { age: 34, role: "user", name: 'John' }
];

usersWithTwoAdmins.sort((a: User, b: User) => {
    if (a.role === 'admin') return -1;  // a is admin → a before anything
    if (b.role === 'admin') return 1;   // b is admin → b before non-admin a
    return a.age - b.age;  // Both non-admin → sort by age
});

console.log("2 admins first:", usersWithTwoAdmins.map(user => user.name)); 
// Result: ['YoungAdmin', 'Mohammad', 'John', 'OldUser']

console.log("2 admins first:", usersWithTwoAdmins.map(user => user.name)); 

/* log both name and role */

console.log("name & role:", usersWithTwoAdmins.map(user => ({
    name: user.name,
    role: user.role
})));

/* template literals */
console.log("2 admins first name & role:", usersWithTwoAdmins.map(user => 
    `${user.name} (${user.role})`
));
console.log("2 admins w ternary:", usersWithTwoAdmins.map(user => 
    `${user.role === 'admin' ? '😎 ' : '😖'}${user.name}`
));


/* advanced, with destructuring */
console.log("name & role w destructuring:", usersWithTwoAdmins.map(({name, role}) => 
    `${name} (${role})`
));


console.log("FULL INFO:", usersWithTwoAdmins.map(user => 
    `${user.role === 'admin' ? '😎' : '😖'} ${user.name} (${user.age})`
));
// ['😎 YoungAdmin (24)', '😎 Mohammad (29)', '😖 John (34)', '😖 OldUser (40)']
