//saber si una letra es palindromo
function Palindrome(){
    let re = /[^A-Za-z0-9]/g;
    let cadena=prompt("Ingresa una palabra:").toLowerCase().replace(re, '');
    let word1 = cadena.split("").reverse().join('');
    return word1 == cadena ? 'Es un palindromo' : 'No es un palindromo';
}
Palindrome()