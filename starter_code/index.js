/* jshint esversion: 6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');
var _ = require('lodash');

let elevator = new Elevator ();
let person = new Person ('Sue', 2, 7);
elevator.start();
