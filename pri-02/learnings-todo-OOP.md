## Live-Coding-Projekt: Todo List

### Lernfokus

- **OOP**
  - Verwendung einer Klasse mit einem internen Array für die Programmlogik.
- **HTML & CSS**
  - Minimalistisches, aber funktionelles Layout.
  - Dynamisches Styling: z. B. `classList.add("done")` nach einem Toggle on Click.
- **JavaScript & DOM**
  - Pragmatische DOM-Manipulation.
  - Event Handling für Nutzerinteraktionen.
  - Fehlerbehandlung: Nutzerfreundliche Meldung, wenn Button ohne Input betätigt wird.

---

### Modulare Denkweise

- **Export einer Klasse**
  ```
  export class TodoList { ... }
  ```
- **Import im Hauptmodul**
  ```
  import { TodoList } from './TodoList.js'
  ```

---

### Tooling & Projektstruktur

- **Upgrade zu Vite**
  - Gleiche HTML-Struktur.
  - Externes CSS in `style.css`.
  - Funktionaler Hauptcode in `main.js`.
  - Vorteil: Schnelles Setup, modernes Build-System, einfache Entwicklungsumgebung.

---

### Deployment-Erfahrungen

#### GitHub Pages
- Klassische und GitHub Actions-Deployments ausprobiert.
- Ergebnis: Funktioniert, aber in diesem Fall **nicht kompatibel mit Vite** (Routing, ES Modules etc.).

#### Vercel
- Nahe Integration mit GitHub.
- Automatische Synchronisation und Deployment.
- Sehr einfach, stabil und zuverlässig.

#### Netlify
- Drag & Drop Deployment **hat nicht funktioniert**.
- Manuelles Uploaden des `dist`-Ordners **ging problemlos**.
- Alternative zu Vercel mit eigenem Workflow.

---

### Fazit des Projekts

- Das Todo-List-Projekt bietet viele kleine, wertvolle Lernmomente.
- Ideal, um OOP, DOM-Manipulation und modulare JavaScript-Struktur zu üben.
- Deployment über Vercel als Best Practice für moderne Frontend-Projekte.