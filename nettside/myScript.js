 function endreTekst(){
    document.getElementById("demo").innerHTML += "THIS WEBSITE IS OWNED BY BILL GATES <br>";
 }

function leggTilBilde(){
document.getElementById("bildeboks").innerHTML += "<img src= \"bilder/edpV2.jpg\">";
}
 
function fjerneBilder(){
    document.getElementById("bildeboks").innerHTML =""; 
    document.getElementById("demo").innerHTML = "";
    }