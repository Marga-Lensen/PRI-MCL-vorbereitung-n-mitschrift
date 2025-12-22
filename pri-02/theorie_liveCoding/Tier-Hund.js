class Tier {
  constructor(name) {
    this.name = name; // ← 1. name setzen - VERERBT (variabel)
    this.beine = 4; // ← 2. FESTER Wert setzen - VERERBT (fest)
  }
  vorstellen() {
    console.log(`${this.name} hat ${this.beine} Beine`); // diese Methode wird automatisch VERERBT und Kinder von Tier können die Methode wie ihre eigene nützen
  }
}

class Hund extends Tier {
  constructor(name) {
    console.log("Hund Konstruktor läuft");

    super(name); // ← RUFT Konstruktor von Vierbeiner auf
    // Hund vererbt hier this.name (variabler Wert) & this.beine = 4 (fester Wert)
  }
  bellen() {
    // ← EIGENE Methode
    console.log(`${this.name} bellt`);
  }
}

const bello = new Hund("Bello"); // name ist Argument für das konkrete Object
console.log("bello: ", bello); // bello:  Hund { name: 'Bello', beine: 4 }
bello.vorstellen(); // Bello hat 4 Beine
bello.bellen()  // Bello bellt

// Überschreiben
class Vogel extends Tier {
  constructor(name) {
    super(name); // Tier.constructor läuft
    this.beine = 2; // ← ÜBERSCHREIBT die 4 Beine
  }
}

const tweety = new Vogel("Tweety");
console.log(tweety.beine); // 2
tweety.vorstellen(); // "Tweety hat 2 Beine" ← ÜBERSCHRIEBEN!

/* tweety.bellen()  */ // ERROR
/* 
tweety.bellen()
       ^

TypeError: tweety.bellen is not a function
*/
