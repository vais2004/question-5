
const readline = require('readline-sync')

const data = [];
let maximumMarks = 0;
let firstRank;

for (let i = 0; i < 5; i++) {
  const userName = readline.question("what's ypur name ");
  const unitTestMarks = Number(readline.question("Enter your unit marks "));
  const preFinalMarks = Number(readline.question("Enter your pre final marks "));
  const finalMarks = Number(readline.question("Enter your final marks "));
  const totalMarks = unitTestMarks + preFinalMarks + finalMarks;
  console.log("------------")
  
  data.push({ userName, unitTestMarks, preFinalMarks, finalMarks, totalMarks });

}

for (let i = 0; i < data.length; i++) {
  if (data[i].totalMarks > maximumMarks) {
    maximumMarks = data[i].totalMarks;
    firstRank = data[i].userName;
  }
}

let average = 0;
for (let i = 0; i < data.length; i++) {
  average += data[i].totalMarks;
}
average /= data.length;

console.log(firstRank + " has git the first Rank and Highest total mark is : " + maximumMarks + " and the average marks is " + average);
