"use strict";

class FistFightingRobot {
  constructor (name, health) {
    this.name = name || "a robot"
    this.health = health || 150
    this.atk = Math.floor(Math.random() * 60 + 20)
  }
  
  attack (otherRobot) {
    otherRobot.health -= this.atk;
    return this; 
  }
}

var fr = new FistFightingRobot("george", 100)
var er = new FistFightingRobot("fred", 100)
var gr = new FistFightingRobot("dan", 100)

console.info("initial state", er, fr, gr)

fr.attack(er);
er.attack(fr);
gr.attack(gr);

console.info("state after round 1", er, fr, gr);

fr.attack(er);
er.attack(fr);
gr.attack(gr);

console.info("state after round 2", er, fr, gr);

