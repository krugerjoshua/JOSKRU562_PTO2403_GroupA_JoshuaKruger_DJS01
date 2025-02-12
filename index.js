/*
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
*/

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const fuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)


// Pick up an error with how the function below is called and make it robust to such errors
// Unit conversion for proper calculation
const velocityMs = velocityKmH * (1000 / 3600) 

function calcNewVel(velocityMs, accelerationMs2, timeSeconds) {
  if (velocityMs < 0 || accelerationMs2 < 0 ||  timeSeconds < 0) {
    console.log("Incorrect values entered, please try again with positive numbers.")
    return
  } else {
    return velocityMs + accelerationMs2 * timeSeconds
  }
}

//calculates new velocity based on acceleration.
const newVelocityMs = calcNewVel(velocityMs, accelerationMs2, timeSeconds) 
const newVelocityKmH = newVelocityMs * (3600 / 1000)

//calcultes new distance
const newDistanceKm = distanceKm + (velocityMs * timeSeconds + 0.5 * accelerationMs2 * timeSeconds ** 2) / 1000;

// Fuel calculation, calculates remaining fuel
const remainingFuel = fuelKg - fuelBurnRateKgPerSecond * timeSeconds

console.log(`Corrected New Velocity: ${newVelocityKmH.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
