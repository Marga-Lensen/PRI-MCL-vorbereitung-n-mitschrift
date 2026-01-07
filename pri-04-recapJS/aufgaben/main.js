import { printDomTree, findPathToFirstMatch } from './pathfinder.js'

const elements = [
    { id: 1, tag: 'html', parent: null },
    { id: 2, tag: 'body', parent: 1 },
    { id: 3, tag: 'header', parent: 2 },
    { id: 4, tag: 'div', parent: 3 },
    { id: 5, tag: 'button', parent: 4 },
    { id: 6, tag: 'div', parent: 3 },
    { id: 7, tag: 'nav', parent: 6 },
    { id: 8, tag: 'NavLink', parent: 7 },
    { id: 9, tag: 'NavLink', parent: 7 },
    { id: 10, tag: 'NavLink', parent: 7 },
    { id: 11, tag: 'main', parent: 2 },
    { id: 12, tag: 'h1', parent: 11 },
    { id: 13, tag: 'p', parent: 11 },
    { id: 14, tag: 'p', parent: 11 },
    { id: 15, tag: 'p', parent: 11 },
    { id: 16, tag: 'footer', parent: 2 },
    { id: 17, tag: 'div', parent: 16 },
    { id: 18, tag: 'ul', parent: 17 },
    { id: 19, tag: 'li', parent: 18 },
    { id: 20, tag: 'li', parent: 18 },
    { id: 21, tag: 'li', parent: 18 },
    { id: 22, tag: 'div', parent: 17 },
    { id: 23, tag: 'ul', parent: 22 },
    { id: 24, tag: 'li', parent: 23 },
    { id: 25, tag: 'li', parent: 23 },
    { id: 26, tag: 'li', parent: 23 },
]

const path1 = findPathToFirstMatch(elements, "button")
console.log("Path to the first button element:", path1)

const path2 = findPathToFirstMatch(elements, "NavLink")
console.log("Path to the first NavLink element:", path2)

const path3 = findPathToFirstMatch(elements, "li")
console.log("Path to the first li element:", path3)

console.log("")
console.log("HTML tree:")
printDomTree(elements)

/*
html
  body
    header
      div
        button
      div
        nav
          NavLink
          NavLink
          NavLink
    main
      h1
      p
      p
      p
    footer
      div
        ul
          li
          li
          li
      div
        ul
          li
          li
          li
*/