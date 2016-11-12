"use strict";

function GrandfatherRobot() {
  this.name = "";
  this.damage = getRandom(10,20);
  this.health = getRandom(50,100);
}

GrandfatherRobot.prototype.attack = function attack (otherRobot) {
   otherRobot.health -= this.damage;
   return otherRobot.health <= 0;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function FatherRobot() {
  this.name = "John";
  this.damage += 10;
  this.health += 15;
}
  // Connect the prototype chain from Father to Grandfather - specific to this ex.
FatherRobot.prototype = new GrandfatherRobot();


function AuntRobot() {
  this.name = "Martha Corinne";
  this.health += 10;
  this.damage += 20;
}

AuntRobot.prototype = new GrandfatherRobot();//Connected Aunt level robot to Grandfather


function UncleRobot() {
  this.name = "Ben";
  this.health += 10;
  this.damage += 5;
}
  // Connect the prototype chain from Father to Grandfather - specific to this ex.
UncleRobot.prototype = new GrandfatherRobot();


function SonRobot() {
  this.name = "John-Boy";
  this.health += 30;
  this.damage += 10;
}

  // Connect the prototype chain from Son to Father - specific to this ex.
SonRobot.prototype = new FatherRobot();

function SonRobot2() {
  this.name = "Jim-Bob";
  this.health += 5;
  this.damage += 15;
}

SonRobot2.prototype = new FatherRobot();

//created a new robot on the third level brother to SonRobot


function DaughterRobot() {
  this.name = "Mary Ellen";
  this.health += 5;
  this.damage += 10;
}
  // Connect the prototype chain from Daughter to "Aunt" - specific to this ex.
DaughterRobot.prototype = new AuntRobot();

function DaughterRobot2() {
  this.name = "Elizabeth";
  this.health += 5;
  this.damage += 25;
}

  // Connect the prototype chain from Daughter to "AuntRobot" - specific to this ex.
DaughterRobot2.prototype = new AuntRobot();


function CousinRobot() {
  this.name = "Corabeth";
  this.health += 5;
  this.damage += 5;
}
  // Connect the prototype chain from Son to Father - specific to this ex.
CousinRobot.prototype = new UncleRobot();

function CousinRobot2() {
  this.name = "Ike";
  this.health += 35;
  this.damage += 10;
}

CousinRobot2.prototype = new UncleRobot();

var user1SelectedRobot = new SonRobot2();
console.log("user1SelectedRobot", user1SelectedRobot);

var user2SelectedRobot = new SonRobot2();





// var c = new CousinRobot();
// var g = new GrandfatherRobot();
// console.log("c", c);
// c.attack(g);

// console.log("g", g);
// g.attack(c);







