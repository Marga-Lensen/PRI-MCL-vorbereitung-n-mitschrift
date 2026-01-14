const input = document.querySelector("input");
let timer;

async function doSearch(value) {
  // API Anfrage machen
  console.log("verzögerte Suche: ", value);


  const res = await fetch(`https://api.github.com/search/repositories?q=${value}`)
  const result = await res.json()
  console.log(result);
  
  // 
  const ul = document.querySelector("ul")
  ul.innerHTML = ""  // löscht alte Einträge der Liste

  result.items.forEach( (item) => {
    const li = document.createElement("li")
    li.textContent = item.full_name

    ul.appendChild(li)

  })
}

input.addEventListener("input", () => {
  console.log(input.value);

  // wenn noch laufendes Timeout besteht -> löschen
  // innerhalb 500 ms neue Buchstabe => gelöscht
  // erst wenn 500 ms nix neues kommt, bleibt es stehen
  if(timer) clearTimeout(timer)

  // damit es nicht bei jeder Eingabe sucht, Verzögerung einbauen
  timer = setTimeout(() => {
    doSearch(input.value);
  }, 500);
});
