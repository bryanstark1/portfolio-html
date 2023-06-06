$(() => {

// TOGGLE MOBILE MENU ON CLICK
  $(".mobile-menu").on('click', () => {
    $(".navigation-menu").slideToggle("slow");
    $('article').toggleClass('dim')
  });



// CAROUSEL
  // https://github.com/Pickles-GitHub-Classroom/corgi-carousel-bryanstark1

  // Initialize starting frames
  let currentIndex = 0;
  
  const $carouselImgs = $('.carousel-images').children();
  const $carouselText = $('.carousel-text').children();

  // Initialize total number of images in carousel (as indexes of an array)
  const numOfIndexes = $('.carousel-images').children().length - 1;
  
  // .children.eq behaves like an array with indexes starting from 0

  // NEXT BUTTON
  $('.next').on('click', () => {
    $carouselImgs.eq(currentIndex).css('display', 'none');
    $carouselText.eq(currentIndex).css('display', 'none');
    if (currentIndex < numOfIndexes) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    $carouselImgs.eq(currentIndex).css('display', 'block');
    $carouselText.eq(currentIndex).css('display', 'block');
  })
  
  // PREVIOUS BUTTON
  $('.previous').on('click', () => {
    $carouselImgs.eq(currentIndex).css('display', 'none');
    $carouselText.eq(currentIndex).css('display', 'none');
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = numOfIndexes;
    }
    $carouselImgs.eq(currentIndex).css('display', 'block');
    $carouselText.eq(currentIndex).css('display', 'block');
   })



// MODAL

});