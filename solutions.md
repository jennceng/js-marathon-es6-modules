```js
// shipyard.js
let launchpad = () => {
  console.log("starting preflight procedures!")
};

launchpad();

```

---

Step 1

```js
// Spaceship.js
class Spaceship {
  constructor(name) {
    this.name = name;
  }
}

module.exports = Spaceship;
```

```js
// shipyard.js
let Spaceship = require('./Spaceship');

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
};

launchpad(ourShip);
```

---

Step 2

```js
//shipyard.js

let Spaceship = require('./Spaceship');
let CrewMember = require'./CrewMember');

let crewNames = ["Juice", "J-bass", "Jeben"];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
};

launchpad(ourShip);
```

```js
// CrewMember.js
class CrewMember {
  constructor(name) {
    this.name = name;
    this.trained = false;
  }
}

module.exports = CrewMember;
```

---

Step 3

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
};

let trainCrew = (names) => {
  for(let i = 0; i < names.length; i++) {
    let newCrewMember = new CrewMember(names[i]);
    trainedCrew.push(newCrewMember);
  }
}

launchpad(ourShip);
trainCrew(crewNames);
```

---

Step 4

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship, crewMembers) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
};

let trainCrew = (names) => {
  for(let i = 0; i < names.length; i++) {
    let newCrewMember = new CrewMember(names[i]);
    newCrewMember.trained = true;
    trainedCrew.push(newCrewMember);
  }
}

trainCrew(crewNames);
launchpad(ourShip, trainedCrew);
```

```js
// Spaceship.js
class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
  }

  loadCrew(crew) {
    for(let i = 0; i < crew.length; i++) {
      let newCrewMember = crew[i];
      this.crew.push(newCrewMember);
      console.log(`Welcome aboard the ${this.name}, ${newCrewMember.name}`);
    }
  }
}

module.exports = Spaceship;
```

---

Step 5

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship, crewMembers) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
};

let trainCrew = (names) => {
  for(let i = 0; i < names.length; i++) {
    let newCrewMember = new CrewMember(names[i]);
    newCrewMember.trained = true;
    trainedCrew.push(newCrewMember);
  }
}

trainCrew(crewNames);
launchpad(ourShip, trainedCrew);
```

```js
class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
  }

  loadCrew(crew) {
    for(let i = 0; i < crew.length; i++) {
      let newCrewMember = crew[i];
      this.crew.push(newCrewMember);
      console.log(`Welcome aboard the ${this.name}, ${newCrewMember.name}`);
    }
  }

  captain() {
    let totalCrewMembers = this.crew.length;
    let random_number = Math.floor(Math.random() * totalCrewMembers);
    return this.crew[random_number];
  }
}

module.exports = Spaceship;
```

---

Step 6

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship, crewMembers) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
  console.log(`High Five to our captain, ${ship.captain().name}`);
};

let trainCrew = (names) => {
  for(let i = 0; i < names.length; i++) {
    let newCrewMember = new CrewMember(names[i]);
    newCrewMember.trained = true;
    trainedCrew.push(newCrewMember);
  }
}

trainCrew(crewNames);
launchpad(ourShip, trainedCrew);
```

---

Step 7

```js
// Rocket.js
let rocket = {
  fuel: 0,
  addFuel(fuelAmount) {
    this.fuel += fuelAmount;
    console.log(`Fuel is now at ${this.fuel} liters`);
  }
};
```

---

Step 8

```js
// Rocket.js
let rocket = {
  fuel: 0,
  addFuel(fuelAmount) {
    this.fuel += fuelAmount;
    console.log(`Fuel is now at ${this.fuel} liters`);
  },
  fire() {
    if(this.fuel > 1) {
      this.fuel -= 1;
      console.log(`Engines have been fired! Fuel now at ${this.fuel}`);
      return true;
    } else {
      console.log(`Engines failed to fire!  Please refuel!`);
      return false;
    }
  }
};

module.exports = rocket;
```

---

Step 9

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship, crewMembers, engine) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
  console.log(`High Five to our captain, ${ship.captain().name}`);
  ship.mountPropulsion(engine);
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
```

```js
let rocket = {
  fuel: 0,
  addFuel(fuelAmount) {
    this.fuel += fuelAmount;
    console.log(`Fuel is now at ${this.fuel} liters`);
  },
  fire() {
    if(this.fuel > 1) {
      this.fuel -= 1;
      console.log(`Engines have been fired! Fuel now at ${this.fuel}`);
    } else {
      console.log(`Engines failed to fire!  Please refuel!`)
    }
  }
};

module.exports = rocket;
```

---

Step 10

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let launchpad = (ship, crewMembers, engine) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
  console.log(`High Five to our captain, ${ship.captain().name}`);
  ship.mountPropulsion(engine);
  ship.propulsion.addFuel(5);
  ship.takeoff();
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

```

```js
class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  loadCrew(crew) {
    for(let i = 0; i < crew.length; i++) {
      let newCrewMember = crew[i];
      this.crew.push(newCrewMember);
      console.log(`Welcome aboard the ${this.name}, ${newCrewMember.name}`);
    }
  }

  captain() {
    let totalCrewMembers = this.crew.length;
    let random_number = Math.floor(Math.random() * totalCrewMembers);
    return this.crew[random_number];
  }

  mountPropulsion(engine) {
    this.propulsion = engine;
    console.log("Propulsion mounted!");
  }

  takeoff() {
    if(this.propulsion.fire()) {
      console.log('wooooosh');
    } else {
      console.log('massive fail to launch');
    }
  }
}

module.exports = Spaceship;
```

---

Step 11

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let countdown = (count) => {
  if (count === 0) {
    console.log("Blastoff!!");
  } else {
    console.log(`${count}`);
    countdown(count - 1);
  }
}

let launchpad = (ship, crewMembers, engine) => {
  console.log("starting preflight procedures!");
  console.log(`Welcome aboard the ${ship.name}`);
  ship.loadCrew(crewMembers);
  console.log(`High Five to our captain, ${ship.captain().name}`);
  ship.mountPropulsion(engine);
  ship.propulsion.addFuel(5);
  countdown(5);
  ship.takeoff();
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
```

---

Step 12

```js
// YOUR CODE GOES HERE
let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let crewNames = ["Juice", "J-bass", "Jeben"];
let trainedCrew =[];

let ourShip = new Spaceship("Jennz Frennzship");

let countdown = (count) => {
  if (count === 0) {
    console.log("Blastoff!!");
  } else {
    setTimeout(() => {
      console.log(`${count}...`);
      countdown(count - 1);
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
  countdown(5);
  ship.takeoff();
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
```

---

Step 13

```js
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
    setTimeout(() => {
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
```
