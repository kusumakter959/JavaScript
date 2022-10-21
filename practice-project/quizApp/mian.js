const quiz = [
    {
        quistion:  "Q1: what is your name?",
        a: "Kusum AKter",
        b: "Rikha AKter",
        c: "Sumi AKter",
        d: "Minu AKter",
        ans: "ans1"
    },
    {
        quistion:  "Q2: what is your Father Name?",
        a: "Rafiqul Islam",
        b: "Rafiqul Ahmed",
        c: "Rafiqul",
        d: "Rafiqul Mohammed",
        ans: "ans1"
    },
    {
        quistion:  "Q3: what is your Mother Name?",
        a: "Kunsuma Khatun",
        b: "Kunsuma",
        c: "Khulsuma",
        d: "Khulsuma Khatun",
        ans: "ans1"
    },
    {
        quistion:  "Q4: How old are you?",
        a: 21,
        b: 22,
        c: 43,
        d: 12,
        ans: "ans2"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScrore = document.querySelector("#showScrore");

const Qlength = quiz.length;
let questionCount = 0;
let score = 0;

const loadquestion = () =>{
    const questionList = quiz[questionCount];

    question.innerText = questionList.quistion;

     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerHTML = questionList.c;
     option4.innerHTML = questionList.d;

}

loadquestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach(currentElem => {
        if(currentElem.checked){
            answer = currentElem.id;
        }
    });
    return answer;

}

// forEach()

const deselecAll = () =>{
    answers.forEach((currentElem) => currentElem.checked = false);
}
submit.addEventListener("click", () =>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quiz[questionCount].ans){
        score ++;
        // console.log(score);
        
    }

    questionCount++;
    deselecAll();
    if(questionCount < Qlength){
        loadquestion();
        // console.log("hello");
    }else{
        showScrore.innerHTML = `
            <h3>You Score ${score} / ${Qlength}</h3>
            <button class="btn total-btn" onclick="location.reload()">Play Agin</button>
        `;

        showScrore.classList.remove("scoreArea");
    }
});