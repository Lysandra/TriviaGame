
// var audio = new Audio("https://youtu.be/73tGe3JE5IU");
// console.log(audio);

var number = 30;
var intervalId;
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
  secondaryScreens();
});

function secondaryScreens() {
  $("#question-screen").addClass("hidden");
  $("#result-screen").addClass("hidden");
};

function start() {
  $(".start").on("click", function() {
    $("#question-screen").removeClass("hidden");
    $("#result-screen").addClass("hidden");
  });
};

function decrement() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  number--;
  $("#countdownTimer").text(number);
    if(number === 0) {
      alert("Times Up!");
    }
  };

decrement();

// function checkAnswer() {
//   $("input").on("click", function() {
//     $("input").unbind("click");
//     answers = $(this).attr("answer");
//     console.log(questions);

//   });
// };



  //     for(var i = 0; i < questions.length; i++) {
  //       if(questions[i].answer == answers[i]) {
  //         correctCounter++;
  //         $("#correctCounter").text(correctCounter);
  //         console.log(questions[2]);
  //       }
  //       else {
  //         incorrectCounter++;
  //         $("#incorrectCounter").text(incorrectCounter);
  //         clearInterval(intervalId);
  //       }
  //     };
  //   });
  // });

$("input:checked").change(function() {
  if(answers.indexOf($(this).val()) > -1) {
    correctCounter++;
  }
  else {
    incorrectCounter++;
  }
});

// function reset() {
//     clearInterval(intervalId);
//     correctCounter=0;
//     incorrectCounter=0;
// });



//audio.play();