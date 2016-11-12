'use strict';

var Fighter1, Fighter2;

$( "#createRobots" ).on( "click", function() {
  
	// this is the robot that the user selected from the dropdown
	var player1Robot = $("#player1RobotSelect").val();
	console.log("player1Robot:", player1Robot);

	// if user selects SonRobot
	// 	create new SonRobot
	// if user selects DaughterRobot
	// 	create new DaughterRobot
	if (player1Robot === "SonRobot") {
		Fighter1 = new SonRobot();
	}

	if (player1Robot === "SonRobot2"){
		Fighter1 = new SonRobot2();
	}
	
	if (player1Robot === "DaughterRobot"){
		Fighter1 = new DaughterRobot();
	}

	if (player1Robot === "DaughterRobot2"){
		Fighter1 = new DaughterRobot2();
	}

	if (player1Robot === "CousinRobot"){
		Fighter1 = new CousinRobot();
	}

	if (player1Robot === "CousinRobot2"){
		Fighter1 = new CousinRobot2();
	}


// //Beginning of player2Robot's selections

// this is the robot that the user selected from the dropdown
	var player2Robot = $("#player2RobotSelect").val();

	if (player2Robot === "SonRobot") {
		Fighter2 = new SonRobot();
	}

	if (player2Robot === "SonRobot2") {
		Fighter2 = new SonRobot();
	}

	if (player2Robot === "DaughterRobot") {
		Fighter2 = new DaughterRobot();
	}

	if (player2Robot === "DaughterRobot2") {
		Fighter2 = new DaughterRobot2();
	}

	if (player2Robot === "CousinRobot") {
		Fighter2 = new CousinRobot();
	}

	if (player2Robot === "CousinRobot2") {
		Fighter2 = new CousinRobot2();
	}
	//console.log(Fighter1, Fighter2);

});

$( "#attackRobots" ).on( "click", function() {//I need a reference to the attack btn and output to dom
       	//conditional to check it either player health <= 0 at bottom


       	// var player1Robot = $("#player2RobotSelect").val();

        // console.log(Fighter1.health);
        // console.log(Fighter2.damage);

        //calculation for player 1 health
        var currentHealthP1 = Fighter1.health;
        currentHealthP1 = Fighter1.health - Fighter2.damage 
        Fighter1.health = currentHealthP1;
        // end player 1 health calc
        // console.log(Fighter1.health);


        //calculation for player 2 health
        var currentHealthP2 = Fighter1.health;
        currentHealthP2 = Fighter1.health - Fighter2.damage 
        Fighter1.health = currentHealthP2;
        // end player 2 health calc
         console.log(Fighter2.health);


        $("#player1RobotHealth").text("Fighter 1 health is " + Fighter1.health);
		$("#player2RobotHealth").text("Fighter 2 health is " + Fighter2.health);

});













