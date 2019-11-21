// JSnack 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt('Inserisci la prima parola:');
console.log(parola1);

var parola2 = prompt("Inserisci la seconda parola:");
console.log(parola2);

if (parola1.length == parola2.length) {
    console.log('Le due parole inserite hanno la stessa lunghezza');
} else if (parola1.length > parola2.length){
    console.log('La parola ' + parola1 + ' è la più lunga')
} else {
    console.log('La parola ' + parola2 + ' è la più lunga')
}
