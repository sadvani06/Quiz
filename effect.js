$(".box").not("#box1").hide();
var questions=[
                          {question:"Question1", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:1},
			  {question:"Question2", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:2},
			  {question:"Question3", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:3},
			  {question:"Question4", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:4},
			  {question:"Question5", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:1},
			  {question:"Question6", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:2},
			  {question:"Question7", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:3},
			  {question:"Question8", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:4},
			  {question:"Question9", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:1},
			  {question:"Question10", choices:["Answer1", "Answer2", "Answer3", "Answer4"], correct:2}
			  ];
			  
$("#box1").html(function()


	var choiceDisplay="<ul>";
	for var(i=0; i < questions[1].choice.length ; i++){
	choiceDisplay + "<li><input type='radio'>" + choice[i] + "</li>"	
	}
	var choiceDisplay += "</ul>";
	return choiceDisplay;
);

$("#nextButton").on('click', function(){
	if(input === questions[1].correct){
		ADD MORE CODE HERE
	}
})
