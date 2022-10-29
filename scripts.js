
//1.
const willowForm = document.querySelector('form');

//2.
willowForm.addEventListener('submit', function(e){
    //3.
    e.preventDefault();

    //4.
    alert('Sorry, this form is inactive At the moment. Feel free to continue browsing my Project!')
})
