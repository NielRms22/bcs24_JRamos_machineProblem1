/*
Program: Computation of Grades using Function
Programmer: Jathniel Ramos
Section: BCS24
Start Date: April 17, 2023
End Date: April 20, 2023
*/

const students = [];
function getAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  return avg;
}


function getGrade(cp, sa, fe) {
  const overall = (cp * 0.2) + (sa * 0.5) + (fe * 0.3);
  let grade;

  if (overall >= 90) {
    grade = 'A';
  } else if (overall >= 80) {
    grade = 'B';
  } else if (overall >= 70) {
    grade = 'C';
  } else if (overall >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

const prompt = require('prompt-sync')();
for (let i = 1; i <= 5; i++) {
  const name = prompt(`Enter name of student ${i}: `);
  const cpGrades = [];
  const saGrades = [];

  for (let j = 1; j <= 5; j++) {
    const cp = parseInt(prompt(`Enter Enabling Assesment grade ${j} for ${name}: `));
    cpGrades.push(cp);
  }

  for (let j = 1; j <= 3; j++) {
    const sa = parseInt(prompt(`Enter Summative Assessment grade ${j} for ${name}: `));
    saGrades.push(sa);
  }

  const fe = parseInt(prompt(`Enter Final Examination grade for ${name}: `));


  const cpAvg = getAverage(cpGrades);
  const saAvg = getAverage(saGrades);

 
  const grade = getGrade(cpAvg, saAvg, fe);

 
  students.push({ name, cpAvg, saAvg, fe, grade });
}


for (const student of students) {
  console.log(`Name: ${student.name}`);
  console.log(`Class Participation: ${student.cpAvg}`);
  console.log(`Summative Assessment: ${student.saAvg}`);
  console.log(`Exam Grade: ${student.fe}`);
  console.log(`Grade: ${student.grade}`);
  console.log('');
}