const navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

var sections = $("section"),
	nav = $("nav"),
	nav_height = nav.outerHeight();
$(window).on("scroll", function () {
	var cur_pos = $(this).scrollTop();

	sections.each(function () {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find("a").removeClass("active");
			sections.removeClass("active");

			$(this).addClass("active");
			nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
		}
	});
});
nav.find("a").on("click", function () {
	var $el = $(this),
		id = $el.attr("href");

	$("html, body").animate(
		{
			scrollTop: $(id).offset().top,
		},
		1500,
	);

	return false;
});

$('.navbar-collapse a').click(function() {
 $(".navbar-collapse").collapse('hide');
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
	  next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

