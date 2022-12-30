

class Car {
  spareTyres = 1
  engineCount = 1
  numberOfDoors

  startEngine(){
    console.log(`Engine running!\n`)
  }
  static numberOfTyres = 4
}
const car = new Car();

// Accessing a class property

console.log(car.spareTyres);

// Adding a value to a property
car.numberOfDoors = 4
console.log(car)

// Mutating a static property
Car.numberOfTyres = 6
console.log(car, Car)

// How to call a class method
car.startEngine();