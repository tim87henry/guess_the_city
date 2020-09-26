const btnScore = document.querySelector('#score');
var listOfQ=document.getElementsByClassName("question")
var numQuestions=listOfQ.length

var currentQ=1
showQuestion(currentQ);

btnScore.addEventListener('click', function (e) {
    answers=[1,3,0,0,2,0,3,1]
    q=document.getElementsByName("question"+currentQ)
    document.getElementById(q[answers[currentQ-1]].getAttribute("value")+"ans").style.backgroundColor='green';
});


function navigate(num) {
    currentQ=currentQ+num;
    showQuestion(currentQ);
}

function showQuestion(n) {
    if (n>numQuestions) {
        n=1
    } else if (n<1) {
        n=numQuestions
    }
    for (let i=0;i<numQuestions;i++) {
        listOfQ[i].style.display="none";
    }
    listOfQ[n-1].style.display="block";
    currentQ=n
}