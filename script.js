// DOM - selectors

// getElelemntsByTagName()
// var a = document.getElementsByTagName('li');
// console.log(a)

// getElementsByClassName()
// var a = document.getElementsByClassName('fruit');
// console.log(a)

// getElementById()
// var a = document.getElementById('fruit');
// console.log(a)

// querySelector()
// var a = document.querySelector('.fruit'); //. to select class
// console.log(a) 
// var b = document.querySelector('#fruit'); // # to select id
// console.log(b)

// querySelectorALL()
// var a = document.querySelectorAll('.fruit'); // select all classes named fruit
// console.log(a) 

// TRAVERSE THE DOM
// parent element // returns null if no parent is there
// var parent = document.querySelector('div');
// var p = parent.parentElement;
// console.log(p);

// children
// var child = document.querySelector('ul');
// console.log(child.children[0]);
// console.log(child.children[1]);

// previous element sibling
// console.log(document.querySelector('.fruit').previousElementSibling);

// append child
// const ul = document.querySelector('ul');
// const newE = document.createElement('li');
// newE.textContent = "Pear";
// ul.appendChild(newE);

// remove child
// const ul = document.querySelector('li');
// ul.remove(); // by default the first li is removed

// replace child
// const list = document.querySelector('ul');
// const ChildToReplace = list.children[1];
// const newLi = document.createElement('li');
// newLi.textContent = "Pineapple";
// list.replaceChild(newLi, ChildToReplace)

// parent node // returns somethings always, even when no parent exists
// var parent = document.querySelector('html');
// var p = parent.parentNode;
// console.log(p);

// previous sibling --> unlike previous element sibling, it returns what came just before (element or not)
// var a = document.querySelector('.fruit');
// console.log(a.previousSibling);

// nextsiibling
// var a = document.querySelector('.fruit');
// console.log(a.nextSibling); 
// console.log(a.nextElementSibling); 

// first & last child
// var fChild = document.querySelector('ul'); // for first child
// console.log(fChild.firstChild);
// console.log(fChild.firstElementChild);

// var lChild = document.querySelector('ul'); // for last child
// console.log(lChild.lastChild);
// console.log(lChild.lastElementChild);

// inner text & text content
// var a = document.querySelector('h1').innerText; // with innerText we can't see hidden properties
// console.log(a);
// var b = document.querySelector('h1').textContent; // with textContent we can see hidden properties too
// console.log(b);

// inner HTML & outer HTML
// let a = document.querySelector('.fruit');
// a.innerHTML = '<b>Pine</b>'
// console.log(a);
// let a = document.querySelector('.fruit');
// a.outerHTML = '<b>Pine</b>'
// console.log(a);

// styling in DOM
// let a = document.querySelector('ul');
// a.style.color = "orange";
// a.style.backgroundColor = "grey";
// a.style.border = "2px solid orange";

// get & set attributes
// let hero = document.querySelector('#hero');
// console.log(hero.getAttribute('about'));

// hero.setAttribute('example', 12); 
// console.log(hero.outerHTML);