// let mass1 = 78;
// let height1 = 1.69;
// let mass2 = 92;
// let height2 = 1.95;

// console.log("hii");
// let bmi1 = mass1 / (height1 * height1);
// let bmi2 = mass2 / (height2 * height2);

// let markHigherBMI = bmi1 > bmi2;
// console.log("BMI of Mark: ", bmi1);
// console.log("BMI of John: ", bmi2);

function calcBMI(mass, height){
  return mass / (height * height);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight){
  const markBMI = calcBMI(markMass, markHeight);
  const johnBMI = calcBMI(johnMass, johnHeight);
  const markHigherBMI = markBMI > johnBMI;

  console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
  console.log(`John's BMI: ${johnBMI.toFixed(2)}`);
  console.log(`Does Mark have a higher BMI? ${markHigherBMI}`);
  console.log("--------------------------------------------------\n");
}

//Test Data
console.log("Data 1:");
compareBMI(78, 1.69, 92, 1.95);

console.log("Data 2:");
compareBMI(95, 1.88, 85, 1.76);
