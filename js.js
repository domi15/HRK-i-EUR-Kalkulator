function eur(){
    var number = prompt("Unesite iznos u Eurima")
    document.getElementById("HRK").innerHTML = 7.511564*number
    document.getElementById('EUR').innerHTML = number
}
function hrk(){
    var number = prompt("Unesite iznos u Kunama")
    document.getElementById("EUR").innerHTML = number/7.511564
    document.getElementById('HRK').innerHTML = number
}