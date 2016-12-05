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
     console.log("to infinity and beyond!");
    } else {
      console.log('massive fail to launch');
    }
  }
}

module.exports = Spaceship;
