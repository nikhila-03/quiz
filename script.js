const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question:"Which one of the following is an example of an ‘internet search engine?",
         a: "LINUX",
         b: "Google",
         c: "MS Word",
         d: "Windows",
         correct: "b",
    },
    {
        question : "Which of the following is not an HTML tag?",
        a: "< select >",
        b : "< input >",
        c: "< textarea >",
        d:"< list >",
        correct: "d",
    },
    {
       question :"Which among these is not a Web browser?:",
       a :" www ",
       b: "Chrome",
       c:"Opera",
       d:"NetSurf",
       correct: "a",
    },
    {
        question:"World Wide Web was invented by",
        a:"Ted Nelson",
        b:"Tim Berners-Lee",
        c:"Linus Torvalds",
        d:"Robert E. Kahn",
        correct: "b",
    },
    {
        question:"What does W3C stand for?",
        a:"World Wide Web Consortium",
        b:"World Wide Website Consortium",
        c:"World Wide Website Community",
        d:"World Wide Web Community",
        correct: "a",
    },
    {
        question: "The following message is displayed on the browser, while trying to access a URL Server Error 403 The reason for the message:",
        a: "The requested HTML file is not available",
        b: "The URL refers to a CGI script and the header of the script does not indicate where the interpreter is located",
        c: "The path to the interpreter of the script file is invalid",
       d:"The requested HTML file or CGI script has insufficient permission",
       correct: "d",

    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
const g_text = document.getElementById('g_text')
const h_text = document.getElementById('h_text')
const i_text = document.getElementById('i_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
