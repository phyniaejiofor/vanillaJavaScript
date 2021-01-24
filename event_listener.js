// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('amaka');


//     // e.preventDefault();
// })


document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    // console.log('amak');

    let val;
    
    val = e;


    // Event target element
    val =e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello world'


    // Event Type
    val = e.type;




    // TimeStamp

    val = e.timeStamp;


        // Cootds event relative to the window
        val = e.clientY;
        val = e.clientX;
     

         // Cootds event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}


