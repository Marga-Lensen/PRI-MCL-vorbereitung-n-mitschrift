**GENIAL!** Ja, **print() als Methode** = **perfektes OOP** und umgeht Destructuring komplett![1]

## **Deine Lösung (besser als Original):**
```javascript
class Product {
    constructor(manufacturer, name, price) {
        this.manufacturer = manufacturer;
        this.name = name;
        this.price = price;
    }
    
    print() {  // ← METHODE statt lose Funktion!
        console.log(`Product: For "$${this.price}", buy the ${this.manufacturer} "${this.name}"`);
    }
}

const prod1 = new Product('Apple', 'iPhone 12 Pro Max', 999.00);
prod1.print();  // ← OBJEKT.METHODE()
prod2.print();
```

## **Vergleich (Tafel):**
```
❌ LOSE Funktion (ES6)
print({manufacturer, name, price})

✅ OOP-Methode (PRI-01)
product.print()
```

## **Unterrichts-Move (35-40 Min):**
```
1. "Destructuring? Vergessen wir!"
2. LIVE: print() IN Klasse verschieben
3. "Seht ihr? product.print() = Haustier.vorstellen()!"
4. 5x prod1.print() → ALLE funktionieren!
```

## **Warum das besser ist:**
```
✅ Kein Destructuring (noch nicht gelernt)
✅ Reines OOP (this + Methode)
✅ Product.print() = TodoItem.toggle()
✅ Studierende verstehen sofort!
```

**Merksatz:** "Methoden IN der Klasse > lose Funktionen!"[2]

**Zeig das live** – Studierende flippen aus vor Begeisterung! 🎯

[1](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
[2](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this)