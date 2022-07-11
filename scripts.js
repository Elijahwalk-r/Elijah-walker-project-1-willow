// checking to see if my JavaScript is working through a simple console.log
// let eli = (1 + 1)
// console.log(eli);


// PSEUDO CODE
// Grab my form elements (buttons) and prevent the page from refreshing when a user selects it
//     1. Create a variable to hold my form element through the Document object model utilizing a query selector
//     2. Add an event listener that listens to the node once it is clicked
//     3. Add a preventDefault function to prevent the page form refreshing
//     4. Trigger an alert function to let the user know the submit button is inactive 


//1.
const willowForm = document.querySelector('form');

//2.
willowForm.addEventListener('submit', function(e){
    //3.
    e.preventDefault();

    //4.
    alert('Sorry, this form is inactive At the moment. Feel free to continue browsing my Project!')
})
