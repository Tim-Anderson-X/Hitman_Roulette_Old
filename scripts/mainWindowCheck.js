var mobileCheck = false;
var mobileChange = false;

var desktopCheck = false;
var desktopChange = false;

var num_paris;
var num_sapienza;
var num_marrakesh;
var num_bangkok;
var num_colorado;
var num_hokkaido;

var num_training;
var num_test;
var num_icon;
var num_sand;
var num_holiday;
var num_landslide;

var numCheck = false;

function initWidth() {

	if (windowWidthCheck() == true) {
		desktopImage("desktop");	
		desktopChange = true;
		console.log ("Desktop");
	}
	else {
		desktopImage("mobile");	
		mobileChange = true;
		console.log ("Mobile");
	}
}

function windowWidthCheck() {
	if ($(window).width() <= 1080) {
		mobileCheck	= true;
		desktopCheck = false;
		return false;
	}
	else {
		mobileCheck	= false;
		desktopCheck = true;
		return true;
	}
}

function windowWidth() {
	windowWidthCheck();

	if (mobileCheck == true && mobileChange == false) {
		mobileChange = true;
		desktopImage("mobile");
		console.log ("changed to mobile");
		desktopChange = false;
	}

	if (desktopCheck == true && desktopChange == false) {
		desktopChange = true;
		desktopImage("desktop");
		console.log ("changed to Desktop");
		mobileChange = false;
	}
}

function desktopImage(type) {
	randomImage("paris", 		type,  	3);
	randomImage("sapienza", 	type, 	4);
	randomImage("marrakesh", 	type, 	4);
	randomImage("bangkok", 		type, 	5);
	randomImage("colorado",		type, 	5);
	randomImage("hokkaido",		type, 	4);

	randomImage("test", 		type, 	4);
	randomImage("training",		type, 	3);
	randomImage("icon", 		type, 	3);
	randomImage("sand", 		type, 	3);
	randomImage("holiday", 		type, 	2);
	randomImage("landslide", 	type, 	2);

	document.getElementById('episode-bonus-image').style.backgroundImage="url(img/episode/bonus/"+type+"/Card1.png)";
	document.getElementById('episode-main-image').style.backgroundImage="url(img/episode/main/"+type+"/Card1.png)";
}

function randomImage (location, type, imageCount) {
	if (numCheck == false) {
		randNum = Math.floor((Math.random() * imageCount) + 1);
		switch (location) {
			case "paris":
				num_paris = randNum;
				break;
			case "sapienza":
				num_sapienza = randNum;
				break;
			case "marrakesh":
				num_marrakesh = randNum;
				break;
			case "bangkok":
				num_bangkok = randNum;
				break;
			case "colorado":
				num_colorado = randNum;
				break;
			case "hokkaido":
				num_hokkaido = randNum;
				break;		

			case "training":
				num_training = randNum;
				break;		
			case "test":
				num_test = randNum;
				break;											
			case "icon":
				num_icon = randNum;
				break;		
			case "sand":
				num_sand = randNum;
				break;	
			case "holiday":
				num_holiday = randNum;
				break;		
			case "landslide":
				num_landslide = randNum;
				break;					
		}
		document.getElementById('episode-'+location+'-image').style.backgroundImage="url(img/episode/"+location+"/"+type+"/Card" + randNum + ".png)";	
		
		if (location == "landslide") {
			numCheck = true;
			console.log ("all images loaded")
		}	
	}
	else {
		switch (location) {
			case "paris":
				randNum = num_paris;
				break;
			case "sapienza":
				randNum = num_sapienza;
				break;
			case "marrakesh":
				randNum = num_marrakesh;
				break;
			case "bangkok":
				randNum = num_bangkok;
				break;
			case "colorado":
				randNum = num_colorado;
				break;
			case "hokkaido":
				randNum = num_hokkaido;
				break;	

			case "training":
				randNum = num_training;
				break;		
			case "test":
				randNum = num_test;
				break;											
			case "icon":
				randNum = num_icon;
				break;		
			case "sand":
				randNum = num_sand;
				break;	
			case "holiday":
				randNum = num_holiday;
				break;		
			case "landslide":
				randNum = num_landslide;
				break;					
		}
		document.getElementById('episode-'+location+'-image').style.backgroundImage="url(img/episode/"+location+"/"+type+"/Card" + randNum + ".png)";	
	}
}

// function windowWidthCheck () {
// 	if ($(window).width() <= 1080) {
// 		mobileCheck	= true;
// 		desktopCheck = false;
// 		return false;
// 	}
// 	else {
// 		mobileCheck	= false;
// 		desktopCheck = true;
// 		return true;
// 	}
// }

// function windowWitdh() {
// 	windowWidthCheck();

// 	if (mobileCheck == true && mobileChange == false) {
// 		mobileChange = true;
// 		desktopImage("mobile");
// 		console.log ("changed to mobile");
// 		desktopChange = false;
// 	}

// 	if (desktopCheck == true && desktopChange == false) {
// 		desktopChange = true;
// 		desktopImage("desktop");
// 		console.log ("changed to Desktop");
// 		mobileChange = false;
// 	}
// }
