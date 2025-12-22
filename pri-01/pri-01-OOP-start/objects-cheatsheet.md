## JavaScript Objekte – KLAR sortiert

**Objekte = Key-Value-Paare** (wie JSON, aber flexibler).

## 1. Object Literal (bisher bekannt)
```javascript
const user = {
  name: "Max",     // ← KEY:VALUE
  alter: 25,
  gruß() {         // ← METHOD (Funktion als Value)
    console.log(`Hallo ${this.name}`);
  }
};
user.gruß();  // this in user-Objekt!
```

## 2. JSON (String-Version)
```javascript
// JSON = STRING (für localStorage/Server)
const json = '{"name":"Max","alter":25}';
const user = JSON.parse(json);  // → Object Literal (JS)
```

## 3. CLASS = Bauplan für viele Objekte
```javascript
class User {
  constructor(name, alter) {  // ← Wird bei new() aufgerufen
    this.name = name;         // ← Eigenschaft speichern
    this.alter = alter;
  }
  
  gruß() {                    // ← METHODE (Funktion in Klasse)
    console.log(`Hallo ${this.name}`);
  }
}

const max = new User("Max", 25);  // ← new = Objekt bauen ; Bauplan ist class User
max.gruß();  // this = max-Objekt!
```

## 4. this = "Das aktuelle Objekt"
```javascript
// BEIDES GLEICH:
const user1 = { name: "Max", gruß() { console.log(this.name); } };
class User { constructor(name){this.name=name;} gruß(){console.log(this.name);} }

// this.name = user1.name / max.name
```

## 5. instanceof = "Gehört zu dieser Klasse?"
```javascript
console.log(max instanceof User);      // true
console.log(max instanceof Haustier);  // false
console.log(user1 instanceof Object);  // true (alles ist Object!)
```

## **Vergleichstabelle**
| Typ | Syntax | this? | Mehrere bauen? |
|-----|--------|-------|----------------|
| **Literal** | `{name:"Max"}` | ✅ | ❌ manuell |
| **JSON** | `'{"name":"Max"}'` | ❌ | ❌ String |
| **Class** | `class User {...}` | ✅ | ✅ `new User()` |

## **Benennungen:**
```
{ name: "Max" }        → Object Literal
class User { ... }     → BAUPLAN
new User("Max")        → OBJEKT
this.name              → EIGENSCHAFT
user.gruß()            → METHODE
instanceof User        → "Ist unsere Klasse?"
```

**Alles Key:Value!** Class erzeugt nur **viele Literals** mit gleicher Struktur!