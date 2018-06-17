
var audio = new Audio("https://youtu.be/73tGe3JE5IU");
console.log(audio);

var number = 3;
var intervalId;
var galaxyanswer;
var howOldAnswer;
var darkMatterAnswer;
var commonStarAnswer;
var closetStarAnswer;
var answers = ["ellipitical", "13.8B light years", "27%", "Proxima Centauri"];
var correctCounter = 0;
var incorrectCounter = 0;

var questions = [
  {question: "1. What type of galaxy is the most common in the universe?", answer: "ellipitical"},
  {question: "2. How old is the universe in light years?", answer: "13.8B light years"},
  {question: "3. What percent of the universe is dark matter?", answer: "27%"},
  {question: "4. What is the most common type of star found in the Milky Way?", answer: "red dwarf stars"},
  {question: "5. What is the closest star to the Sun?", answer: "Proxima Centauri"},
]

console.log(questions);

$(document).ready(function() {
  intervalId = setInterval(decrement, 1000);
  console.log("ME100");

    $(".done").on("click", function() {

      for(var i = 0; i < questions.length; i++) {
        if(questions[i].answer == answers[i]) {
          correctCounter++;
          $("#correctCounter").text(correctCounter);
          console.log(questions[2]);
        }
        else {
          incorrectCounter++;
          $("#incorrectCounter").text(incorrectCounter);
          clearInterval(intervalId);
        }
      };
    });
  });

  function decrement() {
  if(number != 1)
    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#countdownTimer").text(number);
    console.log(number);

    //  Once number hits zero...
      if (number === 0) {

      //  ...run the stop function.
      //run();

      //  Alert the user that time is up.
      alert("Times Up!");
      number = 1;
      return;
    }
  
  };

  $("input:checked").change(function() {
    if(answers.indexOf($(this).val()) > -1) {
      correctCounter++;
    }
    else {
      incorrectCounter++;
    }
  });

// checks if answer matches the correct choice
     

function reset() {
    clearInterval(intervalId);
    correctCounter=0;
    incorrectCounter=0;
};

//audio.play();