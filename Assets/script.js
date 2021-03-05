
            //runs the function that creates the players last score from local memory
                renderMessage();
            var playerEl = document.getElementById("playerName");
            var saveButton = document.getElementById("save");

            //saves score with button event listener
            saveButton.addEventListener("click", function(event) {
                displayScoreEl.classList.toggle("invisible");
                stateEl.classList.toggle("invisible");
                console.log("save button clicked")
                playerFormEl.classList.add("invisible");

event.preventDefault();
    var playerStats = {
        player: playerName.value.trim(),
        score: displayScoreEl.textContent

};


        localStorage.setItem("playerStats", JSON.stringify(playerStats));
        renderMessage();

});     
                    // defines function: creates the players last score from the local memory
                function renderMessage() {
  
  var lastPlayer = JSON.parse(localStorage.getItem("playerStats"));
  if (lastPlayer !== null) {
  
    document.querySelector("#message").textContent = lastPlayer.player + " scored a " + lastPlayer.score
 }
}

var stateEl = document.getElementById("message")
var playerFormEl = document.getElementById("playerForm")
var displayScoreEl = document.getElementById("displayScore")
var score = localStorage.getItem("highscore");
var timerEl = document.getElementById("timer");
var highScoresEl = document.getElementById("highScores");
var newQuizEl = document.getElementById("newQuiz");
var choicesEl = document.getElementById("choices");
var questionEl = document.getElementById("question");
var questionsIndex = 0;
var startQuizEl = document.getElementById("newQuiz")
var selectedAnswer = "";
var score = 0;
var secondsLeft = 0;
var questionid;
    // here are the questions stored in an array
var questionsArray = [
    {
        displayQuestion: "commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        displayQuestion: "arrays in javascript can be used to store:",
        choices: [ "numbers and strings", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        displayQuestion: "the condition in an if else statement is enclosed within?",
        choices: [ "quotes", "curly brackets", "parentheses"],
        correctAnswer: "parentheses",
    },
    {
        displayQuestion: "A very useful tool used during development and debugging for pringing content to the debugger is:?",
        choices: [ "for loops", "console.log", "terminal"],
        correctAnswer: "console.log",
    },
    {
        displayQuestion: "end of quiz",
        choices: [ "", "", ""],
        correctAnswer: "steel",
    },
];
            //make elements invisible... most elements are always on the page and are just invisible when they should not be displayed
            playerFormEl.classList.add("invisible");
           
            stateEl.classList.add("invisible");

                    //toggle scores to view
                        highScoresEl.addEventListener("click", function(){
                        displayScoreEl.classList.toggle("invisible");
                        stateEl.classList.toggle("invisible");


});


function renderChoices(){ 
    $("#choices").empty();
        //  const questionArrayIndex = array[index];
        
            //this for loop loads each question and answer to the page
    questionEl.textContent = questionsArray[questionsIndex].displayQuestion;
    for (let i = 0; i < questionsArray[questionsIndex].choices.length; i++) {
        const choiceContent = questionsArray[questionsIndex].choices[i];
    // console.log("for loop start index status: " + questionsIndex);
    // console.log("for loop start index status: " + questionsArray[questionsIndex].displayQuestion);
        var sectionEl = document.createElement("section");
            sectionEl.classList.add ("col-12");
        var buttonEl = document.createElement("button");
            buttonEl.classList.add ("btn", "btn-block", "p-3", "my-2", "btn-info");
        buttonEl.textContent = choiceContent
        sectionEl.appendChild(buttonEl);
        choicesEl.appendChild(sectionEl)


        buttonEl.addEventListener("click", function(){
            console.log("click");
            selectedAnswer = choiceContent;
            
            // console.log("index " + questionsIndex);
            console.log("selectedanswer value is " + selectedAnswer);
             if (questionsArray[questionsIndex].correctAnswer === selectedAnswer) {
            console.log("correct! the answer is " + questionsArray[questionsIndex].correctAnswer);
            score++;
            console.log(score); 
            questionsIndex += 1;
            }
            else{
                console.log("incorrect response")
                questionsIndex += 1;
            
            }
            // console.log(questionsIndex + "is the question index");
            // console.log(questionsArray.lenth);          
            //end of if statement
            if (questionsIndex < 4){ 
                console.log(questionsIndex)
                $("#choices").empty();
            renderChoices();
        }
        else{
            console.log(questionsIndex)
            localStorage.setItem("highscore", score);


            $("#choices").empty();
            $("#question").empty();
            $("#section").empty();
            questionsIndex = 0;
           

            startQuizEl.classList.remove("invisible");
            playerFormEl.classList.remove("invisible");
             displayScoreEl.textContent = score;
             timerEl.classList.toggle("invisible");
                // console.log("end of quiz");
            }
        
// heres whwere you left off **** the loop now rotates questions,, render choices is referenced in itself,, questions index increments on correct response,, 
// to continue?? get questionsindex to compare to array lenght, currently your references to array.length dont register for comparison. 2 clear previous entries on render questions          
    
           
               //end of for: rotates questions when clicked
     //} 
              //end of button addevent listener
             
                });
        //end of for: applies question choices on page
         }
  

}               
                //start quiz and initialize variables
                startQuizEl.addEventListener("click", function(){
                    playerFormEl.classList.add("invisible");
                    startQuizEl.classList.add("invisible");
                    stateEl.classList.add("invisible");

                    score = 0;
                    questionsIndex = 0;
                    $("#choices").empty();
                    $("#question").empty();
                    $("#section").empty();
                    //****change your time here when project is done
                    var secondsLeft = 30;

    function setTime() {
     var timerInterval = setInterval(function() {
     secondsLeft--;
     timerEl.textContent = secondsLeft + " seconds left in quiz";

                    //time runs out== conclude test, display prompt, data storage and display
                    if(secondsLeft === 0) {
                        playerFormEl.classList.remove("invisible");
                        displayScoreEl.textContent = score;
                        $("#choices").empty();
                        $("#question").empty();
                        $("#section").empty();
                        var questionsIndex = 4;
                        localStorage.setItem("highscore", score);
                        startQuizEl.classList.remove("invisible");
                        questionEl.textContent = "the quiz has ended.";
                        clearInterval(timerInterval);
        return secondsLeft
      
    }
return secondsLeft
  }, 1000);
  return secondsLeft
}
setTime();

        renderChoices();
       
});




