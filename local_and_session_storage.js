// // Set local storage item
//localStorage.setItem('name','John');
//localStorage.setItem('job', 'job');

// // Set session storage item
//sessionStorage.setItem('name','beth');


// remove from storage
//localStorage.removeItem('name');

// get from storage
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');

// // Clear local storage
//localStorage.clear()
//console.log(name);


  document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
   let tasks;

   if(localStorage.getItem('tasks') === null){
    tasks = [];
    } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    alert('task saved');
    e.preventDefault();
 })
  


 const tasks = JSON.parse(localStorage.getItem('tasks')) 

 tasks.forEach(function(task){
     console.log(task);


 })
