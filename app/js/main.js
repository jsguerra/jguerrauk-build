"use strict";

require("core-js/modules/es.date.to-string");

var clockElement = document.getElementById("analogClock");
var offset = -90;

var timer = function timer() {
  var date = new Date(),
      milliseconds = date.getMilliseconds(),
      seconds = date.getSeconds(),
      hours = date.getHours(),
      minutes = date.getMinutes();
  seconds += milliseconds / 1000; // using milliseconds smooths hand motions

  minutes += seconds / 60;
  hours += minutes / 60; // Normalize to the 12 hour clock

  if (hours > 12) {
    hours -= 12;
  }

  clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
  clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
  clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");
  requestAnimationFrame(timer);
};

timer();