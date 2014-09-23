function getFileName() {
	return window.location.pathname;
}

$(document).ready(function(){
	var url = getFileName();
	/*console.log(url);*/
	$('a[href="'+url+'"]').attr("id","current");
	/*console.log("a[href='"+url+'"]');*/
	$("footer a").hover(function() {
			$("#background-wrap").show();
		},function() {
			$("#background-wrap").hide();
		});	
});

