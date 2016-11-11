'use strict';

$( "#createRobots" ).on( "click", function() {
  
	// this is the robot that the user selected from the dropdown
	var player1Robot = $("#player1RobotSelect").val();
	console.log("player1Robot:", player1Robot);

	// if user selects SonRobot
	// 	create new SonRobot
	// if user selects DaughterRobot
	// 	create new DaughterRobot
	if (player1Robot === "SonRobot") {
		var Fighter1 = new SonRobot();
	}

	if (player1Robot === "SonRobot2"){
		var Fighter1 = new SonRobot2();
	}
	
	if (player1Robot === "DaughterRobot"){
		var Fighter1 = new DaughterRobot();
	}

	if (player1Robot === "DaughterRobot2"){
		var Fighter1 = new DaughterRobot2();
	}

	if (player1Robot === "CousinRobot"){
		var Fighter1 = new CousinRobot();
	}

	if (player1Robot === "CousinRobot2"){
		var Fighter1 = new CousinRobot2();
	}


// //Beginning of player2Robot's selections

// this is the robot that the user selected from the dropdown
	var player2Robot = $("#player2RobotSelect").val();
	console.log("player2Robot:", player2Robot);

	if (player2Robot === "SonRobot") {
		var Fighter2 = new SonRobot();
	}

	if (player2Robot === "SonRobot2") {
		var Fighter2 = new SonRobot();
	}

	if (player2Robot === "DaughterRobot") {
		var Fighter2 = new DaughterRobot();
	}

	if (player2Robot === "DaughterRobot2") {
		var Fighter2 = new DaughterRobot2();
	}

	if (player2Robot === "CousinRobot") {
		var Fighter2 = new CousinRobot();
	}

	if (player2Robot === "CousinRobot2") {
		var Fighter2 = new CousinRobot2();
	}

//reference to attack btn out

//reference to each p tag health outputs

//when button gets clicked 

//.text in jquery putting new text in p tag/dom

//determining if the game is over boolean output

});



// var Fighter1 = new DaughterRobot();
	//console.log("Fighter1",Fighter1)
