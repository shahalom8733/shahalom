$(document).ready(function(){
	

	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu ul').slideToggle(1000);
	});

	//  Search Box
	$('.top-search a i').click(function(event){
		$('.search-box').slideToggle();
		disabledEventPropagation(event);
	});

	$('.search-box').click(function(event){ 
		disabledEventPropagation(event);
	});
	$(document).click(function(event){ 
		$('.search-box').slideUp();
	});


	function disabledEventPropagation(event) {
	  if (event.stopPropagation) {
	    event.stopPropagation();
	  } else if (window.event) {
	    window.event.cancelBubble = true;
	  }
	}

	// Counter UP
	$('.single-fun h1').counterUp({
	    delay: 10,
	    time: 1000
	});

	// Client Slide 
	$('.client-carousel').owlCarousel({

		responsive:{
			0:{
				items:1
			},
			767:{
				items:3,
			},
			990:{
				items:4,
			}

		}
	});
});