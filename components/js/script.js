// JavaScript Document
$('.carousel').carousel()

var wheight = $(window).height();

$ ('.fullheight').css('height', wheight);

// replace img inside carousel with a bg image

$ ('#carousel-example-generic .item img').each(function() {
	var imgSrc = $(this).attr('src');
	$(this).parent().css({'background-image': 'url('+imgSrc+')'});
	$(this).remove();
});

// adjust height of . fullheight elements on window resize

$(window).resize(function() {
	wheight = $(window).height();
	$('.fullheight').css('height', wheight);
	
});	