/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});

TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

/*----------------------------------------------------*/
/* Photo slide
------------------------------------------------------ */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(function() {
	$('.works-thumb').click(function() {
		var id = $('.works-thumb').index($(this));
		$('#works .carousel-item.active').removeClass('active');
		$('#works .carousel-item').eq(id).addClass('active');
	});
	$('nav .navbar-toggler').click(function() {
		$('nav').toggleClass('activeButton');
	});
});
