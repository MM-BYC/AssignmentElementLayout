
let element = document.querySelector(".currentDate");
let date = new Date();

element.innerHTML =  date.toLocaleDateString();


        // JavaScript to add event listener
let hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseover', function() {
hoverDiv.classList.add('quote');
        });

hoverDiv.addEventListener('mouseout', function() {
hoverDiv.classList.remove('quote');
        });