// 'use strict';

// /*

// if (condition) {
//     console.log('this code ran because the condition was true')
// }

// ===
// - strictly equal to

// Evaluate 2 conditional statements

// ||
// - is the "logical or"
// One condition must be true for the 'conditional' to run

// &&
// - is the "logical and"
// Both conditions must be true for the 'conditional' to run

// */

// let sciFi = prompt('Do I like sciFi? Yes or No?');
// if (sciFi === 'Yes') {
//     console.log('Of course I like SciFi!!!!!!')
// }

// let sciFi2 = prompt('Do I like sciFi? Yes or No?');
// console.log(sciFi2);
// let sciFi2lower = sciFi2.toLowerCase();
// console.log(sciFi2lower);

/* this is the easy way to eliminate the upper/lowercase issues in inputs */
let userName = prompt("Welcome! iAmAndrewCarroll's About Me Page.  What is your name, fellow Human?");
// console.log('I am so happy you are here, ' + userName + '!!!')
if (userName == 'Christine' || userName || 'christine' || 'Bright One' || 'bright one'){
    alert(userName + ', Andrew really, really digs your vibe, girl!');
} else {
    alert('I am so happy you are here, ' + userName + '!!!')
}

let sciFi = prompt('Does Andrew like SciFi? Yes or No?').toLowerCase();
if (sciFi === 'yes' || sciFi === 'y') {
    // console.log('Of course Andrew likes SciFi!!!!!!!');
    alert('Of course he likes SciFi!!!!');
} else if(sciFi === 'no' || sciFi === 'n') {
    // console.log('FOOL!  Of course Andrew likes SciFi!!!!! MUAHAHAHAHAHAHA!!');
    alert('FOOL!  Of course he likes SciFi!!!!! MUAHAHAHAHAHAHA!!');
} else {
    // console.log('You must answer \'yes\' or \'no\'');
    alert('You must answer \'yes\' or \'no\'')
}
let meds = prompt('Does Andrew have experience with plant medicine? Yes or No').toLowerCase();
if (meds === 'yes' || meds === 'y'){
    // console.log('Of course he has experience with plant medicine!!');
    alert('Of course he has experience with plant medicine!!');
} else if(meds === 'no' || meds === 'n') {
    // console.log('Silly Goose!  You know Andrew hunts Shadows!!')
    alert('Silly Goose!  You know Andrew hunts Shadows!!');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}
let fire = prompt('Does Andrew have experience in firecraft? Yes or No').toLowerCase();
if (fire === 'yes' || fire === 'y'){
    // console.log('Of course he has experience in firecraft!!');
    alert('Of course he has experience in firecraft!!');
} else if(fire === 'no' || fire === 'n') {
    // console.log('Bruh!  You know Andrew loves the dirt between his toes!!Try again...')
    alert('Bruh!  You know Andrew loves the dirt between his toes!! Try again...');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}
let edu = prompt("Does Andrew have a Master's degree? Yes or No").toLowerCase();
if (edu === 'yes' || edu === 'y'){
    // console.log('Of course he does! Even though he strongly dislikes traditional education...');
    alert('Of course he does! Even though he strongly dislikes traditional education...');
} else if(edu === 'no' || edu === 'n') {
    // console.log('Give a guy a little credit, yeah?')
    alert('Give a guy a little credit, yeah?');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}
let entre = prompt("Is Andrew currently laying the foundation for an industry disrupting Software Development firm? Yes or No").toLowerCase();
if (entre === 'yes' || entre === 'y'){
    // console.log('Of course he is!  Andrew believes the traditional work environment is the equivalent to modern slavery and that his new model for doing business and developing team members who are well cared for will cause a huge disruption in the industry!');
    alert('Of course he is, '+ userName + '!  Andrew believes the traditional work environment is the equivalent to modern slavery and that his new model for doing business and developing team members who are well cared for will cause a huge disruption in the industry!');
} else if(entre === 'no' || entre === 'n') {
    // console.log('Oh come on now...with everything you've already learned you think he would be happy sitting back and getting along just to get along?')
    alert("Oh come on now, " + userName + "...with everything you've already learned you think he would be happy sitting back and getting along just to get along?");
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}
