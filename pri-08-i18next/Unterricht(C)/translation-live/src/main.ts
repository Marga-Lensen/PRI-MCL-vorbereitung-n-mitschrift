import './style.css'
import i18next from 'i18next'
import de from "./i18n/de"
import en from "./i18n/en"

const resources = {
  de, en
}

/* const long = {
  de: de,
  en: en
} */

i18next.init ({
  lng: "en",
  debug: true,
  resources,
})

const switches = document.querySelector("select") as HTMLSelectElement

async function changeLang(){
  const language = switches.value
  console.log(language);

  try {
    await i18next.changeLanguage(language)  // mit Promise
    translateAll()

  } catch(e) {
    console.log("Fehler", e);
    
  }
}

// alle Elemente mit dem attribute data-t aufsuchen und übersetzen
function translateAll(){
  const translationTargets = document.querySelectorAll("[data-t]")

  translationTargets.forEach( el => {
    const key = el.getAttribute("data-t")

    if (key) {
      el.textContent = i18next.t(key)
    }

  })
}

// event listener für Dropdown
switches.addEventListener("input", changeLang)

// einmal 118 alles übersetzen lassen
document.addEventListener("DOMContentLoaded", translateAll)
// unabhängig davon sollte im HTML überall Inhalt in der Standardsprache seine