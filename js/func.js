$(document).ready(function(){
    $(".site-nav__toggle").click(function() {
  		$(this).toggleClass("is-open");

  		$(".site-nav__list--m").toggleClass("is-open");

		});

    $('.slider').sss();

    $(".tab--pavimenti").click(function() {

    	$(this).addClass("active");
    	$(".tab--sanitari, .tab--bagno").removeClass("active");

  		$("#pavimenti").removeClass("u-hidden");

  		$("#sanitari, #bagno").addClass("u-hidden");

		});

		$(".tab--sanitari").click(function() {

			$(this).addClass("active");
    	$(".tab--pavimenti, .tab--bagno").removeClass("active");

  		$("#sanitari").removeClass("u-hidden");

  		$("#pavimenti, #bagno").addClass("u-hidden");

		});

		$(".tab--bagno").click(function() {

			$(this).addClass("active");
    	$(".tab--sanitari, .tab--pavimenti").removeClass("active");

  		$("#bagno").removeClass("u-hidden");

  		$("#sanitari, #pavimenti").addClass("u-hidden");

		});
});