$(() => {
  $(".mobile-menu").on('click', () => {
    $(".navigation-menu").slideToggle("slow");
    $('article').css('opacity', '0.6')
  });
});