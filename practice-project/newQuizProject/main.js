
const quiz = [
    {
        q: "What is your name?", 
        a: "Kusum Akter",
        b: "Rikha Akter",
        c: "Sumi Akter",
        d: "Minu Akter",
        ans: "ans1",
    },
    {
        q: "What is Father name?", 
        a: "Rafiqul Islam",
        b: "Rafiq",
        c: "Rafiqul Ahmed",
        d: "Rafuq",
        ans: "ans1",
    },
    {
        q: "What is Mother name?", 
        a: "Kunsuma Akter",
        b: "Kunsuma Khatun",
        c: "Kulsuma",
        d: "Kulsuma Katun",
        ans: "ans2",
    },
    {
        q: "How old are you?", 
        a: 21,
        b: 23,
        c: 22,
        d: 24,
        ans: "ans3",
    }
]

const heading = document.querySelector(".heading");
const input = document.querySelectorAll(".answer");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const  submitBtn = document.querySelector(".submitBtn");
const  showScrore = document.querySelector("#showScrore");

let quizlength = quiz.length
let quizCount = 0
let score = 0

const loadquestion = () =>{
const quizList = quiz[quizCount];
    heading.innerText = quizList.q;

    option1.innerText = quizList.a;
    option2.innerText = quizList.b;
    option3.innerText = quizList.c;
    option4.innerText = quizList.d;

}

const getCheckAnswer = () =>{
    let answer;
    answers.forEach(cuurentElem =>{
        if(cuurentElem.checked){
            answer = cuurentElem.id;
        }
    });
    return answer
}

loadquestion()
const deselecAll = () =>{
    answers.forEach(cuurentElem =>{
        cuurentElem.checked = false
    });
}
submitBtn.addEventListener("click", () =>{
       const checkedAnswer =  getCheckAnswer();
       if(checkedAnswer === quiz[quizCount].ans){
        score ++;
       }

       quizCount++
       deselecAll()
    if(quizCount < quizlength){
        loadquestion()
    }else{
        showScrore.innerHTML = `
        <h3>You Score ${score} / ${quizlength}</h3>
        <button class="btn total-btn" onclick="location.reload()">Play Agin</button>
    `;
    showScrore.classList.remove("scoreArea");
    }

       
})