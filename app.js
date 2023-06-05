$(() => {
  $(".mobile-menu").on('click', () => {
    $(".mobile-menu-expanded").slideToggle("slow");
    $('article').css('opacity', '0.6')
  });
});