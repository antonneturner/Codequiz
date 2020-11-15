//  Document variables

document.addEventListener("DOMContentLoaded", () => {
    const timeLeftDisplay = document.querySelector("#time-left");
    const startBtn = document.querySelector("#start-button");
    let timeLeft = 10;

    //   Function countdown

    function countDown() {
        setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval((timeLeft = 0));
            }
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -= 1;
        }, 1000);
    }
    // start button

    startBtn.addEventListener("click", countDown);
});

// //  Scripts 
// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

// function startGame() {
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// }

// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide')
//     } else {
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// const questions = [
//     {
//         question: 'What is 2 + 2?',
//         answers: [
//             { text: '4', correct: true },
//             { text: '22', correct: false }
//         ]
//     },
//     {
//         question: 'who is our instructor?',
//         answers: [
//             { text: 'Austin Bruch', correct: true },
//             { text: 'Jon Jones', correct: true },
//             { text: 'Sponge Bob', correct: true },
//             { text: 'Naruto', correct: true }
//         ]
//     },
//     {
//         question: 'What is our program called?',
//         answers: [
//             { text: 'ux designers', correct: false },
//             { text: 'full stack web developer', correct: true },
//             { text: 'nursing program', correct: false },
//             { text: 'IDK', correct: false }
//         ]
//     },
//     {
//         question: 'What is 4 * 2?',
//         answers: [
//             { text: '6', correct: false },
//             { text: '8', correct: true }
//         ]
//     }
// ]