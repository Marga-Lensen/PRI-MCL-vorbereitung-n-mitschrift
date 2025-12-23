export {}

interface User { age: number; role: string; name: string; }

let users: User[] = [  // let to show mutation clearly
    { age: 29, role: "user", name: 'Martina' },
    { age: 34, role: "user", name: 'John' },
    { age: 24, role: "user", name: 'Amy' },
    { age: 29, role: "admin", name: 'Mohammad' },
    { age: 41, role: "user", name: 'Sari' },
    { age: 24, role: "admin", name: 'YoungAdmin' }, // Moves to front with Mohammad
    { age: 40, role: "user", name: 'OldUser' },
];
/* console.log("original array", users);*/
console.log("1️⃣ START:", users.map(u => u.name));  

users.sort((a: User, b: User) => {
    if (a.role === 'admin') return -1;
    if (b.role === 'admin') return 1;
    return a.age - b.age;
});

console.log("2️⃣ MUTATED:", users.map(u => u.name));  
// 2️⃣ MUTATED: [ "Mohammad", "Amy", "Martina", "John", "Sari" ]
/* console.log("sorted array", users); */  // correct; MUTATED
console.log("sorted array 1.pos.", users[0]);  // correct;
 /* sorted array 1.pos. {
  age: 29,
  role: "admin",
  name: "Mohammad",
} */

console.log("3️⃣ SAME REF:", users[0].name);  // 'Mohammad' - proves mutation!

// PROOF: Reference unchanged
console.log("4️⃣ SAME OBJECT:", users === users);  // true


/* log both name and role  */
console.log("2 admins first:", users.map(user => ({
    name: user.name,
    role: user.role
})));


/* log full info */
console.log("FULL INFO:", users.map(user => 
    `${user.role === 'admin' ? '😎' : '😖'} ${user.name} (${user.age})`
));
/* FULL INFO: [ "😎 Mohammad (29)", "😖 Amy (24)", "😖 Martina (29)",
  "😖 John (34)", "😖 Sari (41)"
] */
