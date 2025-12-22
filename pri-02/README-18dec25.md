# PRI - 02

## Fortsetzung der OOP-Konzepte

- Heute werfen wir einen sehr schnellen Blick auf weitere OOP-Konzepte

### Theorie OOP - Vererbung

- Vererbung ermöglicht die Erstellung von Kindklassen basierend auf Elternklassen
    - Auch abgeleitete Klassen von Basisklassen genannt

- Kindklassen erben Eigenschaften und Methoden von der Elternklasse

### Theorie in Praxis - Live Coding

[Tier-Hund Vererbung](./theorie_liveCoding/Tier-Hund.js)


    ✅ extends = vererbt Struktur (Schlüssel: name, beine)
    ✅ super(name) = ruft Eltern-Constructor → setzt Werte
    ✅ Methoden = AUTOMATISCH verfügbar
    ✅ Eigenschaften = können überschrieben werden

### Fazit Vererbung: 

> Hund bekommt AUTOMATISCH die Eigenschaften `name` + `beine` durch `extends` + `super()`


### Todo List Projekt-Highlights (bis zum Deployment)



💡 class TodoList { items = [] }

💡 TodoItem { text, done, toggle() }

💡 li.textContent = item.text + (item.done ? " ✓" : "")

💡 if (item.done) li.classList.add("done")

💡 li.addEventListener("click", () => item.toggle())

💡 Error-Handling (leerer Input)

💡 Modular: export/import

---
## Übungsaufgabe mit TypeScript

in TypeScript braucht man natürlich Typisierung, und das kommt in der Form wie Interface ganz oben im body block der Klasse, Beispiel:

```ts
class User extends Person {
    alter: number;
    beruf: string;
    erfahrung: number;  // Jahre

    constructor(name: string, alter: number, beruf: string) {
        super(name);                    // ← Eltern (name)
        this.alter = alter;             // ← Eigene Eigenschaft
        this.beruf = beruf;             // ← Eigene Eigenschaft
        this.erfahrung = 0;             // ← Standardwert
    }
}
```
## Interfaces

- In klassischem OOP sind Interfaces wie Verträge
- Wenn eine Klasse ein Interface implementiert, unterschreibt sie den Vertrag
- Der Vertrag besteht darin, die spezifischen Eigenschaften und Methoden bereitzustellen

**Theoretische Grundlagen nachschlagen im TypeScript Handbook:**
- [**TypeScript Handbook: Interfaces**](https://www.typescriptlang.org/docs/handbook/interfaces.html) 🤨 deprecated and redirected to new page:
- [**TypeScript Handbook: Object Types**](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [**TypeScript Handbook: Classes**](https://www.typescriptlang.org/docs/handbook/2/classes.html)


## Selbststudium & Weiterlernen

- **MDN Classes**: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
- **MDN extends**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends  
- 
- **Video 7 Min extends (sehr einfach und !ohne constructor!)**: [Bro Code "inheritance"](https://www.youtube.com/watch?v=DqUPa0D2N78)
- **Video 9 Min extends (aufbauend auf einfachem Video ⬆️ diesmal MIT constructor & super - gut 👍️)**: [Bro Code "super"](https://www.youtube.com/watch?v=Cto38GpvJgg)

- **Extra: Getter & Setter functions in class** [Bro Code get & set](https://www.youtube.com/watch?v=KQVCAnh6Afk)