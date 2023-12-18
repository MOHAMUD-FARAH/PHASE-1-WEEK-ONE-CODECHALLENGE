// Define a constant representing the speed limit.
const speedLimit = 70;

// Function to calculate penalty points based on the difference between current speed and speed limit.
function calculatePenaltyPoints(currentSpeed) {
    let penaltyPoints = 0;

    // Check if current speed is within or exceeds the speed limit.
    if (currentSpeed <= speedLimit) {
        penaltyPoints = 'OK.WITHIN SPEEDLIMIT'; // Indicates no penalty points if within the limit.
    } else if (currentSpeed > speedLimit) {
        // Calculate penalty points based on the speed exceeded over the limit (5 km/h equals 1 point).
        penaltyPoints = Math.round((currentSpeed - speedLimit) / 5);
        
        // Check if penalty points exceed the maximum limit for license suspension (12 points).
        if (penaltyPoints > 12) {
            penaltyPoints = 'LICENSE SUSPENDED'; // Indicates license suspension for excessive points.
        }
    }

    return penaltyPoints; // Returns the calculated penalty points or status.
}

// Example usage: Calculate penalty points for a speed of 80 km/h.
console.log(calculatePenaltyPoints(80));
