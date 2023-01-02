function eur(){
    var numb = prompt("Unesite iznos u Eurima")
    number = numb
    numb = 7.53450*numb
    numb = numb.toFixed(2)
    document.getElementById("HRK").innerHTML = numb
    document.getElementById('EUR').innerHTML = number
}
function hrk(){
    var numb = prompt("Unesite iznos u Kunama")
    number = numb
    numb = numb/7.53450
    numb = numb.toFixed(2)
    document.getElementById("EUR").innerHTML = numb
    document.getElementById('HRK').innerHTML = number
}
