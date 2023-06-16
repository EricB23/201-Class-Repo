'use strict';

let userName = prompt('Hi what is your name?');

alert('Hi' + userName + 'welcome to my page!');


let userPoints = 0;
birthplace('Was I born in Nashville?');
function birthPlace(userinput){

let answer1 = prompt(userinput);
console.log('Was I born in Nashville?');

}if (answer1 === 'yes' || answer1 === 'y') {
  alert('Correct, on to the next question');
userPoints++;

} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Nope try again');
}
else {
  alert('That answer is not valid');
 
}
}
birthdate('My birthday is in June?');

function birthdate(userinput){
let answer2 = prompt(userinput);

}if (answer2 === 'yes' || answer2 === 'y') {

  alert('Right again, Keep going!!' );
  userPoints++;

} else if (answer2 === 'no' || answer2 === 'n') {

  alert('Only 11 other months right, who could have known');
} else {
  alert('That answer is not valid');

}
}


childhood('I was an only child growing up?');
function childhood(userinput){
let answer3 = prompt(userinput);

}if (answer3 === 'yes' || answer3 === 'y') {
  
  alert('It was lonely but your right' );
  
} else if (answer3 === 'no' || answer3 === 'n') {

  alert('I wish but try again friend.');
} else {
  alert('That answer is not valid');
}



sports('I played football and baseball growing up?');
function sports(userinput){
let answer4 = prompt(userinput);

}if (answer4 === 'yes' || answer4 === 'y') {

  alert('Ah yes, I loved running back and shortstop' );
  userPoints++;

} else if (answer4 === 'no' || answer4 === 'n') {
  userPoints++;


  alert('Man I wouldnt know what id do if you were right');
}else {
  alert('That answer is not valid');
}
}


collegeschool('Did I graduate from Tennessee State University');
function collegeschool(userinput){
let answer5 = prompt(userinput);

}if (answer5 === 'yes' || answer5 === 'y') {

  alert('Yes I did, graduate from the The Land Of Golden Sunshine, The best HBCU in the land.' );
  userPoints++;

} else if (answer5 === 'no' || answer5 === 'n') {

  alert('And miss my chance to meet Oprah, I do not think so!');
} else {
  alert('That answer is not valid');
}
}


let number ='';
let i = 0;
while (number !== '6'){
  console.log('First game :' , i);
  number = prompt ('guess a number between 1 and 10');
  if(number < 6){
    alert('too low');
  }else if (number > 6){
    alert('too high');
  }else {
    alert('Correct');
  }userPoints++;
}
i = i + 1;
if(i === 6){
  number = '6';
  console.log(number);
}

for (let i = 0; i < 4; i++){
  console.log('Second game :' , i);
  let number2 = prompt('Pick my favorite superhero');
}if(number2 === 'Wolverine'){
    alert('correct!');
    userPoints++;
    break;
  }else {
    alert('Wrong, try again!');
  }
}
console.log(userPoints);

alert(`You have gained ${userPoints} points`);


alert('You have ${userPoints}');


