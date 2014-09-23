var a = 1;
function redeem() {
	alert("Here is ur hack pointz.\n U have " + a + " hack pointz.");
	a += 1;
}

	$(document).ready(function(){
		$(document).keypress(function(e) {
			if (e.which == 13) {
				redeem();
			}
		});
		$("#secretstash").hide();
		$(".box").hover(function(){
			colourSpam = setInterval(function(){
			$("#text").hide();
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    		$(".box").css("background-color", hue);
		},100);
		timeout = setTimeout(function() {
			$("#secretstash").fadeIn();
		}, 1000);
	}, function(){
		clearTimeout(colourSpam);
		clearTimeout(timeout);
		$("#secretstash").hide();
		$("#text").show();
		$(this).css("background-color", "#FF9A6C");
	});
});