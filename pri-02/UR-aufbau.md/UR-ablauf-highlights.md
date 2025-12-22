Formatierte Todo-List-Unterrichtsnotizen

text
## Live-Coding: Todo List Projekt (PRI-02)

### Lernziele & Ablauf
- **9:00-10:15**: Theoretischer Input (OOP Fortsetzung: Vererbung, Interfaces)
- **Pause**
- **10:30-12:00**: Praktisches Projekt
  - HTML/CSS/JS Todo List fertigstellen (modular mit export/import)
  - Upgrade zu Vite
  - Deployment (Vercel/Netlify)
- **12:00**: Fertigstellung & Ferien-Verabschiedung

### Projekt-Highlights (Live-Coding)
- **OOP**: `class TodoList` mit internem Array für Programmlogik
- **HTML/CSS**: Minimal, funktional – `classList.add("done")` und `item.toggle()` on click
- **JS/DOM**: Pragmatische Event-Handling, Error-Handling (leerer Input)
- **Modularität**: `export class TodoList` → `import { TodoList }`

### Tooling-Upgrade

    HTML/CSS/JS → Vite
    ├── index.html (gleich)
    ├── style.css (extern)
    └── main.js (import TodoList)
    
    └── src/
      ├── main.js ← importiert TodoList 
      ├── TodoList.js ← export class TodoList & importiert TodoItem
      └── TodoItem.js ← export class TodoItem

    Deployment
    ❌ GitHub Pages (Vite-Probleme)
    ✅ Vercel (GitHub-Sync)
    ✅ Netlify (dist-Upload)

text

**Ziel**: Bis 12:00 live deployte Todo-App mit OOP & Vite!

