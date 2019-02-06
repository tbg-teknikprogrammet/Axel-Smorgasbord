// it will starts with the document, the root node

document.URL;
document.links;
document.body;
document.head;

// select
// takes a string argument and returns the one element witg a matching ID
var element = document.getElementById("highlight");
console.log(element);//log HTML
console.dir(element);//log objects

// takes a string argument and returns a list of elements that have a matching class
var elements = document.getElementsByClassName("bolded"); // returns a nodelist

// Takws a string argument and returns a list of alla elements of a given tag name
var eles = document.getElementsByTagName("li");

// Takes a string argument and returns the first element that matches a given css style selector
// document.querySelector("hi");
// document.querySelector(".bolded");
// document.querySelector("#menu a.active");
// Searchingfor an element that does not exist returns nulll
var queryTag = document.querySelector(".bolded");

var queryAllTag = document.querySelectorAll(".bolded");



// excerise

var pID = document.getElementById("first");


var pRoll = document.getElementsByClassName("special")[0];


var pTag = document.querySelector("p");


var troll = document.querySelectorAll("#first");


var ptag1 = document.getElementsByTagName("p");
