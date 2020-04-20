const choices = ["rock", "scissors", "paper"];

const computer_choice = (array_of_choices) => array_of_choices[Math.floor((Math.random()*array_of_choices.length))];

const decide_winner = (p1, p2) => {
    /**
     * 0 - tie
     * 1 - p1
     * 2 - p2
    */
    switch(p1) {
        case "rock":
            return p2 == "scissors" ? 1 : (p2 == "paper") ? 2 : 0
            break;
        case "scissors":
            return p2 == "paper" ? 1 : (p2 == "rock") ? 2 : 0
            break;
        case "paper":
            return p2 == "rock" ? 1 : (p2 == "scissors") ? 2 : 0
            break;
        default:
            alert("something wrong");
    }
}