/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

const evenOddUser = prompt('type "e" for even, type "o" for odd');

const numberUser = Number(prompt('insert a number since 0 to 5'))

function evenOdd(evenOddUser , numberUser) {

    const numberPc = Math.floor(Math.random() * 5);

    const sum = numberUser + numberPc;

    if(sum % 2 === 0 && evenOddUser === 'e'){
        return true;
    } else if(sum % 2 !== 0  && evenOddUser === 'o'){
        return true;
    }

    return false    
}

if(evenOdd (evenOddUser,numberUser)){
    console.log('CONGRATS, YOU WIN');
}else {
    console.log('GAME OVER');
}


