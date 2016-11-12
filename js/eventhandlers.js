'use strict';

var Fighter1, Fighter2;
$( "#createRobots" ).on( "click", function() {
	$("#attackRobots").prop("disabled",false);
	$("#createRobots").prop("disabled",true);
	  

	// this is the robot that the user selected from the dropdown
	var player1Robot = $("#player1RobotSelect").val();
	console.log("player1Robot:", player1Robot);

	// if user selects SonRobot
	// 	create new SonRobot
	// if user selects DaughterRobot
	// 	create new DaughterRobot
	if (player1Robot === "SonRobot") {
		Fighter1 = new SonRobot();
		Fighter1.name = $('#exampleInputEmail1').val();//get the value off the text box
	}

	if (player1Robot === "SonRobot2"){
		Fighter1 = new SonRobot2();
		Fighter1.name = $('#exampleInputEmail1').val();
	}
	
	if (player1Robot === "DaughterRobot"){
		Fighter1 = new DaughterRobot();
		Fighter1.name = $('#exampleInputEmail1').val();
	}

	if (player1Robot === "DaughterRobot2"){
		Fighter1 = new DaughterRobot2();
		Fighter1.name = $('#exampleInputEmail1').val();
	}

	if (player1Robot === "CousinRobot"){
		Fighter1 = new CousinRobot();
		Fighter1.name = $('#exampleInputEmail1').val();
	}

	if (player1Robot === "CousinRobot2"){
		Fighter1 = new CousinRobot2();
		Fighter1.name = $('#exampleInputEmail1').val();
	}


// //Beginning of player2Robot's selections

// this is the robot that the user selected from the dropdown
	var player2Robot = $("#player2RobotSelect").val();

	if (player2Robot === "SonRobot") {
		Fighter2 = new SonRobot();
		Fighter2.name = $('#exampleInputEmail2').val();
	}

	if (player2Robot === "SonRobot2") {
		Fighter2 = new SonRobot();
		Fighter2.name = $('#exampleInputEmail2').val();
	}

	if (player2Robot === "DaughterRobot") {
		Fighter2 = new DaughterRobot();
		Fighter2.name = $('#exampleInputEmail2').val();
	}

	if (player2Robot === "DaughterRobot2") {
		Fighter2 = new DaughterRobot2();
		Fighter2.name = $('#exampleInputEmail2').val();
	}

	if (player2Robot === "CousinRobot") {
		Fighter2 = new CousinRobot();
		Fighter2.name = $('#exampleInputEmail2').val();
	}

	if (player2Robot === "CousinRobot2") {
		Fighter2 = new CousinRobot2();
		Fighter2.name = $('#exampleInputEmail2').val();
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
        var currentHealthP2 = Fighter2.health;
        currentHealthP2 = Fighter2.health - Fighter1.damage 
        Fighter2.health = currentHealthP2;
        // end player 2 health calc
         console.log(Fighter2.health);

        $("#player1RobotHealth").text("Fighter 1 health is " + Fighter1.health);
		$("#player2RobotHealth").text("Fighter 2 health is " + Fighter2.health);
		_checkGameOver();
		
	});

    //Print "Winner" to the Dom
let _checkGameOver = () =>{
	let dom;
	$('#player1RobotHealth').show();
	$('#player2RobotHealth').show();


	if(Fighter1.health <= 0 && Fighter2.health > 0){//player 1 dead
	    dom = `${Fighter1.name} is Dead. Player ${Fighter2.name} wins with ${Fighter2.type}`;
	    $("#attackRobots").prop("disabled",true);

	} else if(Fighter2.health <= 0 && Fighter1.health > 0){//player 2 dead
	    dom = `${Fighter2.name} is Dead. Player ${Fighter1.name} wins with ${Fighter1.type}`
	    $("#attackRobots").prop("disabled",true);

	} else if(Fighter1.health <= 0 && Fighter2.health <= 0){ //both players dead.
	    dom = `${Fighter1.name} and ${Fighter2.name} are both dead. ${Fighter1.type} and ${Fighter2.type}`;
		$("#attackRobots").prop("disabled",true);
	}

	$("#winner").text(dom);
	//console.log("here is where we disabled the button")
     

};












