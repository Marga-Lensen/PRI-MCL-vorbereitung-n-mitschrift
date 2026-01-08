
Mela Heß
9:17 AM
ah steven, hey! schön, dass du wieder da bist!!

Steven Wittig
9:17 AM
danke :D

Mela Heß
9:19 AM
ah, wie ein rezept

Steven Wittig
9:19 AM
Kurze Info Christoph sollte nächste Woche wieder da sein.

Mela Heß
9:32 AM
vllt kannst du uns das repo vorher schon hochladen?

Mela Heß
9:42 AM
ist das meine verbindung?

Thomas Engel
9:42 AM
bei mir auch

Thomas Engel
9:53 AM
bei  mir ist es OK

Thomas Engel
9:55 AM
afk

Thomas Engel
9:56 AM
bak

Mela Heß
10:00 AM
mit split

Mela Heß
10:02 AM
nur den ersten Buchstabes jedes Worts

Thomas Engel
10:04 AM
afk

Thomas Engel
10:06 AM
bak

Thomas Engel
10:08 AM
wir sollten uns an den Pseudo-Code halten

Mela Heß
10:09 AM
ah, wir nehmen jetzt erstmal nicht map. das war mir entgangen

Mela Heß
10:11 AM
also wir fangen jetzt mit der for-Schleife an, ja?
ok

Thomas Engel
10:12 AM
geht auch kürzer: for( let w of words)

Thomas Engel
10:15 AM
ist OK

Anna Chernii
10:15 AM
1

Mela Heß
10:16 AM
ich weiß

Thomas Engel
10:19 AM
Tricky code um Arrays zu zerlegen:
let a = [1,2,3];
let [f, ...r] = a;
Liefert: f = 1 und r = [2,3].

Mela Heß
10:22 AM
ah, cool!

Thomas Engel
10:26 AM
Funktion crashed leider bei " a b ".

Thomas Engel
10:34 AM
bis wann?
afk til 10:50

Thomas Engel
10:49 AM
bak

Imke Högden (sie / ihr)
10:50 AM
yes

Angela Guilherme
10:50 AM
bak

Thomas Engel
10:53 AM
Vorsicht! [ ...a] ist nur eine flache Kopie.
Besser: structuredClone() verwenden.

Mela Heß
11:01 AM
const output = input
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(output)

Thomas Engel
11:01 AM
Cool!

Thomas Engel
11:02 AM
Verbesserung: prüfen, ob word leer ist.
Kann passieren bei trailing spaces: " a ".

Mela Heß
11:09 AM
const output = input
  .split(" ")
  .map((word) => {
    if (word === " ") {
      return "";
    }
    word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(" ");

console.log(output);

Thomas Engel
11:10 AM
Läuft auch bei input = "". Hätte man word[0] verwendet, gäbe es einen Crash.

Thomas Engel
11:12 AM
Statt if kann man auch kurz ?: verwenden, da wir in beiden Fällen einen Wert erwarten.

Mela Heß
11:12 AM
schreib mal bitte die ganze funktion mit ?
also thomas

Mela Heß
11:13 AM
ah ok habs

Thomas Engel
11:14 AM
Ich auch:
const output = input
  .split(" ")
  .map((word) => {
    return(
        word === "" ?
        "" :
        word.charAt(0).toUpperCase() + word.slice(1)
    )})
  .join(" ");

Mela Heß
11:19 AM
vor dem ? müsste es nicht ein leerer String sein?

Thomas Engel
11:20 AM
Ja: zwischen den quotes steht nix.

Thomas Engel
11:21 AM
Aber tatsächlich brauchen wir die Abfrage nicht, da charAt auch bei ungültigen Positionen funktioniert: es liefert dann einen leeren String.

Mela Heß
11:22 AM
okay cool! :)
11:24 AM
const input = [6,4,5,8,52,9,1,6,11]
Hover over a message to pin it
keep

Thomas Engel
11:27 AM
https://copilot.microsoft.com/shares/BKmQGY24p6WDuU7pcviXc

Mela Heß
11:32 AM
✔ Wenn du robust programmierst und Fehler früh erkennen willst → undefined ist besser

Weil du sofort merkst, wenn etwas nicht stimmt.
✔ Wenn du komfortabel mit Strings arbeiten willst und keine Sonderfälle brauchst → leerer String ist besser

Weil du immer einen String bekommst und weniger prüfen musst.

Thomas Engel
11:33 AM
Das Problem steckt in der ungenauen Aufgabenstellung: welche Zeichenketten sind erlaubt und wie soll man reagieren?
afk

Thomas Engel
11:34 AM
bak

Thomas Engel
11:37 AM
Ist richtig!

Mela Heß
11:38 AM
vllt includes . ?

Thomas Engel
11:39 AM
was macht das?
tricky!

Mela Heß
11:40 AM
:D Ok. Ich höre jetzt zu und höre auf mit raten

Thomas Engel
11:41 AM
geht auch bei string

Thomas Engel
11:43 AM
function odd(n){
    return(
        (n / 2).toString().includes("."))};

Mela Heß
11:45 AM
dann 1

Thomas Engel
11:45 AM
Oder rekursiv:
function even(n){
    return( n === 0 ? true : odd(n-1))}
function odd(n){
    return( n === 0 ? false : even(n-1))};

Mela Heß
11:46 AM
oder eine rekursiv teilfunktion :D

Imke Högden (sie / ihr)
11:47 AM
&&?

Thomas Engel
11:48 AM
geht auch Kauffrau-und?

Imke Högden (sie / ihr)
11:48 AM
einfach und-zeichen?

Mela Heß
11:48 AM
Kaufpersonen-und :D

Thomas Engel
11:48 AM
https://de.wikipedia.org/wiki/Et-Zeichen

Thomas Engel
11:56 AM
function odd(n){
    return(
        Number.isInteger(n / 2))};

Mela Heß
11:57 AM
Oha, geht also doch?

Thomas Engel
11:57 AM
YES!

Mela Heß
11:57 AM
uhhhh
wir haben ja heute auch noch die infoveranstaltung

Thomas Engel
11:58 AM
wie lange?

Mela Heß
11:59 AM
ab 14.30..ich schätze ...ne weile :D

Imke Högden (sie / ihr)
11:59 AM
bestimmt bis ende

Thomas Engel
11:59 AM
und nicht länger

Angela Guilherme
12:05 PM
I have to leave, I wish you all a good evening :)

Mela Heß
12:05 PM
tschüü, bis morgen!

Thomas Engel
12:05 PM
good bye