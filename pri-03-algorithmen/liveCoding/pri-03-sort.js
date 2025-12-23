const arr = [9,1,5,2,0,4,6,8,3,7];

// Sort the array in ascending order
for (let i = 0; i < arr.length; i++) {          // Loop through the array
    // for (let j = 0; j < arr.length; j++) {      // Loop through the array again
    for (let j = 0; j < arr.length-1; j++) {      // ❕inner loop!!!
        /* if (arr[i] < arr[j]) {                   // If the current element is less than the next element              
            let temp = arr[i];                  // Swap the elements
            arr[i] = arr[j];
            arr[j] = temp;
        } */
        if (arr[j] > arr[j+1]) {                  // ❕ compare next neighbours in INNER loop j !!!!
            let temp = arr[j];                  
            arr[j] = arr[j+1];                  // Swap the elements
            arr[j+1] = temp;
        }
    }
}

console.log("arr:",arr);                               // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// The above is one of hundreds of sorting algorithms

// JavaScript has a built-in sort method
const arr2 = [9,1,5,2,0,4,6,8,3,7];
arr2.sort((a, b) => a - b);

console.log("arr2:", arr2);  // ✅ same 


// The algorithm used by .sort() is defined by the JavaScript engine
// Running this with Bun might use a different one than running it with Node
// .sort() works for all data types, not just numbers
// But we need to provide a comparison function

const users = [
    { age: 29, role: "user", name: 'Martina' },
    { age: 34, role: "user", name: 'John' },
    { age: 24, role: "user", name: 'Amy' },
    { age: 29, role: "admin", name: 'Mohammad' },
    { age: 41, role: "user", name: 'Sari' }
];

// By age
users.sort((a, b) => a.age - b.age);
console.log(users.map(user => user.name)); // [ 'Amy', 'Martina', 'Mohammad', 'John', 'Sari' ]

// By age, but admins first
users.sort((a, b) => {
    if (a.role === 'admin') return -1;
    if (b.role === 'admin') return 1;

    return a.age - b.age;
});

// TEACHER: Select the above code and copilot "In what case would it be useful to actually return 0 for a sort function callback? Does it ever matter?"

console.log(users.map(user => user.name));


