

var ToDolist = ["Hej"];



document.getElementsByTagName("button")[0], addEventListener("click" ,function(){
    var cool = [];
    var input;
    while (input != "quit" ) {
        var userinput = prompt("what you wanna do?")
        switch (userinput) {
            case "new":
                userinput = prompt("what you wanna add?");
                ToDolist.push(userinput) // elliott
                
                break;
            case "list":

                break;
            case "delete":
                
                break;
            case "quit":
                
                break;
            default:
                break;
        }
    
    }
})

