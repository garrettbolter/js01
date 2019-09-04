//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

$(document).ready(function() {
 'use strict';
    paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
tool.onMouseDown = function(event) {
 var c = Shape.Circle(event.point, 20);
 c.fillColor = 'green';
};
paper.view.draw();
});

let today = new Date();
let day = "";
let ampm = "";
let hours = today.getHours();
let minutes = today.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let seconds = today.getSeconds();
if (seconds < 10) {
    seconds = "0" + seconds;
}

function determineDay(num) {
    if (num == 1) {
        day = "Monday";
    } else if (num == 2) {
        day = "Tuesday";
    } else if (num == 3) {
        day = "Wednesday";
    } else if (num == 4) {
        day = "Thursday";
    } else if (num == 5) {
        day = "Friday";
    } else if (num == 6) {
        day = "Saturday";
    } else {
        day = "Sunday";
    }
}

function determineAmPm(hour){
if (hour >= 12) {
    hours = hour % 12;
    if (hours == 0) {
        hours = 12;
    }
    return "PM";
} else {
    return "AM";
}
};

determineDay(today.getDay());
ampm = determineAmPm(hours);

console.log(ampm);

document.getElementById("answer1").innerHTML = "Today is "
    + day + ".<br>" + "Current Time : " + hours + ":" + minutes + ":" + seconds + " " + ampm;


let month = today.getMonth();
month = month + 1;
if (month < 10) {
    month = "0" + month;
}
let calendarDay = today.getDate();
if (calendarDay < 10) {
    calendarDay = "0" + calendarDay;
}
let year = today.getFullYear();


document.getElementById("answer2").innerHTML = month + "-" + calendarDay + "-" + year + "<br>" + month + "/" + calendarDay + "/" + year + "<br>" + calendarDay + "/" + month + "/" + year;
