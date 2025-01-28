const userAge = document.getElementById('userAge');
const submit = document.getElementById('submitbutton');
const answer = document.getElementById('answer');

let age;

function verify(age){
    age = userAge.value;
    if(age == 0){
        answer.textcontent = 'YOU CANT EVEN SEE AT UR AGE'
    }
    else if(age < 0){
        answer.textconten = 'YOUR NOT EVEN CONCIEVED'
    }
    else if(age <= 5 & age > 0){
        answer.textcontent = 'YOU ARE TOO YOUNG';
    }
    else if(age >= 100){
        answer.textcontent = 'YOU ARE TOO OLD';
    }
    else{
        answer.textcontent = 'YOU CAN UNDERSTAND THIS SENTENCE'
    }
}

submit.onclick = verify(userAge);