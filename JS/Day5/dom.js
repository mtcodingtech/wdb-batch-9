// console.log(document.title);
// let h2Element = document.querySelectorAll(".para");
// h2Element[1].innerHTML = "Hello";
// h2Element[0].style.color = "red";
// h2Element[0].style.backgroundColor = "pink";

// console.log(h2Element);


// ************************************

let h2Element = document.createElement("h2");
let textNode = document.createTextNode("Hello World");
h2Element.appendChild(textNode)

let bodyElement = document.body;
bodyElement.innerHTML = "hi";
bodyElement.appendChild(h2Element)

console.log(textNode)
console.log(h2Element)
