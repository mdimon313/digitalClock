function clock() {
  let hour, minute, second, progress, session;
  hour = document.querySelector("#hours");
  minute = document.querySelector("#minutes");
  second = document.querySelector("#second");
  progress = document.querySelector(".progress");
  session = document.querySelector("#session")

  let today, todayHour, todayMinute, todaySecond;
  today = new Date();
  todayHour = today.getHours();
  todayMinute = today.getMinutes();
  todaySecond = today.getSeconds();

  let sessions = "AM";
  if (todayHour == 0) {
    todayHour = 12;
  }

  if (todayHour > 12) {
    todayHour -= 12;
    sessions = "PM"
  }

  let hours, minutes, seconds;

  hours = (10 > todayHour) ? "0" + todayHour : todayHour;
  minutes = (10 > todayMinute) ? "0" + todayMinute : todayMinute;
  seconds = (10 > todaySecond) ? "0" + todaySecond : todaySecond;

  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  session.innerText = sessions;
  progress.style.width = (todaySecond / 60) *100 + "%";
}

setInterval(clock, 1000);