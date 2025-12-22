//**Ziel:** Methoden + Arrays mit Klassen füllen.

class TodoItem {
  constructor(text) {
    // Eigenschaften
    this.text = text;
    this.done = false;
  }
  // Methode / Funktionalität
  toggle() {
    this.done = !this.done;
  }
}

//Instanzen kreieren
const todo1 = new TodoItem("Üben");
const todo2 = new TodoItem("Katze füttern");

console.log("todo1 und todo2: ", todo1, todo2);

const todos = [new TodoItem("Einkaufen"), new TodoItem("Lernen")];
console.log("todos Array: ", todos);

todos.push(todo1, todo2);

todos[2].toggle(); // später z.B. checkbox abhaken
console.log(todos[2]); // geschaltet

console.table(todos); // für Übersicht,

/////////////// ende Tag 1

// .map()-Vergleich: todos.map(t => t.text)
const mappedList = todos.map((t) => t.text);
console.log(mappedList); // [ 'Einkaufen', 'Lernen', 'Üben', 'Katze füttern' ]

//**Ziel:** Vollständige Klasse mit Array-Management.

class TodoList {
  constructor() {
    this.items = [];
  }

  add(text) {
    this.items.push(new TodoItem(text));
  }

  render(container) {
    container.textContent = ""; // reset

    this.items.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item.text + (item.done ? " ✓" : "");

      if (item.done) {
        li.classList.add("done");
      }

      /* abhaken */
      // Klick auf das li toggelt done
      li.addEventListener("click", () => {
        item.toggle(); // Zustand im Objekt ändern

        li.classList.add("done")  // formattierung mitschalten, hin und zurück

        this.render(container); // Liste neu zeichnen
      });

      container.appendChild(li);
    });
  }
}
// Nutzen + button.addEventListener

// HTML-Elemente - direktes getElementById (eindeutig)
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const listContainer = document.getElementById("todo-list");

// Null-Check
/* if (!input || !button || !listContainer) {
  console.error("Elemente nicht gefunden!");
  return; 
} */

/* function showError(message) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = `🤔 ${message}`;
  errorMsg.style.color = "purple";
  document.body.prepend(errorMsg); // Modern + einfach!
} */

// TodoList erstellen
const todoList = new TodoList();

// Event Listener
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    // showError("Please enter text");
    let errorMsg = document.getElementById("error-msg");
    if (!errorMsg) {
      errorMsg = document.createElement("p");
      errorMsg.id = "error-msg";
      errorMsg.style.color = "purple";
      document.body.prepend(errorMsg);
    }
    errorMsg.textContent = "🤔 Please enter text";
    return;
  }
  // wenn wir hier sind, ist alles ok → Fehler weg
  // bei gültigem Input: Error entfernen
  // 2. Wenn Text da → Meldung weg
  const errorMsg = document.getElementById("error-msg");
  if (errorMsg) {
    errorMsg.remove();
  }

  /* if(text){ */
  todoList.add(text); // Hinzufügen
  todoList.render(listContainer); // Rendern
  input.value = ""; // Input leeren
  // Error automatisch weg (nächstes Mal überschrieben)
  /* } */
});

// Initial rendern (leere Liste)
todoList.render(listContainer);
