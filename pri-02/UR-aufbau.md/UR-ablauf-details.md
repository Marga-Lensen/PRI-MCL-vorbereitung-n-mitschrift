## Korrigierte Projekt-Highlights

```markdown
## Live-Coding: Todo List Projekt (PRI-02)

### Lernziele & Ablauf
- **9:00-10:15**: Theoretischer Input (OOP Fortsetzung: Vererbung, Interfaces)
- **10:30-12:00**: Praktisches Projekt
  - HTML/CSS/JS Todo List fertigstellen (modular mit export/import)
  - Upgrade zu Vite
  - Deployment (Vercel/Netlify)

### Projekt-Highlights (Live-Coding) – **KORRIGIERT**
- **OOP**: `class TodoList` mit internem Array für Programmlogik
- **HTML/CSS**: Minimal, funktional
- **JS/DOM**: 
  - ✅ `li.textContent = item.text + (item.done ? " ✓" : "");`
  - ✅ `if (item.done) li.classList.add("done");`
  - ✅ `li.addEventListener("click", () => { item.toggle(); li.classList.toggle("done"); })`
- **Error-Handling**: Freundliche Meldung bei leerem Input
- **Modularität**: `export class TodoList` → `import { TodoList }`

### Vite Projektstruktur (Mini-Tree)

```console
pri-02-todo/
├── index.html
├── style.css
├── package.json
└── src/
    ├── main.js          ← importiert TodoList 
    ├── TodoList.js      ← export class TodoList & importiert TodoItem
    └── TodoItem.js      ← export class TodoItem
```

**src/TodoItem.js** (einzelnes Todo-Objekt):

```javascript
export class TodoItem {
  constructor(text) {
    this.text = text;
    this.done = false;
  }
  
  toggle() {
    this.done = !this.done;
  }
}
```

**src/TodoList.js** (Hauptlogik):

```javascript
import { TodoItem } from './TodoItem.js';

export class TodoList {
  constructor() {
    this.items = [];
  }
  
  add(text) {
    const item = new TodoItem(text);
    this.items.push(item);
    return item;
  }
  
  // ... weitere Methoden
}
```

**src/main.js** (Einstiegspunkt):

```js
import { TodoList } from './TodoList.js';

const todoList = new TodoList();
// DOM-Setup & Event-Listener
```

### Deployment-Flow

```console
1. npm create vite@latest pri-02-todo -- --template vanilla
2. npm install
3. npm run dev    → localhost:5173
4. npm run build  → dist/ Ordner
5. Vercel/Netlify Deploy
```

**Ziel**: Bis 12:00 live deployte, modulare Todo-App! 🎉
```

**Perfekt – jetzt stimmt die DOM-Logik exakt mit deinem aktuellen Stand!** Die `classList.add("done")` + `toggle()` Kombi ist pragmatisch und verständlich für Intermediate-Schüler. 

