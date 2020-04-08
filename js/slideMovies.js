var slideIndex = 1;
showMovies(slideIndex);

// Next/previous controls
function plusSlidesmovie(n) {
  showMovies(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showMovies(slideIndex = n);
}

function showMovies(n) {
  var i;
  let b = 1 ;
  var slides = document.getElementsByClassName('showMovieCard');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  while (b < slides.length ) {
      if (b > 4) {
       for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "inline"; }
       
    }else{
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "block"; }

    }
    b++;
  }
  

  
 
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}