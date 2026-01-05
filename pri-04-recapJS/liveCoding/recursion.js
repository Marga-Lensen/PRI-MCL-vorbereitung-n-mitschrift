// ----- 1. Classic recursion example: factorial -----

// Factorial of n is the product of all positive integers up to n
// For example, factorial of 1 is 1
// For example, factorial of 2 is 1 * 2 = 2
// For example, factorial of 3 is 1 * 2 * 3 = 6
// For example, factorial of 4 is 1 * 2 * 3 * 4 = 24
// For example, factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120

function factorial(n) {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}
console.log("factorial:");

console.log(factorial(1)) // Should print 1
console.log(factorial(2)) // Should print 2
console.log(factorial(3)) // Should print 6
console.log(factorial(4)) // Should print 24
console.log(factorial(5)) // Should print 120

// console.clear()

// ----- 2. Another classic recursion example: Fibonacci sequence -----

// The Fibonacci Sequence is a series of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number is found by adding up the two numbers before it

function fibonacci(n) {
    if (n <= 1) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(("fibonacci:"));

console.log(fibonacci(0)) // Should print 0
console.log(fibonacci(1)) // Should print 1
console.log(fibonacci(2)) // Should print 1
console.log(fibonacci(3)) // Should print 2
console.log(fibonacci(4)) // Should print 3
console.log(fibonacci(5)) // Should print 5
console.log(fibonacci(6)) // Should print 8
console.log(fibonacci(7)) // Should print 13

// console.clear()


// ----- summation examples -----

// Array-Länge zählen
function countItems(array) {
    if (array.length === 0) {     // Basis-Fall: leeres Array
        return 0;
    }
    // 1 + Rest des Arrays (ohne erstes Element)
    return 1 + countItems(array.slice(1));
}

console.log("Länge:");

console.log(countItems([]));        // 0
console.log(countItems([1]));       // 1
console.log(countItems([1,2]));     // 2
console.log(countItems([1,2,3]));   // 3

// was passiert Schritt für Schritt:
/* countItems([1,2,3])
→ 1 + countItems([2,3])        // slice(1) entfernt erstes Element
→ 1 + (1 + countItems([3]))    
→ 1 + (1 + (1 + countItems([])))
→ 1 + (1 + (1 + 0))            // Basis-Fall!
→ 3
*/
// console.clear()


// --------- Summe eines Arrays mit Slice Magic 🪄  ----------

function arraySum(numbers) {
    if (numbers.length === 0) {    // Basis-Fall: leeres Array
        return 0;
    }
    // Erstes Element + Rest rekursiv -> also das wiederholt sich stets
    return numbers[0] + arraySum(numbers.slice(1));
}

console.log("Summe:");

console.log(arraySum([1]));     // 1
console.log(arraySum([1,2]));   // 3  
console.log(arraySum([1,2,3])); // 6

// console.clear()


// --------- reverse mit Slice Magic 🪄  ----------
function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("abcd")); // dcba
console.log(reverseString("hallo")); // dcba

// console.clear()




// ---- 3. Einfacher String-Baum -----

function printTree(node, prefix = '') {
    console.log(`${prefix}📁 ${node.name}`);
    
    /* node.children.forEach(child => {
        printTree(child, prefix + '  ');
    }); ❌ crasht!!! weil file1.txt keine children hat! */

    /* REKURSION BRAUCHT IMMER EINE STOPPBEDINGUNG❗️ */

    // FIX: Prüfe ob children existiert UND Array ist
/*     if (node.children && Array.isArray(node.children)) {
        node.children.forEach(child => {
            printTree(child, prefix + '  ');
        });
    } */

    // alternative, robuste Lösung mit fallback
/*     const children = node.children || [];  // Fallback: leeres Array
    children.forEach(child => {
        printTree(child, prefix + '  ');
    }); */

    // noch kürzere fix; Einzeiler
    if (!node.children?.length) return;  // Optional Chaining (1 Zeile!)

    node.children.forEach(child => {
        printTree(child, prefix + '  ');
    })
    return node.name;  // Am Ende auch returnen
}

// Test-Daten
const myTree = {
    name: 'root',
    children: [
        { name: 'folder1', children: [{name: 'file1.txt'}] },
        { name: 'folder2', children: [] }
    ]
};

printTree(myTree);

console.log("my Tree: ", printTree(myTree));  // my Tree: root
//  printTree returnt nix, printet nur -> hier ausgabe node.name um etwas zu returnen



// ----- 4. Real-life Filesystem Tree
// Nach String-Tree: Jetzt ECHTE Dateien!

import fs from 'fs';

function printDirectoryTree(dirPath, prefix = '  ') {
    const paths = fs.readdirSync(dirPath);

    paths.forEach((path) => {
        const filePath = dirPath + "/" + path;
        const stats = fs.statSync(filePath);   // Get information about the file

        if (stats.isDirectory()) {
            console.log(` 📁 ${prefix}${path}/`);
            printDirectoryTree(filePath, `${prefix}  `);  // Rekursion
        } else {
            console.log(` 📄 ${prefix}${path}`);
        }
    });
}

// DUMMY targetfolder (vorher erstellen):
/*
mkdir targetfolder
cd targetfolder
mkdir docs src
touch readme.md index.js docs/note.txt

targetfolder/
├── docs/
│   └── note.txt
├── src/
└── readme.md

*/

console.log("=== REAL Filesystem Tree ===\n");
let toExamine = "./targetfolder";
console.log(`Directory tree of ${toExamine}:`)
printDirectoryTree(toExamine, '');


toExamine = "../liveCoding"
console.log(`Directory tree of ${toExamine}:`)
printDirectoryTree(toExamine, '');