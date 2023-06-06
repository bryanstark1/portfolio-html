$(() => {
  $(".mobile-menu").on('click', () => {
    $(".navigation-menu").slideToggle("slow");

    $('article').toggleClass('dim')
  });
});