//start game with score at 0
function submitAnswers() {
    var total = 10;
    var score = 0;

    //manipulate the DOM
    //must have all the same name so you cannot select more than one answer
    var q1 = document.getElementsByName("q1");
    console.log(q1);
    var q2 = document.getElementsByName("q2");
    var q3 = document.getElementsByName("q3");
    var q4 = document.getElementsByName("q4");
    var q5 = document.getElementsByName("q5");
    var q6 = document.getElementsByName("q6");
    var q7 = document.getElementsByName("q7");
    var q8 = document.getElementsByName("q8");
    var q9 = document.getElementsByName("q9");
    var q10 = document.getElementsByName("q10");

    //set correct answers using an array
    var answers = ["b", "a", "c", "a", "d", "b", "c", "c", "a", "d"];

    //check answers using conditional statement
    if (q1 == answers[0]) {
        score++;
    }
    if (q2 == answers[1]) {
        score++;
    }
    if (q3 == answers[2]) {
        score++;
    }
    if (q4 == answers[3]) {
        score++;
    }
    if (q5 == answers[4]) {
        score++;
    }
    if (q6 == answers[5]) {
        score++;
    }
    if (q7 == answers[6]) {
        score++;
    }
    if (q8 == answers[7]) {
        score++;
    }
    if (q9 == answers[8]) {
        score++;
    }
    if (q10 == answers[9]) {
        score++;
    }

    // the page will reveal the number of questions the player answered correctly and incorrectly
    alert('Your score is: ' + score + ' out of ' + total)



    // player has limited amount of time to finish the quiz
    // the game ends when the time runs out
    //include a countdown timer
    document.getElementById('timer').text =
        03 + ":" + 00;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m < 0) { alert('Time is up!') }

        document.getElementById('timer').innerHTML =
            m + ":" + s;
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec };

        if (sec < 0) { sec = "59" };

        return sec;
    }
}