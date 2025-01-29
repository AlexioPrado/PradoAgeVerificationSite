const userAge = document.getElementById('userAge');
const answer = document.getElementById('answer');
const submit1 = document.getElementById('submitButton');
let age;

submit1.onclick = function(){verify()}

function verify(){
    age = userAge.value;
    age = Number(age);
    console.log(age)
    if(age == 0){
        answer.textContent = 'YOU CANT EVEN SEE AT UR AGE';
    }
    else if(age < 0){
        answer.textContent = 'YOUR NOT EVEN CONCIEVED';
    }
    else if(age <= 5 & age > 0){
        answer.textContent = 'YOU ARE TOO YOUNG';
    }
    else if(age >= 100){
        answer.textContent = 'YOU ARE TOO OLD';
    }
    else{
        answer.textContent = 'YOU CAN UNDERSTAND THIS SENTENCE';
    }
}

