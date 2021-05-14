p1=localStorage.getItem("player1");
p2=localStorage.getItem("player2");
var p1score=0;
var p2score=0;

document.getElementById("player1_name").innerHTML=p1 + ":";
document.getElementById("player2_name").innerHTML=p2 + ":";
document.getElementById("player1_score").innerHTML=p1score ;
document.getElementById("player2_score").innerHTML=p2score ;

document.getElementById("player_question").innerHTML="question turn :"+p1 ;
document.getElementById("player_answer").innerHTML="answer turn :"+p2 ;



    
function send()
               {var num1=document.getElementById("no1").value;
               var num2=document.getElementById("no2").value;

                question = "<h4 id='math_display'> Q. "+num1+"X"+num2+"</h4>";
                 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
                  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
                   row = question + input_box + check_button ;
                    document.getElementById("output").innerHTML = row;
                     
                     }
question_turn="Player1"
answer_turn="Player2"
                     function check() {
                        get_answer = document.getElementById("input_check_box").value;
                        var correctans=Number(document.getElementById("no1").value)*Number(document.getElementById("no2").value);
                         console.log("correctans = " + correctans);
                         console.log(get_answer);
                         if(get_answer==correctans)
                         {
                             if(answer_turn=="Player1")
                             {
                                 p1score=p1score+1;
                                 document.getElementById("player1_score").innerHTML=p1score ;

                             }
                             else
                             { p2score=p2score+1;
                                document.getElementById("player2_score").innerHTML=p2score ;
                            }
                         }
                         if (question_turn=="Player1")
                         {
                             question_turn="Player2";
                             document.getElementById("player_question").innerHTML="question turn :"+p2 ;
                         }
                         else {
                            question_turn="Player1";
                            document.getElementById("player_question").innerHTML="question turn :"+p1 ;
                         }

                         if (answer_turn=="Player1")
                         {
                             answer_turn="Player2";
                             document.getElementById("player_answer").innerHTML="answer turn :"+p2 ;
                         }
                         else {
                            answer_turn="Player1";
                            document.getElementById("player_answer").innerHTML="answer turn :"+p1 ;
                         }
                     }