const btnScore = document.querySelector('#score');

btnScore.addEventListener('click', function (e) {
    points=0
    answers=[1,3,0,0,2,0,3,1]
    
    for (let i=0;i<8;i++) {
        var question=document.getElementsByName("question"+(i+1))
        if (question[answers[i]].checked) {
            points+=1
        }
    }
    alert("You scored "+points+" points")
});
