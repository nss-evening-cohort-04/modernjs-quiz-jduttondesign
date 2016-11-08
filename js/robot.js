"use strict";

//make robot classes
//instantiate a couple robots
//make them fight


$(document).ready(function(){
    $("button").click(function(){
        $("input:text").val("HI");
    });
});

function FistFightingRobot (name, health) {
  this.name = name || "a robot";
  this.health = health;
  this.atk = Math.floor(Math.random() * 60);
};

FistFightingRobot.prototype.attack = function (otherRobot) {
  otherRobot.health -= this.atk;
  return this;
};

class FistFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 160 + 220)
  };
  console.info(health)

  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  });
};

class SecondFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 600 + 120)
  };
  
  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  };
};

var fr = new FistFightingRobot("sleepy", 100)
var er = new FistFightingRobot("doc", 100)


console.info("initial state", er, fr)

fr.attack(er);
er.attack(fr);


console.info("state after round 1", er, fr);

fr.attack(er);
er.attack(fr);


console.info("state after round 2", er, fr);

var myElement = $('select[name="myName"]');

myElement.val(myElement.find('option').first().val());

$( "p" ).bind( "dblclick", function() {
  $( "span" ).text( "Double-click happened in " + this.Submit);
});