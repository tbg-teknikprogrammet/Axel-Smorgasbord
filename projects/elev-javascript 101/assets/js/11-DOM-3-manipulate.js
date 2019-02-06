// select
var element = document.getElementById("highlight");

// manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.backgroundColor = "#aaa";
element.style.marginTop = "10px";



var ele = document.querySelector("h1");
ele.classList.add("some-class");

// select
var tag = document.getElementsByClassName("special")[1];

// manipulate
tag.classList.add("another-class");
//tag.classList.remove("another.class");
//tag.classList.toggle("another-class");
