// Enable the carousel
$('#home-carousel').carousel({
  interval: 5000
})

// Enable carousel buttons
$('#home-carousel-thumbs .item').click(function() {
	console.log($(this).index());
	$('#home-carousel').carousel($(this).index()).carousel('pause');
})

// Get the index of the clicked buttons

// Go to the right slideshow image