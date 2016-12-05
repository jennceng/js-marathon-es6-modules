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
