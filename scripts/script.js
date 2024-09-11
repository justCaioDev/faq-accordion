// const question0 = document.getElementById('question-0')
// const question1 = document.getElementById('question-1')
// const question2 = document.getElementById('question-2')
// const question3 = document.getElementById('question-3')

const answer0 = document.getElementById('answer-1')
const answer1 = document.getElementById('answer-2')
const answer2 = document.getElementById('answer-3')
const answer3 = document.getElementById('answer-4')

const questions = [
    {
        'question': "What is Frontend Mentor, and how will it help me?",
        'answer': "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        'id': '0'
    },
    {
        'question': "Is Frontend Mentor free?",
        'answer': "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
        'id': '1'
    },
    {
        'question': "Can I use Frontend Mentor projects in my portfolio?",
        'answer': "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        'id': '2'
    },
    {
        'question': "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        'answer': "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
        'id': '3'
    }
]

for (i= 0; i < questions.length; i++) {
    const questionTitle = document.getElementById(`question-title-${i}`)
    const h2 = document.createElement('h2')
    h2.classList.add('question-title')
    h2.textContent = questions[i].question
    questionTitle.appendChild(h2)

    const answer = document.getElementById(`answer-${i}`)
    const p = document.createElement('p')
    p.classList.add('answer')
    p.textContent = questions[i].answer
    answer.appendChild(p)

    const questionBtn = document.getElementById(`question-${i}`)
    questionBtn.addEventListener('click', ()=> {
        if(!p.classList.contains('open')) {
            questionBtn.setAttribute('src', 'assets/images/icon-minus.svg')
            // p.style.height = 'fit-content'
            // p.style.paddingBottom = '25px'
            // p.classList.add('open')
            openAnswer(p)
        } else {
            questionBtn.setAttribute('src', 'assets/images/icon-plus.svg')
           closeAnswer(p)
        }
    })
}

function openAnswer(p) {
    p.style.height = 'fit-content'
    p.style.paddingBottom = '25px'
    p.classList.add('open')
}

function closeAnswer(p) {
    p.style.height = '0px'
    p.style.paddingBottom = '0px'
    p.classList.remove('open')
}


