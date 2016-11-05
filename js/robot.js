"use strict";

class FistFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 160 + 220)
  }
  
  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  }
}

class SecondFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 600 + 120)
  }
  
  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  }
}

class SecondFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 500 + 300)
  }
  
  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  }
}

var fr = new FistFightingRobot("sleepy", 100)
var er = new FistFightingRobot("doc", 100)
var gr = new FistFightingRobot("grumpy", 100)

console.info("initial state", er, fr, gr)

fr.attack(er);
er.attack(fr);
gr.attack(gr);

console.info("state after round 1", er, fr, gr);

fr.attack(er);
er.attack(fr);
gr.attack(gr);

console.info("state after round 2", er, fr, gr);

var myElement = $('select[name="myName"]');

myElement.val(myElement.find('option').first().val());