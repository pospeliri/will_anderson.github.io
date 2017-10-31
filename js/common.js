$(document).ready(function(){
  // Smooth Scrolling
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } 
  });
  // Smooth Scrolling END
  // Galerry
    $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      if(value == "all"){
        $('.filter').show('1000');
      } else{
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
      }
    });
  // Galerry END
  //Gallery Fancybox
  $("[data-fancybox]").fancybox();
  //Gallery Fancybox END
})