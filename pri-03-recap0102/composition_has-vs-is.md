**Genau!** Du denkst an **Composition** – "Söhne von verschiedenen Familien" = **HAS-A statt IS-A**.[1][2]

[wiki/Composition_over_inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

## Problem: Multiple Inheritance unmöglich

```js
// ❌ GEHT NICHT! JavaScript erlaubt nur 1 Elternklasse
class Sneaker extends Adidas, Nike { ... }  // SyntaxError!
```

## Lösung: Composition (Sneaker "hat" eine Marke)

```js
class Sneaker {
  constructor(name, farbe, marke) {
    this.name = name;
    this.farbe = farbe || "unbekannt";
    this.typ = "Sneaker";
    this.marke = marke;  // ← COMPOSITION!
  }

  beschreibe() {
    console.log(`Ein ${this.farbe}er ${this.marke.name} ${this.typ}: ${this.name}`);
  }

  zeigeMarkenmerkmal() {
    this.marke.zeigeMerkmal?.();  // ← Dynamisch!
    this.marke.zeigeMotto?.();
  }
}
```

## Nutzung: Sneaker mit JEGLICHER Marke!

```js
const adidas = new Adidas("Predator");
const nike = new Nike("Air Max");

const adidasSneaker = new Sneaker("Predator", "schwarz", adidas);
adidasSneaker.beschreibe();        // "Ein schwarzer Adidas Sneaker: Predator"
adidasSneaker.zeigeMarkenmerkmal(); // "Adidas Predator hat 3 Streifen."

const nikeSneaker = new Sneaker("Air Max", "weiß", nike);
nikeSneaker.beschreibe();           // "Ein weißer Nike Sneaker: Air Max"
nikeSneaker.zeigeMarkenmerkmal();   // "Nike Air Max's Motto is: 'Just do it!'"
```

## Dein Edge Case gelöst!

```
Sneaker (Produkt-Typ)
├── mit Adidas (3 Streifen) 
└── mit Nike (Just do it!)
```

**Composition > Inheritance** für Multiple Brands! **Sneaker IS-A Sneaker, HAT-EINE Marke** – flexibel + skalierbar.[2][1]

**Das ist fortgeschrittenes PRI-Material** 🚀

[1](https://javascript.plainenglish.io/inheritance-vs-composition-in-javascript-174142a25bc3)
[2](https://en.wikipedia.org/wiki/Composition_over_inheritance)
[3](https://www.reddit.com/r/AskProgramming/comments/lv7m7a/i_still_dont_understand_the_prefer_composition/)
[4](https://dev.to/xuan_56087d315ff4f52254e6/inheritance-the-oop-trap-destroying-your-code-the-one-fix-experts-hide-from-you-3hai)
[5](https://stackoverflow.com/questions/8696695/composition-inheritance-and-aggregation-in-javascript)
[6](https://journal.stuffwithstuff.com/2011/02/21/multiple-inheritance-in-javascript/)
[7](https://junymc.github.io/javascript_project_shoe_collection_spa)
[8](https://ui.dev/javascript-inheritance-vs-composition)
[9](https://dev.to/bolajibolajoko51/javascript-class-inheritance-49lb)
[10](https://stackoverflow.com/questions/56186391/how-to-create-a-class-that-will-manage-goods-in-js)
[11](https://blog.bitsrc.io/inheritance-vs-composition-which-is-better-for-your-javascript-project-16f4a077de9)
[12](https://codesignal.com/learn/courses/javascript-classes-and-objects-basics/lessons/inheritance-in-javascript-classes)
[13](https://stackoverflow.com/questions/12616042/javascript-oop-multiple-classes)
[14](https://www.youtube.com/watch?v=8nckJU3dalc)
[15](https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance)
[16](http://nifty.stanford.edu/2003/pests/2002/lectures/06.1_OOP/Objects.html?CurrentSlide=4)
[17](https://users.rust-lang.org/t/with-composition-over-inheritance-in-rust-how-does-one-implement-shared-state-to-go-with-shared-behaviour/47357)
[18](https://www.w3schools.com/js/js_class_inheritance.asp)
[19](https://www.wscubetech.com/resources/javascript/oop)
[20](https://javascript.plainenglish.io/inheritance-vs-composition-in-javascript-174142a25bc3?gi=4933bb02a111)