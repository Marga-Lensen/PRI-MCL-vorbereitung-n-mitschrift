//**Ziel:** Methoden + Arrays mit Klassen füllen.  

class TodoItem {
  constructor(text) { 
    // Eigenschaften
    this.text = text; 
    this.done = false; 
}
    // Methode / Funktionalität
  toggle() { 
    this.done = !this.done; }
}

//Instanzen kreieren
const todo1 = new TodoItem("Üben")
const todo2 = new TodoItem("Katze füttern")

console.log("todo1 und todo2: ", todo1, todo2);

const todos = [new TodoItem("Einkaufen"), new TodoItem("Lernen")];
console.log("todos Array: ", todos);

todos.push(todo1, todo2)

todos[2].toggle(); // später z.B. checkbox abhaken
console.log(todos[2]); // geschaltet

console.table(todos);// für Übersicht, 

/////////////// ende Tag 1

// .map()-Vergleich: todos.map(t => t.text)
const mappedList = todos.map(t => t.text)
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
    container.textContent = "";  // reset

    this.items.forEach(item => {

      const li = document.createElement("li");

      li.textContent = item.text + (item.done ? " ✓" : "");

      container.appendChild(li);
    });
  }
}
// Nutzen + button.addEventListener

// HTML-Elemente
const input = document.querySelector("#todo-input");
const button = document.querySelector("#add-btn");
const listContainer = document.querySelector("#todo-list");

// TodoList erstellen
const todoList = new TodoList();

// Event Listener
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    todoList.add(text);             // Hinzufügen
    todoList.render(listContainer); // Rendern
    input.value = "";               // Input leeren
  }
});

// Initial rendern (leere Liste)
todoList.render(listContainer);



