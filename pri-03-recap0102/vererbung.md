Dein Code-Beispiel ist perfekt für den OOP-Recap – Marke als Fabrik/Bauplan, Produkte als Kinder.[1]

## Elternklasse Adidas (Fabrik mit 3 Streifen)

```js
class Adidas {
  constructor(name) {
    this.name = name;
    this.merkmal = "3 Streifen";
  }

  zeigeMerkmal() {
    console.log(`${this.name} hat ${this.merkmal}.`);
  }
}
```

Adidas ist der Bauplan für ALLE Adidas-Produkte mit dem gemeinsamen Merkmal. Jedes Produkt erbt automatisch die 3 Streifen.[2]

## Kindklasse Sneaker (erbt von Adidas)

```js
class Sneaker extends Adidas {
  constructor(name, farbe) {
    super(name);  // ruft Adidas-Constructor → setzt name + merkmal
    this.farbe = farbe;
    this.typ = "Sneaker";
  }

  beschreibe() {
    console.log(`Ein ${this.farbe}er ${this.typ}: ${this.name}`);
  }
}
```

## Weitere Kinder: Tricot, Tasche

```js
class Tricot extends Adidas {
  constructor(name, groesse) {
    super(name);
    this.groesse = groesse;
    this.typ = "Tricot";
  }
}

class Tasche extends Adidas {
  constructor(name, material) {
    super(name);
    this.material = material;
    this.typ = "Tasche";
  }
}
```

**super(name)** setzt **immer** `this.name` + `this.merkmal = "3 Streifen"` – unabhängig von zusätzlichen Kindklassen-Parametern.[3]

## Nutzung: Produkte aus der Fabrik

```js
const adidasSneaker = new Sneaker("Predator", "schwarz");
adidasSneaker.beschreibe();     // Ein schwarzer Sneaker: Predator
adidasSneaker.zeigeMerkmal();   // Predator hat 3 Streifen.

const adidasTricot = new Tricot("Tiro", "M");
adidasTricot.zeigeMerkmal();    // Tiro hat 3 Streifen.

const adidasTasche = new Tasche("Teamtasche", "Polyester");
adidasTasche.zeigeMerkmal();    // Teamtasche hat 3 Streifen.
```

**Zusätzliche Parameter (farbe, groesse, material) sind optional** – `super(name)` reicht immer für die Vererbung! Perfekt wie Tier→Hund/Fisch: Alle Produkte haben automatisch das Marken-Merkmal.[4][2]

[1](https://javascript.info/class-inheritance)
[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
[3](https://www.perplexity.ai/search/cfc9d22e-96dc-404e-8252-5b510b6d2f95)
[4](https://www.perplexity.ai/search/8b41b5ac-8b71-4cfc-8ed9-c4bd6e898c1f)