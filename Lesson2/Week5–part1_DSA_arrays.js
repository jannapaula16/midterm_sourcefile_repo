// Starting Data
'use strict';
console.log('STUDENT SCORE ARRAY ANALYZER');
// STORE NATIN UNG ORIGINAL NAMES AND FINAL SCORES.
const studentNames = ['Ana','Ben','Carla','Daniel','Ella'];
const studentScores = [85,72,91,64,78];
//STORE NAMAN NATIN ANG THREE ACTIVITY SCORES NG BAWAT ORIGINAL STUDENT.
const activityScores = [
    [80,85,90],
    [70,72,74],
    [88,92,95],
    [60,65,67],
    [75,78,81]];
    //PRESERVE NATIN ANG ORIGINAL NAMES PARA SA ACTIVITY MATRIX.
    const originalNames = Array.from (studentNames);
    
    //ORIGINAL RECORDS.
    
    console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

// Mag add tayo ng new students.
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

//Magremove at replace tayo ng records.
console.log(`\n PART C:REMOVE AND REPLACE RECORDS `);
studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();
const danielIndex = studentNames.indexOf(`Daniel`);
studentNames.splice(danielIndex,1);
studentScores.splice(danielIndex,1);
studentNames.splice(2,0,`Grace`);
studentScores.splice(2,0,82);
console.log(`Names:`,studentNames);
console.log(`Scores:`,studentScores);

//class statistics.
console.log('\nPART D: CLASS STATISTICS');

let totalScore = 0;

for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];}
const averageScore = totalScore / studentScores.length;

let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }

  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];}
}

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

//Passing score analysis.

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScores = studentScores.filter(score => score >= 75);

const statuses = studentScores.map(score => {
  if (score >= 75) {
    return 'Passed';
  } else {
    return 'Failed';
  }
});

const atLeastOneFailed = studentScores.some(score => score < 75);

const allStudentsPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

// Mag sort at search.
console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);

sortedScores.sort((a, b) => b - a);

const contains91 = sortedScores.includes(91);
const indexOf91 = sortedScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

//Gawa tayo ng two dimensional array.
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {

  let rowTotal = 0;

  for (let j = 0; j < activityScores[i].length; j++) {
    console.log(
      `${originalNames[i]} - Activity ${j + 1}: ${activityScores[i][j]}`
    );

    rowTotal += activityScores[i][j];
  }

  const rowAverage = rowTotal / activityScores[i].length;

  activityAverages.push(rowAverage);

  console.log(
    `${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`
  );
}

console.log('Activity Averages:', activityAverages);

//TEXT SUMMARY. 
console.log(`\n PART H: TEXT SUMMARY`);
console.log(`Students:`,studentNames.join(`|`));



