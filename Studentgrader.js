//write your code here
// Define a variable to hold the student's grade.
let studentGrade = '';

// Function to generate a grade based on the provided numeric score.
function generateStudentGrade(grade = 0) {
    // Determine the grade based on score ranges.
    if (grade > 79) {
        studentGrade = 'A'; // Score above 79 earns an 'A'.
    } else if (grade >= 60 && grade <= 79) {
        studentGrade = 'B'; // Scores from 60 to 79 earn a 'B'.
    } else if (grade >= 49 && grade <= 59) {
        studentGrade = 'C'; // Scores from 49 to 59 earn a 'C'.
    } else if (grade >= 40 && grade <= 48) {
        studentGrade = 'D'; // Scores from 40 to 48 earn a 'D'.
    } else {
        studentGrade = 'E'; // Any other score earns an 'E'.
    }
    return studentGrade; // Return the generated grade.
}

// Example usage: Generate a grade for a score of 50.
console.log(generateStudentGrade(50));

