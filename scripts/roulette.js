var killWeapon1;
var killWeapon2;
var killWeapon3;
var killWeapon4;

var killCostume1;
var killCostume2;
var killCostume3;
var killCostume4;

var weaponsValue;
var costumeValue;
var wildcardValue;

var costumesArray;
var costumesArrayDifficulty;
var weaponsArray;
var weaponsArrayDifficulty;
var wildcardArray;
var wildcardArrayDifficulty;

var trainingTarget1 = "Kalvin Ritter";
var testTarget1 = "Jasper Knight";

var parisTarget1 = "Viktor Novikov";
var parisTarget2 = "Dalia Margolis";

//var sapienzaTarget1 = "Silvio Caruso";
//var sapienzaTarget2 = "Francesca De Santis";

var locationName;

//--------INFO--------//
// 1 is Easy
// 2 is Medium
// 3 is Hard
//
// Only Set Up To Paris So Far
// Array's start at 0
//--------------------//


// Default Scenario Information
var defaultWeapons = [				"Poison", 	"Gun", 	"Hands", 	"Explosion", 	"Accidental"];
var defaultWeaponsDifficulty = [	1, 			1, 		1, 			3, 				2];

var defaultWildcards = [			"Starting Clothes Only", 	"Can Only Change Outfit Once", 	"Kill Via Throwing A Weapon", 	"One Retry Allowed", 	"Can't Hide Any Bodies", 	"Pick Starting Point"];
var defaultWildcardsDifficulty = [	2,							2,								1,								1,						3,							1];	
//--------------------------------


// Training Scenario Information
var trainingCostumes = [			"Mechanic", "Yacht Crew", 	"Bodyguard", 	"Terry Norfolk"];
var trainingCostumesDifficulty = [	1, 			1, 				2, 				3];

var trainingWeapons = [				"Bust", "Hammer", 	"Crowbar", 	"Wrench"];
var trainingWeaponsDifficulty = [	3, 		1, 			1, 			1];

var trainingWildcards = [];
var trainingWildcardsDifficulty = [];
//--------------------------------


// Final Test Scenario Information
var testCostumes = [			"Airplane Mechanic", 	"Airfield Security", 	"Soviet Soldier", 	"KGB Officer"];
var testCostumesDifficulty = [	1, 						1, 						2, 					3];

var testWeapons = [				"Crowbar", 	"Hammer", 	"Lead Pipe", 	"Wrench"];
var testWeaponsDifficulty = [	3, 			1, 			1, 				1];

var testWildcards = [			"Run The Target Through The Ejector Seat Protocol"];
var testWildcardsDifficulty = [	2];
//--------------------------------


// Paris Scenario Information
var parisCostumes = [			"Stylist", 	"Crew Member", 	"Palace Staff", "Sheikh", 	"Vampire Magician", "Helmet Kruger", 	"Chef", 	"Body Guard", 	"Security Guard", 	"Auction Staff"];
var parisCostumesDifficulty = [	2, 			1, 				2, 				3,			3,					1,					2,			1,				2,					2];

var parisWeapons = [			"Crowbar", 	"Hammer", 	"Lead Pipe", 	"Wrench"];
var parisWeaponsDifficulty = [	3, 			1, 			1, 				1];

var parisWildcards = [				"Must Drop Main Call Chandelier", 	"Exit Via The Helicopter", 	"Start In The Attic", 	"Attend The Auction"];
var parisWildcardsDifficulty = [	2,									2,							3,						1];
//--------------------------------


// Sapienza Scenario Information
var sapienzaCostumes = [			"Delivery Man", "Gardener", "Plumber", 	"Store Clerk",	"Bodyguard", 	"Church Stafff", 	"Priest",	"Waiter", 	"Kitchen Assistant", 	"Chef", "Housekeeper", 	"Mansion Staff", 	"Mansion Security", "Butler", 	"Lab Technician", 	"Biolab Security", 	"Hazmat Suit", 	"Cyclist", 	"Private Detective", 	"Dr. Oscar Lafayette", 	"Street Performer", "Plague Doctor", 	"Golf Instructor"];
var sapienzaCostumesDifficulty = [	2, 				1, 			2,			3,				3,				3,					3,			3,			1,						1,		2,				2,					2,					2,			1,					1,					3,				3,			2,						2,						3,					3,					2];

var sapienzaWeapons = [				"Amputation / Circumsision Knife", "Combat Knife", "Fire Poker", "Hatchet", "Kitchen Knife", "Old Axe", "Scissors", "Battle Axe", "Cleaver", "Fire Axe", "Folding Knife", "Katana", "Letter Opener", "Saber", "Screwdriver"];
var sapienzaWeaponsDifficulty = [	];

var sapienzaWildcards = [			"Must Escape Via The Boat Behind The Mansion", 	"Must Use The Explosive Golfball To Assassinate One Of The Targets", 	"Must Assassinate One Of The Targets With A Sniper", 	"Must Escape In The Seaplane", 	"Must Assassinate Silvo Caruso With A Cannon"];
var sapienzaWildcardsDifficulty = [	1,												2,																		1,														2,								3];
//--------------------------------

function easyDifficulty (difficulty) {
	switch(difficulty) {
		case 'easy':
			basicEasy();
			displayChoices();
			break;
		case 'medium':
			basicMedium();
			displayChoices();
			break;
		case 'hard':
			basicHard();
			displayChoices();
			break;
		case 'everything':
			basicEverything();
			displayChoices();
			break;		
	}
}

function basicEasy () {
	console.log("Easy To Add");
}

function basicMedium () {
	console.log("Medium To Add");
}

function basicHard () {
	console.log("Hard To Add");	
}


function basicEverything () {
	locationName = sessionStorage.getItem('forwardToLocation');
	
	console.log("-----Running Everything Script-----");
	switch (locationName) {
		case 'training':
			trainingVariables();
			break;
		case 'test':
			testVariables();
			break;			
		case 'paris':
			parisVariables();
			break;
		case 'marrakesh':
			console.log("To Add");
			break;
	}
	itemValueSet();	
	output();
}

function output () {
	console.log("-----"+locationName+"-----")
	console.log(
//	alert(	
			"Weapon to Use: "+weaponsArray[weaponsValue] +"\n\n"
		  	+"Weapon Position In Array (+1): "+ weaponsValue +"\n"
		  	+"Weapon Array: \n"+ weaponsArray +"\n\n"
		  	+"Weapon Difficulty: "+ weaponsArrayDifficulty[weaponsValue] +"\n"
		  	+"Weapon Difficulty Array: "+ weaponsArrayDifficulty +"\n"
	);
	
	console.log(
//	alert(	
			"Costume to Use: "+costumesArray[costumesValue] +"\n\n"
		  	+"Costume Position In Array (+1): "+ costumesValue +"\n"
		  	+"Costume Array: \n"+ costumesArray +"\n\n"
		  	+"Costume Difficulty: "+ costumesArrayDifficulty[costumesValue] +"\n"
		  	+"Costume Difficulty Array: "+ costumesArrayDifficulty +"\n"
	);
		
	console.log(
//	alert(	
			"Wildcard to Use: "+wildcardArray[wildcardValue] +"\n\n"
		  	+"Wildcard Position In Array (+1): "+ wildcardValue +"\n"
		  	+"Wildcard Array: \n"+ wildcardArray +"\n\n"
		  	+"Wildcard Difficulty: "+ wildcardArrayDifficulty[wildcardValue] +"\n"
		  	+"Wildcard Difficulty Array: "+ wildcardArrayDifficulty +"\n"
	);	
}

function trainingVariables () {
	weaponsArray = defaultWeapons.concat( trainingWeapons );
	weaponsArrayDifficulty = defaultWeaponsDifficulty.concat( trainingWeaponsDifficulty );	
	
	costumesArray = trainingCostumes;
	costumesArrayDifficulty = trainingCostumesDifficulty;	

	wildcardArray = defaultWildcards.concat( trainingWildcards );
	wildcardArrayDifficulty = trainingWildcardsDifficulty.concat( trainingWildcardsDifficulty );
}

function testVariables () {
	weaponsArray = defaultWeapons.concat( testWeapons );
	weaponsArrayDifficulty = defaultWeaponsDifficulty.concat( testWeaponsDifficulty );	
	
	costumesArray = testCostumes;
	costumesArrayDifficulty = testCostumesDifficulty;	

	wildcardArray = defaultWildcards.concat( testWildcards );
	wildcardArrayDifficulty = defaultWildcardsDifficulty.concat( testWildcardsDifficulty );
}

function parisVariables () {
	weaponsArray = defaultWeapons.concat( parisWeapons );
	weaponsArrayDifficulty = defaultWeaponsDifficulty.concat( parisWeaponsDifficulty );	
	
	costumesArray = parisCostumes;
	costumesArrayDifficulty = parisCostumesDifficulty;	

	wildcardArray = defaultWildcards.concat( parisWildcards );
	wildcardArrayDifficulty = defaultWildcardsDifficulty.concat( parisWildcardsDifficulty );
}

function itemValueSet () {
	weaponsValue = Math.floor( Math.random() * weaponsArray.length );
	costumesValue = Math.floor( Math.random() * costumesArray.length );	
	wildcardValue = Math.floor( Math.random() * wildcardArray.length );	
}

function weaponDifficultyCheck (type) {

}

function costumeDifficultyCheck (type) {
	
}

function wildCardDifficultyCheck(type) {
	
}

function displayChoices() {
	console.log("Run Results");
	$("#results").fadeToggle("slow", 0.75);	
}

	// add check to compare weapon array with difficulty array
	// and add it for training weapons, and costumes, and wildcards.