// GROUP MEMBERS: DANIEL MALLIA AND DARREN ZHANG

// 1 - Select the section with an id of container without using querySelector
document.getElementById("container");

// 2 - Select the section with an id of container using querySelector
document.querySelector("#container"); 

// 3 - Select all of the list items with a class of "second"
document.getElementsByClassName("second");

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag
document.querySelector("ol .third");

// 5 - Give the section with an id of container the text "Hello!"
document.getElementById("container").innerText="Hello!";

// 6 - Add the class main to the div with a class of footer
document.querySelector("div.footer").classList.add("main");

// 7 - Remove the class main on the div with a class of footer
document.querySelector("div.footer").classList.remove("main");

