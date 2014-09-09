  var questions = [{
      question: "Rainbow Dash got her <br>cutie mark after what event?",
      choices: ["Making a Sonic Rainboom", "Beating an exam", "Traveling to Manehattan", "Defending Fluttershy"],
      text:"She received her cutie mark <br> after creating a <b>Sonic rainboom</b>",
      answer: "Making a Sonic Rainboom"
       }, {
      question: "Where was Pinkie Pie raised?",
      choices: ["Ponyville", "Equesteria", "Rock farm", "Manehattan"],
      text:"Ironically, she was raised on a rock farm",
      answer: "Rock farm"
  }, {
      question: "Which villian did<br> Fluttershy befriend?",
      choices: ["Nightmare Moon", "Discord", "King Sombra", "Trixie"],
      text:"Fluttershy befriended Discord",
      answer: "Discord"
  }, {
      question: "What is the name of <br>Applejack's pet?",
      choices: ["Winona", "Opal", "Angel", "Owlicious"],
      text:"Applejack owns a dog named Winona",
      answer:"Winona"
  }, {
      question: "Which pony says<br> 'da magicks'?",
      choices: ["Hoity Toity", "Photofinish", "Derpy", "Rainbow Dash"],
      text:"Photofinish favorite<br> saying is da magicks",
      answer: "Photofinish"
  }];

var numberQuestions = questions.length;

var numberCorrect = 0;

var questionIndex = 0;

var inputAnswer = "";

$( document ).ready( function() {
    displayQuestion( questionIndex );
    $("#explanation").hide();

    $( '#nextButton' ).click( function(e) {
        e.preventDefault();

        if ( $( "input[name=choice]" ).is( ":checked" ) ) {
            inputAnswer = $( "input[name=choice]:checked" ).val();

            var correctAnswer = questions[questionIndex].answer;
            if ( inputAnswer === correctAnswer ) {
                numberCorrect++;
                questionIndex++;
                displayQuestion( questionIndex );                    
            }
            else{
                $("#question").hide();
                $("#answer").hide();
                $("#explanation").show();
                $("#explanation span").html(questions[questionIndex].text);
                $("#firstButton").hide();
                $("#secondButton").show();
               
               
            }
           

            $( "#correctAnswer" ).text( "Correct: " + numberCorrect );

          
        }
        
        /*trying to input congratulations message with final score*/
        /*if ( questionIndex === 5){
        }*/
    });

     $( '#secondButton' ).click( function(e) { 
                              e.preventDefault();
         console.log('second button was clicked');
                              questionIndex++;
         console.log(questionIndex);
                              displayQuestion( questionIndex );
          $("#question").show();
          $("#answer").show();
          $("#explanation").hide();
          $("#firstButton").show();
          $("#secondButton").hide();
                        });
});

function displayQuestion( qnumber ) {
    if ( qnumber < numberQuestions ) {
        var question = questions[qnumber];
        console.log(question);
        $( '#question' ).html( question.question );
        var choices = "";
        var choicesNumber = question.choices.length;
        for (var i = 0; i < choicesNumber; i++ ) {
            choices += "<input type='radio' name='choice' value='" + question.choices[i] + "'/> ";
            choices += question.choices[i] + "<br />";
        }
        $( '#answer' ).html( choices );
        $( "#correctAnswer").text( "Correct: " + numberCorrect );
    }
    else {
        if(numberCorrect < 5){
        $( "#question").html("<b>GOOD TRY!</b>");
         $( "#answer").hide();
        $("#correctAnswer").html("You got <br>"+ numberCorrect + " questions <br>correct. Watch more MLP.");
                            }
        else{ 
        $( "#question").html("<b>CONGRATS</b>");
        $( "#answer").hide();
        $("#correctAnswer").text("You got all the questions correct! Twilight Sparkle is proud.");}}
}


