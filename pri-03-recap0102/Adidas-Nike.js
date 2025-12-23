class Adidas {
  constructor(name) {
    this.name = name;
    this.merkmal = "3 Streifen";
  }

  zeigeMerkmal() {
    console.log(`Adidas ${this.name} hat ${this.merkmal}.`);
  }
}

const adi = new Adidas("Original");
adi.zeigeMerkmal();  // Adidas Original hat 3 Streifen.
console.log(adi);    // Adidas {name: "Original", merkmal: "3 Streifen"}


class Sneaker extends Adidas {
    /* constructor(name, farbe = "weiß") { */  // ← DEFAULT
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe || "unbekannt";  // ← Fallback ohne Default
    this.typ = "Sneaker";
  }

  beschreibe() {
    console.log(`Ein ${this.farbe}er Adidas ${this.typ} namens ${this.name}`);
  }
  // Option 3: defensive Methode mit ternary operator
  /* beschreibe() {
    const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
    console.log(`Ein ${farbeText} ${this.typ}: ${this.name}`);
  } */
}

const predator = new Sneaker("Predator");  // nur name als Argument ... 
predator.beschreibe();     // Ein unbekannter Sneaker namens Predator
predator.zeigeMerkmal();   // "Predator hat 3 Streifen."

const predatorSchwarz = new Sneaker("Predator", "schwarz");
predatorSchwarz.beschreibe();  // Ein schwarzer Sneaker namens Predator


class Nike {
  constructor(name) {
    this.name = name;
    this.motto = "Just do it!";
  }

  zeigeMotto() {
    console.log(`Nike ${this.name}'s Motto is: "${this.motto}"`);
  }
}

class NikeSneaker extends Nike {  // ← NEUER Name!
  constructor(name, farbe) {
    super(name);
    this.farbe = farbe || "unbekannt";
    this.typ = "Sneaker";
  }

  beschreibe() {
    const farbeText = this.farbe ? `${this.farbe}er` : "unbekannter";
    console.log(`Ein ${farbeText} Nike ${this.typ}: ${this.name}`);
  }
}

const nikeAir = new NikeSneaker("Air Max", "weiß");
nikeAir.beschreibe();            // "Ein weißer Nike Sneaker: Air Max"
nikeAir.zeigeMotto();            // "Nike Air Max: Just do it!"


// alle Ausgaben
/* 
Adidas Original hat 3 Streifen.
Adidas { name: 'Original', merkmal: '3 Streifen' }
Ein unbekannter Adidas Sneaker namens Predator
Adidas Predator hat 3 Streifen.
Ein schwarzer Adidas Sneaker namens Predator
Ein weißer Nike Sneaker: Air Max
Nike Air Max's Motto is: "Just do it!"
*/