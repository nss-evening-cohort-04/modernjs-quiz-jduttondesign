'use strict';
console.log("pick me");

$( "#createRobots" ).on( "click", function() {
  
	// this is the robot that the user selected from the dropdown
	var player1Robot = $("#player1RobotSelect").val();
	console.log("player1Robot: ", player1Robot);

	// if user selects SonRobot
	// 	create new SonRobot
	// if user selects DaughterRobot
	// 	create new DaughterRobot
	if ( player1Robot === "SonRobot") {
		var Fighter1 = new SonRobot();
	}

	// var Fighter1 = new DaughterRobot();
	console.log("Fighter1",Fighter1)	















});
