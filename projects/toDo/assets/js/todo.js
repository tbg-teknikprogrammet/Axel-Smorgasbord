

var ToDolist = [];



document.getElementsByTagName("button")[0], addEventListener("click" ,function(){ // starts the while loop on button click
    var cool = [];
    var userinput;
    while (userinput != "quit" ) {  // ends the app
        var userinput = prompt("what you wanna do?")       
        switch (userinput) {        // Use the switch statement to select one of many code blocks to be executed.


            case "new":         // let me add a user.
                userinput = prompt("what you wanna add?");
                ToDolist.push(userinput)
                this.console.log("you have added: " + userinput)                
                break;
            case "list":            // shows a list of my "new " users.
                ToDolist.forEach(function(myList){
                    console.log(myList);
                    console.log("#################")
                });
                break;
            case "delete":                  // delets the index i choose, remeber that it starts with 0.
                userinput = prompt("What do you want to delete? ");
                ToDolist.splice(userinput, 1); // 
                console.log("you deleted index: " + userinput);
                break;
            
            default:
                console.log("try again!")
                break;
        }
    
    }
})

