function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
       total: t,
       days: days,
       hours: hours,
       minutes: minutes,
       seconds: seconds
    };
 }
 
 function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
 
    function updateClock() {
       var t = getTimeRemaining(endtime);
 
       daysSpan.innerHTML = t.days;
       hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
       minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
       secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
 
       if (t.total <= 0) {
          clearInterval(timeinterval);
       }
    }
 
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
 }
 
 const now = new Date();
 var nextyear = now.getFullYear();
 
 var Halloween = "oct 31 "+nextyear+" 00:00:00";
 var Christmas = "dec 25 "+nextyear+" 00:00:00";
 
 if (now.getMonth()>9) {
    var Halloween = "oct 31 "+(nextyear+1)+" 00:00:00";
 }
 if (now.getMonth()==11 && now.getDate>25) {
    var Christmas = "dec 25 "+(nextyear+1)+" 00:00:00";
 }
 
 initializeClock("clockdiv", Halloween);
 initializeClock("christmas", Christmas);
 
 