if (localStorage.getItem("clouds") == "false") {
	var count = 0;
} else {
	var count = 1;
}

var check = 1;

function localStorageTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function toggleClouds() {
	$("#background-wrap").toggle();
	if (localStorageTest() === true) {
		if (count % 2 === 0) {
			localStorage.setItem("clouds", "true");
		} 
		else {
			localStorage.setItem("clouds", "false");
		}
		count += 1;
	} else if (check == 1) {
	    alert("Local Storage is not available on your device. Your settings will not be remembered after the page is closed. Try turning off Private Browsing.");
	    check += 1;
	}
}

$(document).ready(function(){
	clouds = localStorage.getItem("clouds");

	if (clouds == "true") {
		$("#background-wrap").show();
	}

	$("footer a").hover(function() {
			$("#background-wrap").show();
		},function() {
			$("#background-wrap").hide();
		});	

});