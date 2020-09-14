const btnScore = document.querySelector('#score');
var listOfQ=document.getElementsByClassName("question")
var numQuestions=listOfQ.length

btnScore.addEventListener('click', function (e) {
    points=0
    answers=[1,3,0,0,2,0,3,1]
    
    for (let i=0;i<numQuestions;i++) {
        var question=document.getElementsByName("question"+(i+1))
        if (question[answers[i]].checked) {
            points+=1
        }
    }
    alert("You scored "+points+" points")
});

var currentQ=1
showQuestion(currentQ);

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