var pageTracker = true;
var fadeCheck = true;

function initBlocker() {
	setTimeout(addDot, 500);
	setTimeout(addDot, 1000);
	setTimeout(addDot, 1500);
	setTimeout(screenPrep, 2000);
}

function addDot () {
	document.getElementById('loadingText').innerHTML +=".";
}

function screenPrep() {
	document.getElementById('loadingText').innerHTML ="Loaded";	
	setTimeout(clearScreen, 500);
}

function clearScreen() {
	if (fadeCheck == true) {
		$("#loading-blocker").fadeOut();
		console.log("Faded Out Loading Blocker");
		fadeCheck = false;
	}
	else {
		$("#loading-blocker").fadeIn();
		console.log("Faded In Loading Blocker");
		fadeCheck = true;
	}
}

function swapMainViews() {
	clearScreen();
	setTimeout(swapEpisodes, 500);
	setTimeout(clearScreen, 1000);
}

function swapEpisodes() {
	if (pageTracker == true) {
		$("#episodes").hide();
		$("#episodes2").show();
		pageTracker = false;
	}
	else {
		$("#episodes2").hide();
		$("#episodes").show();
		pageTracker = true;		
	}
}