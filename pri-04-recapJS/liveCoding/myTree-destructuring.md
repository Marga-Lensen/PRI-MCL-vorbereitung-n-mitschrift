**Genau!** Du denkst an **Object Destructuring** für die Funktion – super Idee für fortgeschrittene Schüler!

## **Aktueller Code (einfach):**
```javascript
function printTree(node, prefix = '') {
    console.log(`${prefix}📁 ${node.name}`);  // node.name
    if (!node.children) return;
    node.children.forEach(child => printTree(child, prefix + '  '));
}
```

## **Mit Destructuring (fortgeschritten):**
```javascript
function printTree({name, children = []}, prefix = '') {  // ← Destructuring!
    console.log(`${prefix}📁 ${name}`);                   // name direkt verfügbar!
    
    children.forEach(child => printTree(child, prefix + '  '));
}
```

## **Vorteile Destructuring:**
- `node.name` → nur `name`
- `node.children` → nur `children` 
- `children = []` → automatischer Fallback!

## **Für deinen Unterricht:**


**Live-Coding Demo (2 Stufen):**

1️⃣ **Einfach** (Anfänger):
```javascript
function printTree(node, prefix = '') {
    console.log(`${prefix}📁 ${node.name}`);
    if (!node.children) return;
}
```
2️⃣ **Fortgeschritten** :
```javascript
function printTree({name, children = []}, prefix = '') {}  // destructuring
```

**Test-Daten bleiben identisch** – funktioniert mit BEIDEN Versionen


