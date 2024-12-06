const judge   = document.getElementById("judge"); 
const machine = document.getElementById("machine");
const gain    = document.getElementById("gain");
const loss    = document.getElementById("loss");

const url = "./assets/img/";

function playUser(changeUser) {
    const changeMachine = playMachine();

    // Pedra e Pedra
    (changeUser == "rock" && changeMachine == "rock") && panel('draw');
    // Pedra e Papel
    (changeUser == "rock" && changeMachine == "paper") && panel('loss');
    // Pedra e Tesoura
    (changeUser == "rock" && changeMachine == "scissor") && panel('gain');

    // Papel e Papel
    (changeUser == "paper" && changeMachine == "paper") && panel('draw');
    // Papel e Pedra
    (changeUser == "paper" && changeMachine == "rock") && panel('gain');
    // Papel e Tesoura
    (changeUser == "paper" && changeMachine == "scissor") && panel('loss');

    // Tesoura e Tesoura
    (changeUser == "scissor" && changeMachine == "scissor") && panel('draw');
    // Tesoura e Pedra
    (changeUser == "scissor" && changeMachine == "rock") && panel('loss');
    // Tesoura e Papel
    (changeUser == "scissor" && changeMachine == "paper") && panel('gain');
}

function playMachine() {
    const min   = Math.ceil(1);
    const max   = Math.floor(3);
    const result = Math.floor(Math.random() * (max- min + 1)) + min;
    
    switch (result) {
        case 1:
            machine.src = url+'rock.png'; 
            return "rock";
        case 2:
            machine.src = url+'paper.png'; 
            return "paper";
        case 3: 
            machine.src = url+'scissor.png'; 
            return "scissor";
    }
}

function panel(result) {
    result == 'draw' && (judge.innerText = "EMPATE"); 
    result == 'gain' && (gain.innerText++, judge.innerText = "VENCEU");
    result == 'loss' && (loss.innerText++, judge.innerText = "PERDEU");
}