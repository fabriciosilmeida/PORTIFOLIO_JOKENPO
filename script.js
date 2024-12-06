const judge   = document.getElementById("judge"); 
const machine = document.getElementById("machine");
const gain    = document.getElementById("gain");
const loss    = document.getElementById("loss");

const HAND = {R:"rock", P:"paper", S:"scissor"}
const STATUS = {D:"draw", L:"loss", G:"gain"}

const url = "./assets/img/";

function playUser(changeUser) {
    const changeMachine = playMachine();

    // Pedra e Pedra
    (changeUser == HAND.R && changeMachine == HAND.R) && panel(STATUS.D);
    // Pedra e Papel
    (changeUser == HAND.R && changeMachine == HAND.P) && panel(STATUS.L);
    // Pedra e Tesoura
    (changeUser == HAND.R && changeMachine == HAND.S) && panel(STATUS.G);

    // Papel e Papel
    (changeUser == HAND.P && changeMachine == HAND.P) && panel(STATUS.D);
    // Papel e Pedra
    (changeUser == HAND.P && changeMachine == HAND.R) && panel(STATUS.G);
    // Papel e Tesoura
    (changeUser == HAND.P && changeMachine == HAND.S) && panel(STATUS.L);

    // Tesoura e Tesoura
    (changeUser == HAND.S && changeMachine == HAND.S) && panel(STATUS.D);
    // Tesoura e Pedra
    (changeUser == HAND.S && changeMachine == HAND.R) && panel(STATUS.L);
    // Tesoura e Papel
    (changeUser == HAND.S && changeMachine == HAND.P) && panel(STATUS.G);
}

function playMachine() {
    const min   = Math.ceil(1);
    const max   = Math.floor(3);
    const result = Math.floor(Math.random() * (max- min + 1)) + min;
    
    switch (result) {
        case 1:
            machine.src = url+'rock.png'; 
            return HAND.R;
        case 2:
            machine.src = url+'paper.png'; 
            return HAND.P;
        case 3: 
            machine.src = url+'scissor.png'; 
            return HAND.S;
    }
}

function panel(result) {
    result == STATUS.D && (judge.innerText = "EMPATE"); 
    result == STATUS.G && (gain.innerText++, judge.innerText = "VENCEU");
    result == STATUS.L && (loss.innerText++, judge.innerText = "PERDEU");
}