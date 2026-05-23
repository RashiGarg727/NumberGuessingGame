const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum))+minNum;
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a no. between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("invalid input..please enter a valid number..");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please enter a valid number..");
    } else{
        attempts++;
        if(guess<answer){
            window.alert("TOO LOW! TRY AGAIN..");
        } else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN...");
        } else{
            window.alert(`CONGRATULATIONS! You guessed correctly. It took you ${attempts} attempts to guess the answer ${answer}`);
            running = false;
        }
        
    }
}