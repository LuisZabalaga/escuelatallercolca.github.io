// SLIDER DE IMAGENES
window.addEventListener('load', () => {

  // initial slide
  let slide = 1;

  // total slides
 let slides = document.querySelectorAll("#tab-4 .slider ul li");
  total = slides.length;

  // show first side
  showSlide(1);

  next2 = document.querySelector(".next4");
  prev2 = document.querySelector(".prev4");

  /*** event next button*/
  next2.addEventListener('click', (evt) => {
      evt.preventDefault();
      slide++;
      if (slide > total) { slide = 1; }
      showSlide(slide);
  })

  /*** event prev button*/
  prev2.addEventListener("click", (evt) => {
      evt.preventDefault();
      slide--;
      if (slide < 1) { slide = total; }
      showSlide(slide);
  })

  /*** show slides
   * @param {number} n 
   * @return {null}
   */
  function showSlide(n) {
      n--; // decrement 1
      for (i = 0; i < slides.length; i++) {
          (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
      }
  }

})
