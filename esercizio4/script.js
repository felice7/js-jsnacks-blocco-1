//jSnack 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var lista = ['bianchi','rossi','verdi'];

var nomeutente = prompt("Inserisci il tuo nome:");
console.log(nomeutente);

 var utenteinvitato = 0;

 for (var i = 0; i < lista.length; i++) {
    if (nomeutente == lista[i])
      { utenteinvitato = 1;
   }
 }

 if (utenteinvitato == 1) {
    console.log('puoi partecipare alla festa');
 } else {
  console.log('Non puoi partecipare alla festa');
}
