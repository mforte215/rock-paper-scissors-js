//Welcome

const getCpuChoice = () => {
    choices = ['rock', 'paper', 'scissors']
    numChoice = Math.floor(Math.random() * 3);
    return choices[numChoice]
}

const rockClick = () => {
    console.log('rock');
    cpuChoice = getCpuChoice();
    console.log('CPU Choice: ' + cpuChoice)

    if ('rock' == cpuChoice) {
        console.log('Tie')
        window.tie_score = window.tie_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: ROCK \n CPU PICK: ROCK \n TIE!'
    }
    else if (cpuChoice == 'paper') {
        console.log('CPU WINS!')
        window.cpu_score = window.cpu_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: ROCK \n CPU PICK: PAPER \n CPU WINS!'
    }
    else if (cpuChoice == 'scissors') {
        console.log('You win!')
        window.user_score = window.user_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: ROCK \n CPU PICK: SCISSORS \n USER WINS!'
    }

}

const paperClick = () => {
    console.log('paper');
    cpuChoice = getCpuChoice();
    console.log('CPU Choice: ' + cpuChoice)

    if ('rock' == cpuChoice) {
        console.log('YOU WIN!')
        messageDisplay = document.getElementById('message-display');
        window.user_score = window.user_score + 1;
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: PAPER \n CPU PICK: ROCK \n USER WINS!'
    }
    else if (cpuChoice == 'paper') {
        console.log('TIE!')
        window.tie_score = window.tie_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: PAPER \n CPU PICK: PAPER \n TIE!'
    }
    else if (cpuChoice == 'scissors') {
        console.log('CPU WINS!')
        window.cpu_score = window.cpu_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: PAPER \n CPU PICK: SCISSORS \n CPU WINS!'
    }

}

const scissorsClick = () => {
    console.log('scissors');
    cpuChoice = getCpuChoice();
    console.log('CPU Choice: ' + cpuChoice)

    if ('rock' == cpuChoice) {
        console.log('CPU WINS!')
        window.cpu_score = window.cpu_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: SCISSORS \n CPU PICK: ROCK \n CPU WINS!'
    }
    else if (cpuChoice == 'paper') {
        console.log('YOU WIN!')
        window.user_score = window.user_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: SCISSORS \n CPU PICK: PAPER \n USER WINS!'
    }
    else if (cpuChoice == 'scissors') {
        console.log('TIE!')
        window.tie_score = window.tie_score + 1;
        messageDisplay = document.getElementById('message-display');
        messageDisplay.innerText = 'Score ' + window.user_score + '-' + window.cpu_score + '-' + window.tie_score + '\n USER PICK: SCISSORS \n CPU PICK: SCISSORS \n TIE!'
    }

}

const setGame = () => {
    messageDisplay = document.getElementById('message-display');
    messageDisplay.innerText = 'Score 0-0-0';
    window.cpu_score = 0;
    window.user_score = 0;
    window.tie_score = 0;
}