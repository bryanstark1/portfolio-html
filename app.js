$(() => {
  // Toggle mobile menu on click
  $(".mobile-menu").on('click', () => {
    $(".navigation-menu").slideToggle("slow");

    $('article').toggleClass('dim')
  });

  // CAROUSEL
  // https://github.com/Pickles-GitHub-Classroom/corgi-carousel-bryanstark1

  // Initialize starting frame
  let currentImgIndex = 0;
  const $carouselImgs = $('.carousel-images').children();
  // Initialize total number of images in carousel (as indexes of an array)
  const numOfImages = $('.carousel-images').children().length - 1;
  // .children.eq behaves like an array with indexes starting from 0

  // Next button
  $('.next').on('click', () => {
    $carouselImgs.eq(currentImgIndex).css('display', 'none');
    if (currentImgIndex < numOfImages) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $carouselImgs.eq(currentImgIndex).css('display', 'block');
  })
  
  // Previous button
  $('.previous').on('click', () => {
    $carouselImgs.eq(currentImgIndex).css('display', 'none');
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImages;
    }
    $carouselImgs.eq(currentImgIndex).css('display', 'block');
   })
});