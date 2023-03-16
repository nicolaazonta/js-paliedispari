/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */



const userWord = prompt('insert a word please');



function checkPalindrome(userWord) {
    
    // applying split, reverse and join
    const reversedString = userWord.split('').reverse().join('');

    if(userWord === reversedString)
          return true;
    else
          return false;
}



if (checkPalindrome(userWord)){
    console.log('the word that you have entered is palindrome');
} else {
    console.log('game over');
}




