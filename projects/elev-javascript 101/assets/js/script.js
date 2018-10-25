var name = "axel";
var age = 18;


if(age < 18) {
    //kod är på
    console.log("STOP! Du är för " + age + "år");

} else if(age > 18 && age < 45) {
    console.log("Shutdown! you age is wack...");
}
 else {
    // är påstående false - kör koden här mellan måsvingar
    console.log("Välkommen du är " + age + "år");
}
smorgasbordet

// singel app comment
/* Block line comment
***************
    ---- Guessing app ----
***************
*/

// Deklarera en variabel
var secretNumber = 7;

// User input - ta emot data
var userInput = Number(prompt("Gissa talet 1-10"));

// läsa av vilkoret - läser av user input
if(userInput === secretNumber) {
    document.writeln("Grattis du gissade rätt nummer :) 10p <br>");

}else if(userInput === 6 || userInput === 8)
    document.writeln("Det bränns");

 else if(userInput > secretNumber){
    document.writeln("Du gissade för högt! Testa igen.");
}else {
    document.writeln("Du gissade för lågt! Testa igen.");
}

var age = Number(prompt("din ålder: "));

if(age < 0) {
    // Du är inte född då.
    document.writeln("Tyvärr du är inte född ännu...")
} else if(age%2 == 0){
    document.writeln("det är jämnt");

} else if(age%2 != 0) {
    document.writeln("Det är inte jämnt");
}

Var issunny = false;

if(issunny === true)