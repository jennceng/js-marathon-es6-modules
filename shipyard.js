// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let countdown = (count, ship) => {
  if (count === 0) {
    console.log("Blastoff!!");
    ship.takeoff();
  } else {
    setTimeout(function() {
      console.log(`${count}...`);
      countdown(count - 1, ship);
    }, 1000);
  }
}


let launchpad = (ship, crewMembers, engine) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
  console.log(`High Five to our captain, ${ship.captain().name}`);
  ship.mountPropulsion(engine);
  ship.propulsion.addFuel(5);
  countdown(5, ship);
};

let trainCrew = (names) => {
  for(let i = 0; i < names.length; i++) {
    let newCrewMember = new CrewMember(names[i]);
    newCrewMember.trained = true;
    trainedCrew.push(newCrewMember);
  }
}

trainCrew(crewNames);
launchpad(ourShip, trainedCrew, rocket);
