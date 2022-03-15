function send(){
    Number1 = document.getElementById("number1").value
    Number2 = document.getElementById("number2").value
actual_answer = parsInt(Number1) * parsInt(Number1)

    question_1 = "<h4>" + Number1 + "x" + Number2 + "</h4>";
    input_box = "<br>answer :<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";

question_turn = "player_1"
answer_turn = "player_2"
}
function check(){
    get_answer = document.getElementById("input_check_box").value
    get_answer = actual_answer;
 
    
   
    if(answer_turn =="player1"){
        player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else{player2_score + 1;
        document.getElementById("player2_score").innerHTML =update_player2_score;
    
    }
    
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player1_question").innerHTML = "question_turn = " +player2;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML= "question_turn =" + player1;
    }
