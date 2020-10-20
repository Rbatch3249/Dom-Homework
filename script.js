//examine the document object

console.dir(document);
//

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//change the title from js
document.title =123;
console.log(document.doctype);
console.log(document.head);
console.log(document.characterSet);
console.log(document.forms);
var headerTitle = document.getElementById('main-header');
console.log(headerTitle);
//this can change the text
//headerTitle.textContent = 'Hello';
//this 
//headerTitle.innerText = 'Goodbye';
//this will display the text content even if i hide it in html
console.log(headerTitle.textContent);
//this will NOt display the text content even if i hide it in html
console.log(headerTitle.innerText);
//this will put the html in the dom element
//headerTitle.innerHTML = '<h3>Hello</h3';

headerTitle.style.borderBottom = 'solid 3px #000';


//GET ELEMENTS BY CLASS NAME
var tables = document.getElementsByClassName('card card-body');
console.log(tables);
console.log(tables[0]);
//here i am changing the index position of 0 to new text
//tables[0].textContent= ' Hello Friends';
//here i am changing the style of the new text
//tables[0].style.fontWeight = 'bold';
//here i can change the color using this method based off the INDEX position
//tables[0].style.backgroundColor = 'pink';
//this for looop will let us change the background color of the entire class!
for(var i = 0; i < tables.length; i++){
    tables[i].style.backgroundColor = 'pink';
}

//GET ELEMENTS BY TAG NAME

var label = document.getElementsByTagName('label');
console.log(label);
console.log(label[1]);
label[2].textContent = 'New Label';
label[2].style.fontWeight='bold';
for(var ii = 0; ii<label.length; ii++ ){
    label[ii].style.backgroundColor = 'yellow';
}

//QUERYSELECTOR
var header =document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value='hello JAVA';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//QUERYSELECTORALL
//var titles = document.querySelectorAll('.title');
//console.log(title);


//nodes
var para = document.createElement("p");
var node = document.createTextNode("this is the list.");
para.appendChild(node);
var element = document.getElementById("demo");
element.appendChild(para);

//buttons
document.getElementById('myBtn').onclick = displayDate;
