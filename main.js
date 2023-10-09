let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let dayE = document.querySelector("span.day");
let monthE = document.querySelector("span.month");
let yearE = document.querySelector("span.year");

console.log(day);
let button = document.querySelector("button");

let years = (document = document.querySelector(".years span"));
let months = (document = document.querySelector(".months span"));
let days = (document = document.querySelector(".days span"));

const date = new Date();

let eYear = date.getFullYear();
let eMonth = date.getMonth() + 1;
let eDay = date.getDate();

button.onclick = function () {
  if (
    day.value == 0 ||
    month.value == 0 ||
    year.value == 0 ||
    day.value > 31 ||
    month.value > 12 ||
    year.value > 2023
  ) {
    if (day.value == 0) {
      dayE.innerHTML = "This field is required";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      days.innerHTML = "--";
    } else {
      if (day.value > 31) {
        dayE.innerHTML = "Must be a valid day";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        days.innerHTML = "--";
      } else {
        dayE.innerHTML = "";
        day.style.borderColor = "hsl(0, 0%, 86%)";
      }
    }
    if (month.value == 0) {
      monthE.innerHTML = "This field is required";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      months.innerHTML = "--";
    } else {
      if (month.value > 12) {
        monthE.innerHTML = "Must be a valid month";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        months.innerHTML = "--";
      } else {
        monthE.innerHTML = "";
        month.style.borderColor = "hsl(0, 0%, 86%)";
      }
    }
    if (year.value == 0) {
      yearE.innerHTML = "This field is required";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      years.innerHTML = "--";
    } else {
      if (year.value > 2023) {
        yearE.innerHTML = "Must be in the past";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        years.innerHTML = "--";
      } else {
        yearE.innerHTML = "";
        year.style.borderColor = "hsl(0, 0%, 86%)";
      }
    }
  } else {
    if (day.value <= 31) {
      dayE.innerHTML = "";
      day.style.borderColor = "hsl(0, 0%, 86%)";
      if (eDay >= day.value) {
        days.innerHTML = eDay - day.value;
      } else {
        days.innerHTML = 31 - (day.value - eDay);
      }
    }
    if (month.value <= 12) {
      monthE.innerHTML = "";
      month.style.borderColor = "hsl(0, 0%, 86%)";
      if (eMonth >= month.value) {
        months.innerHTML = eMonth - month.value;
      } else {
        months.innerHTML = month.value;
      }
    }
    if (year.value <= 2023) {
      yearE.innerHTML = "";
      year.style.borderColor = "hsl(0, 0%, 86%)";
      years.innerHTML = eYear - year.value;
    }
  }
};
