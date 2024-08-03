 const questions=[
    {
        ques:"which is the largest animal in the world ?",
        answers:[
            {
                text:"blue-whale",
                correct:true
            },
            {
                text:"elephant",
                correct:false
            },
            {
                text:"girafee",
                correct:false
            },
            {
                text:"ant",
                correct:false
            }
        ]
    },
    {
        ques:"who is the prime minister of India ?",
        answers:[
            {
                text:"babu",
                correct:false
            },
            {
                text:"N modi",
                correct:true
            },
            {
                text:"murmu",
                correct:false
            },
            {
                text:"balu",
                correct:false
            }
        ]
    },
    {
        ques:" who is the president of India?",
        answers:[
            {
                text:"rahul",
                correct:false
            },
            {
                text:"tagore",
                correct:false
            },
            {
                text:"murmu",
                correct:true
            },
            {
                text:"raju",
                correct:false
            }
        ]
    },
    {
        ques:"who is deputy cm of andrapradesh ?",
        answers:[
            {
                text:"babu",
                correct:false
            },
            {
                text:"lokesh",
                correct:false
            },
            {
                text:"pawan kalyan",
                correct:true
            },
            {
                text:"rajesh",
                correct:false
            }
        ]
    },
    {
        ques:"who is  the richest person in India ?",
        answers:[
            {
                text:"ambani",
                correct:true
            },
            {
                text:"Mr.rao",
                correct:false
            },
            {
                text:"charan",
                correct:false
            },
            {
                text:"me",
                correct:false
            }
        ]
    }
];
const quesans=document.querySelector(".ans")
let nextbtn=document.querySelector(".next");
let question=document.querySelector(".question");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
     currentQuestionIndex=0;
     score=0;
    showquestion();
}
function resetQuestion(){
    nextbtn.style.display="none";
    while(quesans.firstChild){
        quesans.removeChild(quesans.firstChild);
    }
}
 function showquestion(){
    resetQuestion();
    let currentQuestion=questions[currentQuestionIndex];
    question.innerHTML=(currentQuestionIndex+1)+"."+questions[currentQuestionIndex].ques;
    currentQuestion.answers.forEach(answerObj => {
    const answer=document.createElement("button");
    answer.innerHTML=answerObj.text;
    answer.classList.add("btn");
    quesans.appendChild(answer);
    if(answerObj.correct){
        answer.dataset.correct=answerObj.correct;
    }
    answer.addEventListener("click",selectAnswer)
});
 };

// let nextBtn=document.querySelector(".next");
// nextBtn.addEventListener("click",forEach()={

// });
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("notcorrect");
    }
    Array.from(quesans.children).forEach(button =>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
    
}
function showScore()
{
    resetQuestion();
    question.innerHTML=`your score is ${score} out of ${questions.length}` ;
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showquestion();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});
startQuiz();

