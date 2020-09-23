

// Setting our question variables
var cScore = 0
var currentQuestionIndex = 0;
var questions = [
  {
      question: "Which of the following elements can you attach jQuery events to?",
      choices: ["object", "embed", "applet", "None of the above"],
      answer: "None of the above"
  },
  {
      question: "Is the following statement true or false? jQuery’s event system requires that a DOM element allows attaching data via a property on the element, so that events can be tracked and delivered.",
      choices: ["true", "false" ],
      answer: "true"
  },
  {
    question: "Is the following statement true or false? jQuery defines focusin and focusout events which are a cross-browser of the focus and blur events.",
    choices: ["true", "false" ],
    answer: "true"
  },
  {
    question: "Which code is faster?",
    choices: ["$(‘#test1, .test2, .test3, .test4’);", "$(‘#test1’).add(‘.test2’).add(‘.test3’).add(‘.test4’);" ],
    answer: "$(‘#test1, .test2, .test3, .test4’);"
  },
  {
    question: "$.grep(array1, function1); ---> the elements of array1 array which satisfy function1 function.",
    choices: ["sorts", "updates", "removes", "filters" ],
    answer: "filters"
  },
  {
    question: "The hide() function hides an element by ____.",
    choices: ["setting “display” inline style attribute of that element to “none”.", "setting the vertical attribute of that element to “-100px” off visible screen." ],
    answer: "setting “display” inline style attribute of that element to “none”."
  },
  {
    question: "Which of the following is the correct way to create a div element with a link text “Hello” with jQuery?",
    choices: ["$(“#idName”).create(“div”).text(“Hello“);", "$(“#idName”).append(“Hello“);" ],
    answer: "$(“#idName”).append(“Hello“);"
},
{
  question: "$.extend(false, object0, object1, object2); <--- What do I do?",
  choices: ["Extends the object0 by merging object1 and object2 with object0", "Extends the object1 by merging object0 and object2 with object1.", "Extends the object2 by merging object0 and object1 with object2." ],
  answer: "Extends the object0 by merging object1 and object2 with object0."
},

]
// 

//

//

$(document).on("click", ".choice", function () {
  $("#choices").empty();
  //check if its the right answer, currentQuestionIndex = integer.
  
  if (this.value !== questions[currentQuestionIndex].answer) {
    if (time > 10){
      time -= 10;
      $("#tNum").text("Timer: " + (time));
    }else{
      time === 0;
      $("#tNum").text("Timer: OUT");
    };

    
  }else{
    cScore ++;
  $("#cScore").text("Score: " + cScore);
}

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
});

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex] //first question " = 0 "
  var currentChoices = questions[currentQuestionIndex].choices

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question

  var choicesEl = document.getElementById("choices");
  console.log(currentChoices)

 for(var i = 0; i < currentChoices.length; i++) {
      var choiceSelection = document.createElement("button");
      choiceSelection.setAttribute("class", "choice");
      choiceSelection.setAttribute("value", currentChoices[i]);
      choiceSelection.textContent = i + 1 + ". " + currentChoices[i];
      
      choicesEl.appendChild(choiceSelection);
  }
}

questions[0].question

var time = 75;
$("#tNum").hide();
$("#tNum").text("Timer: " + (time));
// function when the "Quiz Time" button is clicked, the quiz starts.
//
$("#quizTime").on("click", () => { //Quiz-time click main function
    var timeEl = document.querySelector(".time");

    // Changing objects in the container.
    $("#quizTime").remove();
    $("#tNum").fadeIn(3000);
    getQuestion();

   
    setTime();
  
}); //Quiz-time click main function


function quizEnd(){
  $(".container").empty();
  $("#tNum").remove();
  time = 0;
  // $form = $(`<form>form</form>`);
  // $form.append('<input type="button" value="button">');
  $("#form").prepend('<input type="button" value="button">hello</input>');
  var ele = document.create
}



// TIMER CODE
    function setTime() { 
        var timerInterval = setInterval( () => {
          if (time > 0){
          time--;
          $("#tNum").text("Timer: " + (time)); // "textcontent" is just text, updating the "string"
          }
          else {
            clearInterval(timerInterval);
            alert("Your Score: " + cScore + "!");
          }
      
        }, 1000);
      };

      function sendMessage() {
        //timeEl.textContent = "";
        timeEl.setAttribute = "style", "display:none"; //style="display:none"
      
        var imgEl = document.createElement("img"); //creates an element for html file.
      
        imgEl.setAttribute("src", "images/image_1.jpg");
        mainEl.appendChild(imgEl);
      
      };






// 