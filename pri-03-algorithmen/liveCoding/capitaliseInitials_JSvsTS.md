So wie du es gebaut hast, ist es bereits „TS‑kompatibel“. Für echtes TypeScript braucht es nur Typannotationen und optional etwas Strenge bei Rückgabewerten.[1]

## Typisierte Version in TypeScript

[JS-version](capitaliseInitials.js)
[TS-version](capitaliseInitials.ts)


Kleine TS‑Details:

- `str: string`, Rückgabewert `: string` → klare Signaturen.[1]
- `string[]` für Arrays.  
- `w[0]?.toUpperCase() ?? ""` schützt vor dem Edge‑Case leeres Wort (z.B. doppelte Leerzeichen).

[1](https://www.codecademy.com/resources/docs/general/algorithm/bubble-sort)