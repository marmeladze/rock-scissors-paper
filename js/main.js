function result_board(arr) {
    let comp = arr[0];
    let res = arr[1];
    document.querySelector("#result-board").innerHTML = "</p><strong>Computer chooses "+comp+"</strong>   "+ res+"</p>";
}


let elements = document.querySelectorAll(".card")

for(var i=0; i < elements.length; i++) {
    let card = elements[i];
    card.addEventListener("click", function(){
        let result_text = "";
        let user_choice = card.dataset.value;
        let comp_choice = computer_choice(choices);
        let result = decide_winner(user_choice, comp_choice);
        if(result == 1) {
            result_text = "Human wins";
        } else if (result == 2) {
            result_text = "Computer wins";
        } else if(result == 0 ) {
            result_text = "Tie";
        } else {
            alert("Something wrong");
        }
        return result_board([comp_choice, result_text]);
    });
}

