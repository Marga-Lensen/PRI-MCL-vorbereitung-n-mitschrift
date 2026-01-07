let globalX = 5
function outer() {
    console.log(globalX); // 5 (global scope)
    let outerY = 10;
    function inner() {
        console.log(outerY); // 10 (lexikalischer Zugriff)
    }
    return inner;
}
const fn = outer();
fn(); // 10, ruft inner() auf; verschachtelter Zugriff auf outerY



function meineFunktion(action) {
    console.log('Hallo');
    action();  // hier wird die ÜBERGEBENE callback function aufgerufen
}
meineFunktion(function() {   // anonyme Funktion als Argument
    console.log('Welt');
});
// Hallo
// Welt