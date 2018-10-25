// När använder vi While?
// När vi inte vet hur många gånger koden behöver itereras.

// while(vilkor) {
    //kod
// }

var text = "";
var i = 0;

while(i < 20) {
    text += "nummret är: " + i;
    i ++;
}

document.getElementById("output").innerHTML=text;