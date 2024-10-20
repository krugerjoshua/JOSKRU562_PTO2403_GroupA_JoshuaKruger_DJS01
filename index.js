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

const newDistanceKm = distanceKm + (velocityKmH * timeSeconds) //calcultes new distance
const remainingFuel = fuelBurnRateKgPerSecond*timeSeconds //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const velocityMs = velocityKmH * (1000 / 3600) // Unit conversion for proper calculation
function calcNewVel(velocityMs, accelerationMs2, timeSeconds) {
  if (velocityMs < 0 || accelerationMs2 < 0 ||  timeSeconds < 0) {
    console.log("Incorrect values entered, please try again with positive numbers.")
    return
  } else {
    return velocityMs + (accelerationMs2 * timeSeconds)
  }
}

const newVelocityMs = calcNewVel(velocityKmH, accelerationMs2, timeSeconds) //calculates new velocity based on acceleration.
const newVelocityKmH = velocityMs * (1000 / 3600)

console.log(`Corrected New Velocity: ${newVelocityKmH} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






