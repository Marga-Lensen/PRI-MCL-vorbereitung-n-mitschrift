Perfekt! Lass uns **Adidas direkt** instanzieren und testen, was bei **Sneaker ohne farbe** passiert.

## Direkte Adidas-Instanz (Fabrik-Produkt)

```js
const adi = new Adidas("Adidas Original");
adi.zeigeMerkmal();  // "Adidas Original hat 3 Streifen."
console.log(adi);    // {name: "Adidas Original", merkmal: "3 Streifen"}
```

## Sneaker ohne farbe → ERROR bei Ausgabe (Methode beschreibe())

```js
const fehlerSneaker = new Sneaker("Predator");  
fehlerSneaker.beschreibe()
// ❌ FEHLER!
// TypeError: Cannot read properties of undefined (reading 'farbe')
```

**Warum?** Methode beschreibe() will this.farbe aufrufen, aber farbe wurde nicht als Argument mitgegeben

## Fix: Default-Parameter oder optionale farbe

```js
class Sneaker extends Adidas {
    /* constructor(name, farbe = "weiß") { */  // ← DEFAULT setzen - schlechte Lösung
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe || "unbekannt";  // ← Fallback ohne Default
    this.typ = "Sneaker";
  }

  beschreibe() {
    console.log(`Ein ${this.farbe}er ${this.typ} namens ${this.name}`);
  }
}
```

> Alternativ: Methode anpassen mit optionalen Eigenschaften:

```javascript
beschreibe() {
  const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
  console.log(`Ein ${farbeText} ${this.typ}: ${this.name}`);
}
```


```js
const predator = new Sneaker("Predator");     
// Option 1: im Constructor Wert eingeben, z.B. farbe = "weiß" (default)
// Option 2: fallback bei Eigenschaft: this.farbe = farbe || "unbekannt";  
predator.beschreibe();     // "Ein unbekannter Sneaker namens Predator"
predator.zeigeMerkmal();   // "Predator hat 3 Streifen."

const predatorSchwarz = new Sneaker("Predator", "schwarz");
predatorSchwarz.beschreibe();  // "Ein schwarzer Sneaker namens Predator"
```

**Fazit**: 
- `new Adidas("name")` → **läuft immer** (1 Parameter)
- `new Sneaker("name")` → **läuft mit Default** oder **ERROR ohne**[1]
- `super(name)` → **garantiert Vererbung**![2]

[1](https://www.w3schools.com/js/js_class_inheritance.asp)
[2](https://www.perplexity.ai/search/cfc9d22e-96dc-404e-8252-5b510b6d2f95)

---
##  Sneaker von beiden Marken - Konflikt

**Perfekt!** Nike mit Motto + Sneaker-Konflikt ist **top Unterrichtsstoff**!

## Problem: Class-Konflikt in einer Datei

```js
// ❌ KONFLIKT! 
class Sneaker extends Adidas { ... }  // Sneaker = Adidas-Kind
class Sneaker extends Nike { ... }    // Sneaker überschreibt! Letztes gewinnt
```

**Ja, letztes Statement gilt** – `Sneaker` wird Nike-Kind![1]

## Lösung 1: Separate Klassen (empfohlen)

```js
class Nike {
  constructor(name) {
    this.name = name;
    this.motto = "Just do it";
  }

  zeigeMotto() {
    console.log(`${this.name}: ${this.motto}`);
  }
}

class NikeSneaker extends Nike {  // ← NEUER Name!
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe;
    this.typ = "Sneaker";
  }

  beschreibe() {
    const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
    console.log(`Ein ${farbeText} ${this.typ}: ${this.name}`);
  }
}
```

## Vollständiges Beispiel (beide Marken)

```js
// ADIDAS
class Adidas {
  constructor(name) {
    this.name = name;
    this.merkmal = "3 Streifen";
  }
  zeigeMerkmal() {
    console.log(`${this.name} hat ${this.merkmal}.`);
  }
}

class AdidasSneaker extends Adidas {
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe;
    this.typ = "Sneaker";
  }
  beschreibe() {
    const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
    console.log(`Ein ${farbeText} ${this.typ}: ${this.name}`);
  }
}

// NIKE  
class Nike {
  constructor(name) {
    this.name = name;
    this.motto = "Just do it";
  }
  zeigeMotto() {
    console.log(`${this.name}'s Motto is: ${this.motto}`);
  }
}

class NikeSneaker extends Nike {
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe;
    this.typ = "Sneaker";
  }
  beschreibe() {
    const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
    console.log(`Ein ${farbeText} ${this.typ}: ${this.name}`);
  }
}
```

## Nutzung: Beide Marken!

```js
const adidasPredator = new AdidasSneaker("Predator", "schwarz");
adidasPredator.beschreibe();     // "Ein schwarzer Sneaker: Predator"
adidasPredator.zeigeMerkmal();   // "Predator hat 3 Streifen."

const nikeAir = new NikeSneaker("Air Max", "weiß");
nikeAir.beschreibe();            // "Ein weißer Sneaker: Air Max"
nikeAir.zeigeMotto();            // "Air Max: Just do it"
```

**Lern-Effekt**: `let sneaker = class Sneaker` geht **nicht** – Klassen sind **block-scoped wie const**! **Separate Namen** = sauberste Lösung für Unterricht.[2][1]

[1](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)