//convertir farnheit a celsius
function farenheitToCelsius(farenheit){
    let celsius= (farenheit - 32) * (5/9);
    console.log(`${farenheit} grados farenheit son ${celsius} grado celsius`);
}
farenheitToCelsius(100)