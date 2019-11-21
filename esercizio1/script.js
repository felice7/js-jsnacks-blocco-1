// JSnack 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt('inserisci il primo numero'));
console.log(numero1);
var numero2 = parseInt(prompt('inserisci il secondo numero'));
console.log(numero2);

if (numero1 == numero2) {
console.log('I due numeri sono uguali');
} else {
var lista = [numero1, numero2];
console.log(lista);
lista.sort(function(a,b){return b-a});
console.log(lista);
console.log('Il numero maggiore è ' + lista[0]);
}
