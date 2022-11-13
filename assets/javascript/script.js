//from what I've read online, this import should work. It doesn't. Since having the questions be in a separate javascript file isn't required, I am moving its contents here.
// import { allQuizQuestions } from "./questions";

//current program limitations (note: none of these are part of the challenge requirements):
//all questions are limited to four possible answers.
//all questions are pulled from a static list instead of being generated when called. (some questions are repeats and simple math could generate Q/A's)
//the starting button does not disappear.
//once the quiz is complete, the answer buttons don't disappear.
//the score page is on the same page as the quiz



//current program limitations impacting grading:
//the application user interface is not clean and polished.


//WHEN the game is over
//THEN I can save my initials and score



var myCountDown = document.querySelector("#countdownTimer");
var startingButton = document.querySelector("#startGame");
var questionBox = document.querySelector("#questionBox");
var answerBox1 = document.querySelector("#answerButton1");
var answerBox2 = document.querySelector("#answerButton2");
var answerBox3 = document.querySelector("#answerButton3");
var answerBox4 = document.querySelector("#answerButton4");
var incorrectAnswer = document.querySelector("#penaltyBox");
var timeLeft = 75;
var timerActive = false;
var questionsToAsk = 10;
var currentQuestion;

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
startingButton.addEventListener("click", function(){
    playGame();
    //ideally, the button will disappear after clicking it. Technically this isn't part of the challenge requirements.
});

answerBox1.addEventListener("click", function(){
    if(timerActive) {
        answerTester(currentQuestion,1);
    }
})

answerBox2.addEventListener("click", function(){
    if(timerActive) {
        answerTester(currentQuestion,2);
    }
})

answerBox3.addEventListener("click", function(){
    if(timerActive) {
        answerTester(currentQuestion,3);
    }
})

answerBox4.addEventListener("click", function(){
    if(timerActive) {
        answerTester(currentQuestion,4);
    }
})

function timer() {
    if(timerActive == false) {
        timerActive = true;
        var timerInterval = setInterval(function() {
            timeLeft --;
            myCountDown.textContent = timeLeft + " seconds remaining!";

            if(timeLeft < 1 || timerActive == false) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
}

function askNextQuestion() {
        //randomly select a question from our list
        let selectedQuestion = Math.floor(Math.random() * allQuizQuestions.length);
        //ask the question
        questionBox.textContent = allQuizQuestions[selectedQuestion].question;
        //there's probably a way to use a for loop for this. Right now I'm sick and trying to get this done, so I'm just cycling through the buttons.
        answerBox1.textContent = allQuizQuestions[selectedQuestion].bubbles[0];
        answerBox2.textContent = allQuizQuestions[selectedQuestion].bubbles[1];
        answerBox3.textContent = allQuizQuestions[selectedQuestion].bubbles[2];
        answerBox4.textContent = allQuizQuestions[selectedQuestion].bubbles[3];

        return selectedQuestion;
}

function playGame() {
    timer();
    
    currentQuestion = askNextQuestion();
}

//WHEN I answer a question
//THEN I am presented with another question
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
function correctAnswerSelected(){
    penaltyBox.textContent = "";
    questionsToAsk--;

    if(questionsToAsk > 0 && timeLeft > 0){
        //remove the question from the list so it isn't repeated
        allQuizQuestions.splice(currentQuestion,1);
        currentQuestion = askNextQuestion();
    }
    //else the game ends!
    else{
        timerActive = false;
        questionBox.textContent = "All questions have been answered. Your final score: "+timeLeft;
    }
}

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
function incorrectAnswerSelected(){
    penaltyBox.textContent = "incorrect answer; time penalty applied!";
    timeLeft-=5;
    questionsToAsk--;

    if(questionsToAsk > 0 && timeLeft > 0){
       //remove the question from the list so it isn't repeated
        allQuizQuestions.splice(currentQuestion,1);
        currentQuestion = askNextQuestion();
    }
    //else the game ends!
    else{
        timerActive = false;
        questionBox.textContent = "All questions have been answered. Your final score: "+timeLeft;
    }
}

function answerTester(selectedQuestion,whichButton) {
    console.log("our question is: "+allQuizQuestions[selectedQuestion].question+" with a correct answer of: "+allQuizQuestions[selectedQuestion].answer+
    ", and you selected button "+whichButton+" which shows as "+allQuizQuestions[selectedQuestion].bubbles[whichButton-1]);
    if(allQuizQuestions[selectedQuestion].bubbles[whichButton-1] == allQuizQuestions[selectedQuestion].answer) {
        correctAnswerSelected();
    }
    else{
        incorrectAnswerSelected();
    }

}
var allQuizQuestions = [
    //relative minor questions
    {
        question: "What is the relative minor of C major?",
        answer: "A minor",
        bubbles: ["A minor", "G minor", "C minor", "F minor"]
    },

    {
        question: "What is the relative minor of G major?",
        answer: "E minor",
        bubbles: ["Bb minor", "G minor", "E minor", "C minor"]
    },

    {
        question: "What is the relative minor of A major?",
        answer: "F# minor",
        bubbles: ["B minor", "G minor", "C# minor", "F# minor"]
    },

    {
        question: "What is the relative minor of Bb major?",
        answer: "G minor",
        bubbles: ["C minor", "G minor", "Eb minor", "F minor"]
    },

    {
        question: "What is the relative minor of E major?",
        answer: "C# minor",
        bubbles: ["G minor", "D minor", "C# minor", "Gb minor"]
    },

    //relative major questions
    {
        question: "What is the relative major of A minor?",
        answer: "C major",
        bubbles: ["C major", "F major", "D major", "Eb major"]
    },

    {
        question: "What is the relative major of Bb minor?",
        answer: "Db major",
        bubbles: ["C# major", "F major", "Db major", "Gb major"]
    },

    {
        question: "What is the relative major of G minor?",
        answer: "Bb major",
        bubbles: ["Ab major", "F# major", "E major", "Bb major"]
    },
    
    {
        question: "What is the relative major of D minor?",
        answer: "F major",
        bubbles: ["G major", "F major", "D major", "C major"]
    },

    {
        question: "What is the relative major of Eb minor?",
        answer: "Gb major",
        bubbles: ["Gb major", "A major", "C# major", "G major"]
    },

    //cadence questions
    {
        question: "Which cadence has a V-I progression?",
        answer: "Authentic Cadence",
        bubbles: ["Authentic Cadence", "Plagal Cadence", "Deceptive Cadence", "Andolusian Cadence"]
    },

    {
        question: "Which cadence has a IV-I progression?",
        answer: "Plagal Cadence",
        bubbles: ["Authentic Cadence", "Plagal Cadence", "Deceptive Cadence", "Andolusian Cadence"]
    },

    {
        question: "Which cadence has a V-VI progression?",
        answer: "Deceptive Cadence",
        bubbles: ["Authentic Cadence", "Plagal Cadence", "Deceptive Cadence", "Andolusian Cadence"]
    },

    {
        question: "What is it called when an authentic cadence has the bass in root position and the soprano voice leading ti -> do?",
        answer: "Perfect Authentic Cadence",
        bubbles: ["True Authentic Cadence", "Perfect Authentic Cadence", "Pure Authentic Cadence", "False Authentic Cadence"]
    },

    {
        question: "What cadence is also known as the 'amen' cadence?",
        answer: "Plagal Cadence",
        bubbles: ["Authentic Cadence", "Plagal Cadence", "Deceptive Cadence", "Andolusian Cadence"]
    },

    //basic chord progression questions
    {
        question: "What chord progression is considered the strongest?",
        answer: "Up a fourth",
        bubbles: ["Down a third", "Up a second", "Up a fourth", "down a second"]
    },

    {
        question: "What chord progression is considered the weakest?",
        answer: "Up a third",
        bubbles: ["Up a third", "Up a second", "Down a fourth", "down a second"]
    },

    {
        question: "Which chord progression is not a part of plagal, authentic, or deceptive cadences?",
        answer: "Down a third",
        bubbles: ["Down a second", "Up a second", "Up a fourth", "down a third"]
    },


    //composer periodization questions
    {
        question: "In which era was the composer J.S. Bach?",
        answer: "Baroque Era",
        bubbles: ["Classical Era", "Romantic Era", "Baroque Era", "Renaissance Era"]
    },

    {
        question: "In which era was the composer Haydn?",
        answer: "Classical Era",
        bubbles: ["Classical Era", "Romantic Era", "Baroque Era", "Renaissance Era"]
    },

    {
        question: "In which era was the composer Stravinsky?",
        answer: "20th Century Era",
        bubbles: ["Classical Era", "Romantic Era", "Baroque Era", "20th Century Era"]
    },

    {
        question: "In which era was the composer Brahms?",
        answer: "Romantic Era",
        bubbles: ["Classical Era", "Romantic Era", "Baroque Era", "20th Century Era"]
    },

    {
        question: "In which era was the composer Palestrina?",
        answer: "Renaissance Era",
        bubbles: ["Classical Era", "Romantic Era", "Baroque Era", "Renaissance Era"]
    },

    //Era questions
    {
        question: "Which of the following is NOT a trait of the Baroque Era?",
        answer: "High dynamic variation",
        bubbles: ["High dynamic variation", "High use of counterpoint", "Use of basso continuo", "Pitch definition lower than A=440"]
    },

    {
        question: "Which of the following is NOT a trait of the Classical Era?",
        answer: "Invention of Opera",
        bubbles: ["Regular, metered phrasing", "Invention of Opera", "Emphasis on singable melodies", "Increased accessibility of music"]
    },

]

