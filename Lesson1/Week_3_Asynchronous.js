let scores = [89,75,90,95,65];
let pass = 0;
let fail = 0;
let sum = 0;
let avg = 0;
let highest = 0;
let lowest = 0;
console.log("students scores:\n" + scores.join("\n"));
for(let i = 0; i < scores.length; i++){



let score = scores[i];
let performance;
let status;

if(score <=100 && score >= 90 ){
performance = "excellent";}
else if(score <= 89 && score >= 80){
performance = "Very good";}
else if(score <= 79 && score >= 75){
performance = "Good";}
else if(score <= 75){
performance = "Failed";}

if(score >= 75){
status = " passed";}
else{
status = "failed";}

if(score >=75 ){
status = "passed"
pass++;}
else {
fail++;}


if(score >= highest){
highest = score;
}
else{
lowest = score;
}


sum += score;
avg = sum /scores.length;

console.log("students " + (i + 1)+ ":" + score + " – " + performance + " – " + status);


}



console.log("Total score :" + sum);
console.log("Average score :" + avg);
console.log("Highest score :" + highest);
console.log("Lowest score :"+ lowest);
console.log("passed :" + pass);
console.log("failed :" + fail);
