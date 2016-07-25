
$( "a" ).click(function() {
  alert( event.preventSubmission() ); 
  event.preventDefault();
  alert( event.preventSubmission() ); 
});

$(document).ready(function() {
	if $('.readmore').click(function(){
		$('#show-this-on-click').slideDown("slow");
			$('.readmore').hide();
			$('.readless').show();
		}	
	else {
		$('#show-this-on-click').hide();
	}
	});

	if $('.readless').click(function(){
		$('#show-this-on-click').slideUp('slow');
			$('.readless').hide();
			$('readmore').show();
	} 
	});
	else {
		$('#show-this-on-click').show();
	}

	if $('.learnmore').click(function(){
		$('#learnmoretext').slideDown('slow');
			$('.learnmore').hide();
		}
		else{
			$('#learnmoretext').hide();
		}
	});
});


