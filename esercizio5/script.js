//jSnack 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var lista = [];
for (var i = 0; i < 6; i++) {
    var numeroinserito = prompt('inserisci un numero');
    if (numeroinserito % 2 == 0) {
        console.log('il numero è pari');
    } else if (numeroinserito % 2 == 1) {
        console.log('il numero è dispari');
        lista.push(numeroinserito);
    } else {
        console.log("non e' stato inserito un numero valido");
    }
}
console.log(lista);
