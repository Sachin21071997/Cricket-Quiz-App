const readLineSync=require('readline-sync');
const QuizList = [ {
  id : 1,
  question: "How long is the wicket on a cricket pitch?",
  options: ["A: 18 yards", "B: 20 yards", "C: 22 yards","D: 24 yards"],
  Correct_Option: "C"
  },
  {
  id : 2,
  question: "Who did England beat in the final of the 2019 Cricket World Cup?",
  options: ["A: Australia", "B: India","C: New Zealand", "D: South Africa"],
  Correct_Option: "A"
  },   
  {               
  id : 3,
  question: "What is the largest cricket stadium in the world?",
  options: ["A: Eden Gardens", "B: Melbourne Cricket Club", "C: Lords", "D: Narendra Modi Stadium"],
  Correct_Option: "D"
  },
  {
  id : 4,                   
  question: "What is the nickname of Sachin Tendulkar?",
  options: ["A: The Little Genius","B: The Little Master", "C: The God of Cricket", "D: Master Blaster"],
  Correct_Option: "D"
  },
  {
  id : 5,                   
  question: "Who is the first batsman to cross 10,000 runs in tests?",
  options: ["A: Sunil Gavaskar", "B: Sachin Tendulkar","C: Allan Border", "D: Brian Lara"],
  Correct_Option: "A"
  }]                
function quiz(QuizList){
const userInput=readLineSync.question(`${QuizList.id}. ${QuizList.question}\n${QuizList.options.join('\n')}\nType your Option : `);
  if(userInput===QuizList.Correct_Option){
    score++;
    console.log("Correct Answer");
  }
  else if(userInput !== "A" && userInput !=="B" && userInput !="C" && userInput !== "D"){
    console.log("Incorrect Input, Please enter from A to D only")
  }
  else{
    console.log( `Wrong Answer\nCorrect Answer is ${QuizList.Correct_Option}`);
  }
}
console.log("Welcome to the Annual Cricket Quiz");
let wanna_play = readLineSync.question('Do u want to play Cricket Quiz\nYes \\ No\n');
let score=0;
while(wanna_play==="Yes"){
  QuizList.forEach(quiz);
  console.log(`Your Total Score is ${score}/${QuizList.length}`);
  if(score==QuizList.length){
    console.log("You are expert in Cricket");
  }
  else if(score>QuizList.length/2){
    console.log("Performed Well, Keep it Up")
  }
  else{
    console.log(`Don't be Sad, u can learn more about Cricket by giving more such Quizes`);
  }
  wanna_play = readLineSync.question('Do u want to play Cricket Quiz again\nYes\\No\n');
}



