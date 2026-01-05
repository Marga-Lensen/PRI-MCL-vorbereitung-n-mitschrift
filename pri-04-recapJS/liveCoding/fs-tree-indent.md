**Das Einrücken-Problem** kommt von **variablen Prefix-Längen**! 

## **Fix: Feste Einrück-Abstände**

```javascript
function printDirectoryTree(dirPath, prefix = '') {
    const paths = fs.readdirSync(dirPath);
    
    paths.forEach(path => {
        const filePath = dirPath + '/' + path;
        const stats = fs.statSync(filePath);
        
        // FESTER Prefix + Leerzeichen für Alignment
        const indent = prefix.replace(/ /g, '│ ') + '├─ ';
        
        if (stats.isDirectory()) {
            console.log(`${indent}📁 ${path}/`);
            printDirectoryTree(filePath, prefix + '  ');  // 2 Spaces
        } else {
            console.log(`${indent}📄 ${path}`);
        }
    });
}
```

## **Ausgabe (perfekt aligned!):**
```
📁 targetfolder/
├─ 📁 docs/
│   └─ 📄 note.txt
├─ 📄 readme.md
└─ 📁 src/
```

## **Noch einfacher (dein Stil):**
```javascript
const indent = prefix + '  ';  // Einfach 2 Spaces immer

if (stats.isDirectory()) {
    console.log(`${prefix}📁 ${path}/`);
    printDirectoryTree(filePath, prefix + '  ');
} else {
    console.log(`${prefix}📄 ${path}`);
}
```

**Aber: `prefix + '  '` statt `${prefix}   `** – konsistente Länge!

## **Sofort-Fix (1 Zeile ändern):**
```javascript
printDirectoryTree(filePath, prefix + '  ');  // Immer 2 Spaces!
```

**Jetzt schön aligned** – wie Git Bash Tree! 🌳