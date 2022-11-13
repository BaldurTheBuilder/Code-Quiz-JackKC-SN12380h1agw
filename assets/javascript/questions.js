//for each question, we need the actual question, a series of choices, and the correct answer to compare to.
//If we wanted an extensive quiz, we could make a more general program with an array of keys and functions for logically finding the answer,
//instead of just an array of 25 premade question objects.
//additionally, we could randomize the order of the bubbles each time the question is called.

//see script.js.
// export {allQuizQuestions};

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

