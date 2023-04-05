// //examine the document object

// //console.dir(document);

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// //document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// //document.all[10].textContent = 'hello'
// console.log(document.forms);
// console.log(document.links)
//console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var addItem = document.getElementById('add-items')
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';

//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px black'

// addItem.style.color = 'green';
// addItem.style.fontWeight = 'bold';

//GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<items.length ; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

//getelementsbytagname
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// //gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<li.length ; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//Queryselector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden'

//queryselectorall //

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const items = document.querySelectorAll('.list-group-item');
// items[1].style.color = "green"


// var odd = document.querySelectorAll('li:nth-child(odd)');
// //var even = document.querySelectorAll('li:nth-child(even)');
//  for(var i=0;i<odd.length;i++){
//      odd[i].style.backgroundColor = 'green';
// //     even[i].style.backgroundColor = '#ccc';
//  }

//traversing the dom //

//var itemList = document.querySelector('#items');
//parentNode 
//console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement 
 //console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
// console.log(itemList.firstChild);

//firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//lastchild
// console.log(itemList.lastChild);

//lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemList.nextSibling);
//nextelementsibling
//console.log(itemList.nextElementSibling);

//previoussibling
//console.log(itemList.previousSibling);
//previouselementsibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

//createElement

//create a div
//var newDiv = document.createElement('div');

//add class
//newDiv.className = 'hello';

//add id
//newDiv.id = 'hello1';

//add attribute
//newDiv.setAttribute('title','Hello Div');

//create text node
//var newDivText = document.createTextNode('Hello World');

//add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');
 
//console.log(newDiv);

//newDiv.style.fontSize = '10px'

//container.insertBefore(newDiv,h1);

//add hello world before item 1

// var container2 = document.querySelector('#items');
// var listgroup = document.querySelector('.list-group-item');
// container2.insertBefore(newDiv,listgroup);