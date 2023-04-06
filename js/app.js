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

let score = 0

/* this is the easy way to eliminate the upper/lowercase issues in inputs */
let userName = prompt("Welcome! iAmAndrewCarroll's About Me Page.  What is your name, fellow Human?").toLowerCase();
let gf = ['christine', 'bright one']
if (gf.includes(userName)) {
    // if (userName === ('christine' || 'bright one')) { ask why this isn't working!!!!!!
    alert(userName + ', Andrew really, really digs your vibe, girl!');
    } else {
        alert('I am so happy you are here, ' + userName + '!!!')
    }

let sciFi = prompt('Does Andrew like SciFi? Yes or No?').toLowerCase();
if (sciFi === 'yes' || sciFi === 'y') {
    // console.log('Of course Andrew likes SciFi!!!!!!!');
    alert('Of course he likes SciFi!!!!');
    score++;
} else if (sciFi === 'no' || sciFi === 'n') {
    // console.log('FOOL!  Of course Andrew likes SciFi!!!!! MUAHAHAHAHAHAHA!!');
    alert('FOOL!  Of course he likes SciFi!!!!! MUAHAHAHAHAHAHA!!');
} else {
    // console.log('You must answer \'yes\' or \'no\'');
    alert('You must answer \'yes\' or \'no\'')
}

let meds = prompt('Does Andrew have experience with plant medicine? Yes or No').toLowerCase();
if (meds === 'yes' || meds === 'y') {
    // console.log('Of course he has experience with plant medicine!!');
    alert('Of course he has experience with plant medicine!!');
    score++;
} else if (meds === 'no' || meds === 'n') {
    // console.log('Silly Goose!  You know Andrew hunts Shadows!!')
    alert('Silly Goose!  You know Andrew hunts Shadows!!');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}

let fire = prompt('Does Andrew have experience in firecraft? Yes or No').toLowerCase();
if (fire === 'yes' || fire === 'y') {
    // console.log('Of course he has experience in firecraft!!');
    alert('Of course he has experience in firecraft!!');
    score++
} else if (fire === 'no' || fire === 'n') {
    // console.log('Bruh!  You know Andrew loves the dirt between his toes!!Try again...')
    alert('Bruh!  You know Andrew loves the dirt between his toes!! Try again...');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}

let edu = prompt("Does Andrew have a Master's degree? Yes or No").toLowerCase();
if (edu === 'yes' || edu === 'y') {
    // console.log('Of course he does! Even though he strongly dislikes traditional education...');
    alert('Of course he does! Even though he strongly dislikes traditional education...');
    score++
} else if (edu === 'no' || edu === 'n') {
    // console.log('Give a guy a little credit, yeah?')
    alert('Give a guy a little credit, yeah?');
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}

let entre = prompt("Is Andrew currently laying the foundation for an industry disrupting Software Development firm? Yes or No").toLowerCase();
if (entre === 'yes' || entre === 'y') {
    // console.log('Of course he is!  Andrew believes the traditional work environment is the equivalent to modern slavery and his new model for doing business and developing team members who are well cared for will cause a huge disruption in the industry!');
    alert('Of course he is, ' + userName + '!  Andrew believes the traditional work environment is the equivalent to modern slavery and his new model for doing business and developing team members who are well cared for will cause a huge disruption in the industry!');
    score++;
} else if (entre === 'no' || entre === 'n') {
    // console.log('Oh come on now...with everything you've already learned you think he would be happy sitting back and getting along just to get along?')
    alert("Oh come on now, " + userName + "...with everything you've already learned you think he would be happy sitting back and getting along just to get along?");
} else {
    // console.log('You must answer \'yes\' or \'no\'')
    alert('You must answer \'yes\' or \'no\'')
}



// add 'let score = 0' to the top before the questions; add a `score++` to each of the questions
// requires a loop with possibilities for 'to high' 'to low' 'got it!' and has only four chances


let lives = 4;

let joints = Math.floor(Math.random()*6)

while (lives) {
    let guess = +prompt('Guess how many joints Andrew used to smoke per day circa 2011...');
    if (guess === joints){
        alert(`good job`);
        score++;
        break;
    } else if (guess > joints) {
        lives--;
        alert(`To high...you have ${lives} left...`);
    } else if (guess < joints) {
        lives--;
        alert(`To low...you have ${lives} left...`);
    } 
    if (lives === 0) {
        alert(`You really killed the vibe...the correct answer is ${joints}`);
    }
    console.log(`I am in the while loop. You have ${lives} lives left...`);

}

// FOR LOOP
// let lives1 = 7;

// for (let i = 0; i < lives1; i++) {
//     console.log(`I am in the for loop.  You have ${lives1 - i - 1} lives left...`);
// } note that it is "you have ${lives1 - i - 1}" because the first attempt fails and leaves 6 lives left

// DO WHILE; it will do the thing at least once, and then evaluate if it should do it again.




// requires multiple possible correct answers and you need to be able to tell the user if they have guess one of them correctly, for example, what is one of my top five books?  This will end when a user guesses a correct answer OR runs out of attempts.  It will then display all possible correct answers to the user when complete (either correct or out of attempts)
// let books = ['The Body Keeps the Score', 'Eastern Body, Western Mind', 'Sometimes a Great Notion', 'The Surrender Experiment', 'Hebrews to Negroes'];

// let guess1 = prompt('Guess one of my top 5 favorite books...').toLowerCase();

// let lives1 = 7;

// while (lives1) {
//     lives1--;
//     console.log(`I am in the while loop. You have ${lives1} lives left...`);
//     for (let i = 0; i < books.length; i++) {
//         // console.log(guess1, books[i]);
//         if (guess1 === books[i].toLowerCase()) {
//             console.log(`Your correct`);
//         }
//     } 
//     if (lives1 === 0) {
//         console.log(`You've died of dysentery...`);
//         break;
//     }
// }

let books = ['The Body Keeps the Score', 'Eastern Body, Western Mind', 'Sometimes a Great Notion', 'The Surrender Experiment', 'Hebrews to Negroes', 'The Untethered Soul'];

let guess1 = prompt(`Guess one of my top 6 favorite books...`).toLowerCase();

let lives1 = 6;

let guessCorrect = false;

while (guessCorrect != true) {
    console.log(`I am in the while loop. You have ${lives1} lives left...`);
    for (let i = 0; i < books.length; i++) {
        if (guess1 === books[i].toLowerCase()) {
            console.log(guess1, books[i]);
            alert(`You are correct!  Here is my top 5 list ${books}`);
            guessCorrect = true;
            break;
        } 
    };
    if (guessCorrect === true) {
        score++;
        break;
    }
    else {
        lives1--;
        guess1 = prompt(`You broke an axle.  Try again...You have ${lives1} lives left...`).toLowerCase();
    }
    if (lives1 === 0) {
        // console.log(`You've died of dysentery...`);
        alert(`You've died of dysentery...Here is my top 6 list ${books}`)
        break;
    }
}
alert(`You're final score was ${score}`)


// Question 7 
// - guess is correct
// - how many attempts they have left
// - if there are no attempts left
// - if there are not attempts left give them the answer

// Question 6 - Guess a Number
// Response if
// - guess is too high
// - guess is too low
// - guess is correct
// - how many attempts they have left
// - if there are no attempts left
// - if there are no attempts left give them the answer
