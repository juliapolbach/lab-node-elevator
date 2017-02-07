/* jshint esversion: 6*/
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = '';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.timer = setInterval(() => {this.update();}, 1000);

  }

  stop() {
    clearInterval(this.timer);
 }

  update() {
    this.log();
    this.floorUp();
    this.call();
    if (this.waitingList.length !== 0) {
      _passengersEnter();
    }
   }

  _passengersEnter() {
    this.passengers.concat(...this.waitingList);
    this.waitingList.shift();
    console.log("");
  }

  _passengersLeave() { }

  floorUp() {
    if (this.floor < 10) {
      this.direction = 'Up';
      return this.floor += 1;
    } else {
      this.stop();
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.direction = 'down';
      return this.floor -= 1;
    } else {
      this.stop();
    }
  }

  call(person) {
    this.waitingList.push(person);
    // this.requests.push(person.originFloor);
  }

  log() {
    console.log('Direction :' + this.direction);
    console.log('Floor :' + this.floor);
  }
}

module.exports = Elevator;
