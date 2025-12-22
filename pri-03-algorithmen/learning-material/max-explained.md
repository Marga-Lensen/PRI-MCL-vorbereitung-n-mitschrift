**Super-Frage!** Das ist der **Kern** von Algorithmen.

## **Was passiert bei `false`? → **NICHTS** ✅**

```javascript
if (arr[i] > max) {
  max = arr[i];  // NUR wenn true!
}
// Bei false: → überspringen, max bleibt gleich!
```

## **Live-Beispiel:**
```javascript
const arr = [5, 2, 8, 1, 9];
let max = 5;  // Start

i=0: 5 > 5? ❌ → nichts, max=5
i=1: 2 > 5? ❌ → nichts, max=5  
i=2: 8 > 5? ✅ → max=8
i=3: 1 > 8? ❌ → nichts, max=8
i=4: 9 > 8? ✅ → max=9

Ergebnis: max=9 ✅
```

## **"Else" ist **UNSICHTBAR** hier:**

```javascript
if (arr[i] > max) {
  max = arr[i];     // ✅ BESSER
} else {
  // nichts!         // ❌ unnötig
}
```

**Regel:** `else` nur wenn du **beide Fälle** brauchst!

## **Für deinen README:**

```javascript
// MAX: Nur aktualisieren wenn GRÖSSER!
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];  // false? → überspringen!
}
```

**Bei `false`: Code springt **zur nächsten Schleifenrunde** – genial einfach!** 🎯