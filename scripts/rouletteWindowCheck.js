var mobileCheck = false;
var mobileChange = false;

var desktopCheck = false;
var desktopChange = false;

var numCheck = false;
var locationName;
var realLocationName;

function initWidth() {

	if (windowWidthCheck() == true) {
		// desktopImage("desktop");	
		desktopChange = true;
		console.log ("Desktop");
	}
	else {
		// desktopImage("mobile");	
		mobileChange = true;
		console.log ("Mobile");
	}	
//	layoutChange();
	
}

function windowWidthCheck() {
	if ($(window).width() <= 1080) {
		mobileCheck	= true;
		desktopCheck = false;
//		layoutChange();
		return false;
	}
	else {
		mobileCheck	= false;
		desktopCheck = true;
//		layoutChange();
		return true;
	}
}

function windowWidth() {
	windowWidthCheck();

	if (mobileCheck == true && mobileChange == false) {
		mobileChange = true;
		// desktopImage("mobile");
//		layoutChange();
		console.log ("changed to mobile");
		desktopChange = false;
	}

	if (desktopCheck == true && desktopChange == false) {
		desktopChange = true;
		// desktopImage("desktop");
//		layoutChange();
		console.log ("changed to Desktop");
		mobileChange = false;
	}
}

function initLocationName() {
	locationName = sessionStorage.getItem('forwardToLocation');
	console.log(locationName);
	document.getElementById("location-headding").innerHTML = locationName;
}

//function layoutChange() {
//	if (mobileChange == true) {
//		document.getElementById("basic-easy").innerHTML = "EASY";
//		document.getElementById("basic-medium").innerHTML = "MEDIUM";
//	}
//	else {
//		document.getElementById("basic-easy").innerHTML = "EASY <br/> <br/> ";
//		document.getElementById("basic-medium").innerHTML = "MEDIUM <br/> <br/> ";
//	}
//}