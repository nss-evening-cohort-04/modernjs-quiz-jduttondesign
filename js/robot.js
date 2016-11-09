"use strict";

//make robot classes
//instantiate a couple robots
//make them fight

console.log("inside robot");  
var inputObj = document.createElement("input");   
//inputObj.type = "submit"

//var myElement = $('#select[name="myName"]');

 // myElement.val(myElement.find('option').first().val());

 //    $( "p" ).bind( "dblclick", function() {
 //    $( "span" ).text( "Double-click happened in " + this.Submit);

function GrandfatherRobot() {
  this.name = "";
  this.damage = 0;
  this.health = 0;
  this.weapon = null;
}

function FatherRobot() {
  this.damageBoost = 5;
  this.name = "Bob";
}
  // Connect the prototype chain from Father to Grandfather - specific to this ex.
FatherRobot.prototype = new GrandfatherRobot();

function SonRobot() {
  this.name = "Fred";
  this.damage += this.damageBoost;
  this.isSomthingDifferent = true;
  this.health = Math.floor(Math.random() * 160 + 220);
}
  // Connect the prototype chain from Son to Father - specific to this ex.
SonRobot.prototype = new FatherRobot();

function SonRobot2() {
this.name = "Alex";
this.damage += this.damageBoost;
this.isSomthingDifferent2 = true;
this.health = Math.floor(Math.random() * 150 + 210);
}

SonRobot2.prototype = new FatherRobot();

var user1SelectedRobot = new SonRobot2();//created a new robot on the third level brother to SonRobot
console.log("user1SelectedRobot", user1SelectedRobot);

function AuntRobot() {
  this.name = "Hilma";
  this.health = 10;
  this.damage += 20;
  this.weapon = null;
}

AuntRobot.prototype = new GrandfatherRobot();//Connected Aunt level robot to Grandfather

function DaughterRobot() {
  this.name = "Sallie";
  this.damage += 20;
  this.health += Math.floor(Math.random() * 100 + 200);
  this.weapon = null;
}
  // Connect the prototype chain from Daughter to "Aunt" - specific to this ex.
DaughterRobot.prototype = new AuntRobot();

function DaughterRobot2() {
  this.name = "Betsy";
  this.damage += 40;
  this.health += Math.floor(Math.random() * 100 + 200);
  this.weapon = null;
}

  // Connect the prototype chain from Daughter to "AuntRobot" - specific to this ex.
DaughterRobot2.prototype = new AuntRobot();

function UncleRobot() {
  this.damageBoost = 5;
  this.name = "Tom";
}
  // Connect the prototype chain from Father to Grandfather - specific to this ex.
UncleRobot.prototype = new GrandfatherRobot();

function CousinRobot() {
  this.name = "Mark";
  this.damage += this.damageBoost;
  this.health = Math.floor(Math.random() * 200 + 250);
  this.isSomthingDifferent = true;
}
  // Connect the prototype chain from Son to Father - specific to this ex.
CousinRobot.prototype = new UncleRobot();

function CousinRobot2() {
  this.name = "Dan";
  this.damage += this.damageBoost;
  this.isSomthingDifferent2 = true;
  this.health = Math.floor(Math.random() * 260 + 320);
}

CousinRobot2.prototype = new UncleRobot();


// var WilliamRobot = new CousinRobot2();
// console.log("WilliamRobot", WilliamRobot);

// function attack (otherRobot) {
//      otherRobot.health -= this.atk;
//      return this;

// function attack (otherRobot2) {
//      otherRobot2.health -= this.atk;
//      return this;

 //return NewRobot; 
  //})(Robot || {});



// function FistFightingRobot (name, health) {
//   this.name = name || "a robot";
//   this.health = health;
//   this.atk = Math.floor(Math.random() * 60);
// };

// FistFightingRobot.prototype.attack = function (otherRobot) {
//   otherRobot.health -= this.atk;
//   return this;
// };

// class FistFightingRobot {
//   constructor (name, health) {
//     this.name = name || "a robot"
//     this.health = health || 150
//     this.atk = Math.floor(Math.random() * 160 + 220)
//   };
//   console.info(health)

//   attack (otherRobot) {
//     otherRobot.health -= this.atk;
//     return this; 
//   });
// };

// class SecondFightingRobot {
//   constructor (name, health) {
//     this.name = name || "a robot"
//     this.health = health || 150
//     this.atk = Math.floor(Math.random() * 600 + 120)
//   };
  
//   attack (otherRobot) {
//     otherRobot.health -= this.atk;
//     return this; 
//   };
// };

// var fr = new FistFightingRobot("sleepy", 100)
// var er = new FistFightingRobot("doc", 100)


// console.info("initial state", er, fr)

// fr.attack(er);
// er.attack(fr);

// console.info("state after round 1", er, fr);

// fr.attack(er);
// er.attack(fr);


// console.info("state after round 2", er, fr);

// var myElement = $('select[name="myName"]');

// myElement.val(myElement.find('option').first().val());

// $( "p" ).bind( "dblclick", function() {
//   $( "span" ).text( "Double-click happened in " + this.Submit);
// });