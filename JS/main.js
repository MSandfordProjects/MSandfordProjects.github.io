//These functions open and close the contact form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//This function displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//This function changes slide when prev or next clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//This function changes slide when dots are clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //takes all elements with class name "mySlides" and stores them in variable array "slides"
  var slides = document.getElementsByClassName("mySlides");
  //takes all elements with class name "dot" and stores them in variable array "dots"
  var dots = document.getElementsByClassName("dot");
  //If n (the number passed into the function) is greater than the length of the array "slides", slideIndex is set to 1
  if (n > slides.length) {slideIndex = 1};
  //If n (the number passed into the function) is less than 1, slideIndex is set to length of array "slides"
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    //Takes each item in array "slides" and sets display to none
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // takes each item in array "dots" and removes "active" - which removes active styling
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //displays image in the slideshow
  slides[slideIndex - 1].style.display = "block";
  //adds active styling to dot associated with image
  dots[slideIndex - 1].className += " active";
}


//this code will create close to the contact form when the user clicks off it
//the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
  //here we state that if click happens on cancel or anywhere that is not the contact form
  //and the clck doesnt happen on any element with the contact class then call closeform() function
  if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
    closeForm()
  }
}, false )