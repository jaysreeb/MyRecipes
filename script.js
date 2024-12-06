// Get elements
const modal = document.getElementById('recipe-modal');
const openButton = document.querySelector('.view-recipe-btn');
const closeButton = document.querySelector('.close');
const printRecipe = document.querySelector('.print-btn');

// Show modal when "View Recipe" is clicked
openButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Use flex to center it
});

// Hide modal when "X" is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

/*Printing the recipe*/

printRecipe.addEventListener('click',() =>{
    window.print();
});
