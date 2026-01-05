**Ah, verstehe!** Du meinst **Parameter Destructuring**:

## **Das Problem:**
```javascript
// ARGUMENT: komplettes Object
printTree(myTree);  

// PARAMETER: nur die PROPERTIES (destructuring)
function printTree({name, children}, prefix = '') {
    // name und children sind direkt verfügbar!
}
```

## **Vergleich:**
```
✅ ARGUMENT = myTree (komplettes Object)
✅ PARAMETER = {name, children} (nur Properties)

printTree(myTree)  →  function printTree({name, children}, prefix)
         ↓                    ↓
    {name: "root",         name = "root"
     children: [...]}      children = [...]
```

## **Dein Code wird so:**
```javascript
function printTree({name, children = []}, prefix = '') {  // Destructuring!
    console.log(`${prefix}📁 ${name}`);                   // name direkt!
    
    if (!children.length) return;  // children direkt verfügbar!
    
    children.forEach(child => printTree(child, prefix + '  '));
}
```

**Das ist viel eleganter** – `name` und `children` heißen **a und b** (die Properties), während `myTree` das komplette **Object** ist!

**Super Beobachtung** – das zeigt, dass du Destructuring **perfekt verstehst**! 🎯