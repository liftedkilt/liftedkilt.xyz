$(document).ready(function(){
    $(window).scroll(function(e){
      parallax();
    });

    function parallax(){
      var scrolled = $(window).scrollTop();
      $('#hero-text').css('top',+(scrolled*0.0315)+'rem');
      $('#hero-image').css('top',+(scrolled*-0.005)+'rem');
      $('#hero-text').css('opacity',1-(scrolled*.00175));
    };
});