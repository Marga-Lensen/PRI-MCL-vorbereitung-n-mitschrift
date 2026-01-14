Dieser Code implementiert Internationalisierung (i18n) mit der Bibliothek i18next in einem reinen Vanilla-JavaScript-Projekt, das DOM-Manipulation nutzt – kein Next.js oder React, sondern einfaches Browser-JS mit TypeScript-Elementen.[1][2]

## Code-Funktion
i18next wird initialisiert mit englischen und deutschen Übersetzungen aus separaten Dateien, Standard-Sprache Englisch und Debug-Modus. Ein Select-Element (.language-switcher) wechselt die Sprache via changeLanguage(), was dann translateAll() aufruft: Diese Funktion übersetzt hartcodierte Elemente (z.B. .counter mit Plural-Interpolation) und alle [data-t="key"]-Elemente dynamisch mit i18next.t(key).[3][1]

## Vereinfachte Syntax (Einstiegslevel)
Verwende eine einfachere Struktur ohne Promise-Chains und mit weniger TypeScript-Assertions – ideal für Anfänger:

```javascript
import i18next from 'i18next';
import en from './i18n/en.js';
import de from './i18n/de.js';

i18next.init({
  lng: 'en',
  resources: { en, de },
  debug: true
});

// Einfacher Event-Listener ohne Typ-Assertion
const switcher = document.querySelector('.language-switcher');
switcher?.addEventListener('change', (e) => {
  const lang = e.target.value;
  i18next.changeLanguage(lang, () => {
    translateAll();
  });
});

function translateAll() {
  // Hartcodiert
  const counter = document.querySelector('.counter');
  if (counter) counter.textContent = i18next.t('counter', { count: 19 });

  // Alle data-t-Elemente
  document.querySelectorAll('[data-t]').forEach(el => {
    el.textContent = i18next.t(el.dataset.t);
  });
}

document.addEventListener('DOMContentLoaded', translateAll);
```
Diese Variante nutzt den Callback von changeLanguage statt Promise und dataset.t für sauberen Zugriff.[1]

## Einfachere Alternativen
- **Vanilla JS i18n-Translator**: Minimales Setup mit data-i18n-Attributen und JSON-Objekten – lade Übersetzungen per Skript, übersetze alle via einer Zeile Code, ohne Init oder Events.[4]
- **Polyglot.js**: Airbnb-Bibliothek für Basics; init mit Phrases-Objekt, t(key)-Aufruf – superleicht für kleine Projekte ohne DOM-Scanning.[5]
- **Eigene Map-Lösung**: Für Einsteiger ohne Libs: Globale translations-Objekte {en: {...}, de: {...}}, Funktion switchLang(lang) { currentLang = lang; translateAll(); } mit innerHTML-Zuweisung.[6]

[1](https://www.i18next.com)
[2](https://i18next.github.io/i18next/)
[3](https://github.com/i18next/i18next-browser-languageDetector)
[4](https://github.com/dazecoop/vanilla-js-i18n-translator)
[5](https://github.com/oh-jon-paul/awesome-i18n)
[6](https://news.ssbcrack.com/best-js-localization-tools/)
[7](https://www.i18next.com/overview/getting-started)
[8](https://i18next.github.io/i18next-vue/guide/started.html)
[9](https://www.npmjs.com/package/i18n)
[10](https://stackoverflow.com/questions/60164259/how-to-get-i18next-t-in-plain-js-file)
[11](https://dev.to/diballesteros/how-to-set-up-localization-with-react-i18next-1a0)
[12](https://www.reddit.com/r/nextjs/comments/1al268h/i18next_alternatives/)
[13](https://www.youtube.com/watch?v=U4_P_l3L_EA)
[14](https://i18next.github.io/i18next/node/pages/doc_init.html)
[15](https://www.youtube.com/watch?v=SA_9i4TtxLQ)