$(document).ready(function(){
    $(".site-nav__toggle").click(function() {
  		$(this).toggleClass("is-open");

  		$(".site-nav__list--m").toggleClass("is-open");

		});

    $('.slider').sss();
});