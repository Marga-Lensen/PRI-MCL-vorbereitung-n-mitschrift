## Finale PRI-02 Unterrichtsstruktur (Ready-to-Use)

```markdown
## PRI-02: OOP Fortsetzung (9-12 Uhr)

### 📋 Ablauf
```
9:00-10:30  → Theorie: Vererbung + Interfaces
10:30-12:00 → Praxis: TodoList fertigstellen → Vite → Deploy
12:00       → Ferien! 🎄
```

### 🎯 Projekt-Highlights (bereits funktional)
```
✅ class TodoList { items = [] }
✅ TodoItem { text, done, toggle() }
✅ li.textContent = item.text + (item.done ? " ✓" : "")
✅ if (item.done) li.classList.add("done")
✅ li.addEventListener("click", () => item.toggle())
✅ Error-Handling (leerer Input)
✅ Modular: export/import
```

### 🗂️ Vite-Struktur
```
pri-02-todo/
├── index.html
├── style.css
├── package.json
└── src/
    ├── main.js      ← import TodoList
    ├── TodoList.js  ← export class TodoList  
    └── TodoItem.js  ← export class TodoItem
```

### 🚀 Deployment (15 Min)
```
1. npm run build → dist/
2. Vercel: GitHub Push → Auto-Deploy
3. Netlify: dist/ Upload
```

---

**Theorie 9:00 bereit (Vererbung/Interfaces)** – **Code läuft** – **Deploy bis 12:00 garantiert**! 
