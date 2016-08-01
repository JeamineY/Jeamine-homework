

//loads all html attributes on page
$(document).ready(function() {
console.log("Connected");
	//user submits text and clicks update 
	$('#submit-btn').click(function(){
		//store entry into variable
		var city = $("#city-type") .val();
			console.log("city");
			//user enters NYC
			if (city === "nyc" || city === "new york") {
				$("body").css("background-image", "url(images/nyc.jpg)")
			//user enters la
			} else if (city ==="la" || city === "los angeles") {
				$("body").css("background-image", "url(images/la.jpg)")
			//user enters austin
			} else if (city==="austin") {
				$("body").css("background-image", "url(images/austin.jpg)")
			//user enters san francisco
			}else if (city==="sf" || city === "san francisco" || city === "san fran") {
				$("body").css("background-image", "url(images/sf.jpg)")
			//user enters sydney
			}else if (city==="sydney") {
				$("body").css("background-image", "url(images/sydney.jpg)")

			//user enters other cities not listed above
			}else {
				$("body").css("background-image", "url(images/citipix_skyline.jpg)")
			}
			event.preventDefault();
		});
//close .ready() function	
});




