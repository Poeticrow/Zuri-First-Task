"use strict";

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];
  return currentDay;
}

// Update the content of the element with data-testid="currentDayOfTheWeek"
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  getCurrentDayOfWeek();

  
//////////////////////////
function getCurrentUTCTime() {
  const currentDate = new Date();
  const utcTimeString = currentDate.toISOString().substr(11, 8); // Extract time portion from ISO string
  return utcTimeString;
}

// Update the content of the element with data-testid="currentUTCTime"
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  getCurrentUTCTime();
