$(function(){
  $(document).scroll(function(){
      var s = $(window).scrollTop();  
      console.log(s);

      if (s >= 350) {
        $('#menu > .menu_nav').addClass('show');
        $('#menu > .menu_nav').removeClass('hide');
      } else {
        $('#menu > .menu_nav').removeClass('show');
        $('#menu > .menu_nav').addClass('hide');

      }
  })
})    