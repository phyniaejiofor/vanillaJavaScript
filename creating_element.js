// create element
const li = document.createElement('li');


// Add a class
li.className = 'collection-item';

 // Add id
 li.id = 'new-item';

 // Add Attribute
 li.setAttribute('title', 'New Item');

 // create text node and append
 li.appendChild(document.createTextNode('Hello world'));

 // create new link
const link = document.createElement('a');

// add classes to the link
link.className = '"delete-item secondary-content';
//  // add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append this link to li

li.appendChild(link);

// append li as child to ul
 document.querySelector('ul.collection').appendChild(li);



 console.log(li);