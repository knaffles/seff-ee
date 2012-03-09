// Enable the carousel
$('#home-carousel').carousel({
  interval: 5000
})

$('#home-carousel').bind('slid', function() {
	// Remove any active classes on thumbs
	$('#home-carousel-thumbs .item').removeClass('active');
	// Get the index of the currently active carousel item
	var activeSlide = $('.carousel-inner .active').index();
	console.log(activeSlide);
	$('#home-carousel-thumbs .item').eq(activeSlide).addClass('active');

})

// Enable carousel buttons
$('#home-carousel-thumbs .item').click(function() {
	console.log($(this).index());
	$('#home-carousel').carousel($(this).index()).carousel('pause');
})

// Get the index of the clicked buttons

// Go to the right slideshow image