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
//document.getElementById("container").innerText="Hello!";

// 6 - Add the class main to the div with a class of footer
document.querySelector("div.footer").classList.add("main");

// 7 - Remove the class main on the div with a class of footer
document.querySelector("div.footer").classList.remove("main");

// 8) Create a new li element.
let new_li = document.createElement("li");

// 9) Give the li the text "four".
new_li.innerText = "four";

// 10) Append the li to the ul element.
document.getElementsByTagName("ul")[0].appendChild(new_li);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
for(let i = 0; i < document.querySelectorAll("ol").length; i++){
    document.querySelectorAll("ol")[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
var old = document.querySelector("div.footer");
old.parentNode.removeChild(old);