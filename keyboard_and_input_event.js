const form =document.querySelector('form');
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5');
const select = document.querySelector('select')
// Clear input 
taskInput.value = '';

 form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent)
// Keyup
taskInput.addEventListener('keyup', runEvent)
// Keypress
 taskInput.addEventListener('keypress', runEvent)
// focus
 taskInput.addEventListener('focus', runEvent)
// blur
 taskInput.addEventListener('blur', runEvent)
// cut
 taskInput.addEventListener('cut', runEvent)
// paste
 taskInput.addEventListener('paste', runEvent)
// Input
 taskInput.addEventListener('input', runEvent)
// Change event
 select.addEventListener('change', runEvent);




function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
    console.log(e.target.value);

     heading.innerText = e.target.value;

    // Get input value
    console.log(taskInput.value);

     e.preventDefault();
}