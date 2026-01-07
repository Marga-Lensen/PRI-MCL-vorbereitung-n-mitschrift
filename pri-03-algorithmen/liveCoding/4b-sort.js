const arr = [9,1,5,2,0,4,6,8,3,7];

// Sort the array in ascending order
for (let i = 0; i < arr.length; i++) {          // Loop through the array
    
    for (let j = 0; j < arr.length-1; j++) {      // ❕inner loop!!!

        if (arr[j] > arr[j+1]) {                  // ❕ compare next neighbours in INNER loop j !!!! 
        // If the current element is larger than the next element ... swap (if not, go on to the next pair)
            let temp = arr[j];                  
            arr[j] = arr[j+1];                  // Swap the elements and continue with the larger one
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
users.sort((a, b) => a.age - b.age);   // oneliner 

console.log("sorted by age :",users.map(user => user.name)); // um das Ergebnis ordentlich auszugeben muss man mappen über users
/* [ 'Amy', 'Martina', 'Mohammad', 'John', 'Sari' ] */

// By age, but admins first
users.sort((a, b) => {
    if (a.role === 'admin') return -1;
    if (b.role === 'admin') return 1;

    return a.age - b.age;
});


console.log("sorted by age & admin first: ", users.map(user => user.name));


