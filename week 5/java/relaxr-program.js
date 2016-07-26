// Everything, including this click handler, should be inside the document.ready function. Also, alerts can be helpful for debugging, but you want to be sure to comment them out or delete them before publishing your program. Console.log is a safer option for this kind of debugging, since it will be invisible to most users if it gets left in by accident.
$( "a" ).click(function(event) {
  // alert( event.preventSubmission() );
  event.preventDefault();
  // Javascript is expecting a string inside the () for an alert. It doesn't know what to do with it as written. For example:
  alert( "event.preventSubmission()" );
});

$(document).ready(function() {
	// if
  $('.readmore').click(function(){
		$('#show-this-on-click').slideDown("slow");
		$('.readmore').hide();
		$('.readless').show();
		// }
	// else {
	// 	$('#show-this-on-click').hide();
	// }
	});

	// if
  $('.readless').click(function(){
		$('#show-this-on-click').slideUp('slow');
		$('.readless').hide();
		$('.readmore').show();
	// }
	});
	// else {
	// 	$('#show-this-on-click').show();
	// }

	// if
  $('.learnmore').click(function(){
		$('#learnmoretext').slideDown('slow');
		$('.learnmore').hide();
		// }
		// else{
		// 	$('#learnmoretext').hide();
		// }
	});
});
//The guts of these functions were spot-on, they were just being impeded by the mix of click handlers and conditionals around them. If you clear out the extra bits, as I've done above, you have a beautifully slide-er-iffic app. (You were also missing a "." in one of your selectors.)
