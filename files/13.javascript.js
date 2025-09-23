function findAverageScores(s1,s2,s3){
  return (s1+s2+s3)/3;
}

const teamDolphins = (findAverageScores(97,108,89)).toFixed(2);
const teamKoalas = (findAverageScores(88,91,110)).toFixed(2);

if(teamDolphins > teamKoalas){
  console.log(`Team Dolphins is the winner of the competition\n score: ${teamDolphins}:${teamKoalas}`);
}else if(teamDolphins < teamKoalas){
  console.log(`Team Koalas is the winner of the competition\n score: ${teamKoalas}:${teamDolphins}`);
}else{
  console.log(`Its a draw!!`);
}