
// Initialize values of seconds, minutes and hours to 0 to start the stopwatch from these initial values
let sec=0;
let min=0;
let hr = 0;



let timer = document.querySelector('#timer');

const start = document.querySelector('#start');

const stopC = document.querySelector('#stop');

const reset = document.querySelector('#reset');
var runTimer;


function runCounter(){
  // this function gets called repeatedly for an interval of 1000milli seconds or 1 second, So increement seconds value by 1 in each call 
  sec++;
  
  //secs to mins conversion
  if (sec == 60){
    min++;
  }

  // mins to hrs conversion
  if (min == 60){
    hr++;
  }

  //min and sec value to display when greater or equals 60 take the remainder after dividing by 60
  min= min%60;
  sec = sec%60;
  
  //when seconds or minutes or hours is a single digit value we should add a 0 at tens digit to display it in stopwatch
  let secStr = sec.toString(10);
  if (secStr.length == 1){
    sec = '0' + secStr
  }

  let minStr = min.toString(10);
  if (minStr.length == 1){
    min = '0' + minStr
  }
  
  let hrStr = hr.toString(10);
  if (hrStr.length == 1){
    hr = '0' + hrStr
  }

  // changing the display values of timer to values in function
  timer.innerHTML = `${hr}h : ${min}m : ${sec}s`;
}

function startCounter(){
  // after clicking start button this function gets called and run the runCounter function in every second
  //disabling the buttons to prevent eventlisteners on running events.
  start.disabled = true;
  stopC.disabled = false;
  //call the runCounter function every second
  runTimer = setInterval(runCounter, 1000);
  
}

function stopCounter(){
  // clearInterval()
  stopC.disabled = true;
  start.disabled = false;
  clearInterval(runTimer);
}

function resetCounter(){
  // counter = 0;

  clearInterval(runTimer);
  hr = 0;
  min = 0;
  sec = 0;
  timer.innerHTML = `0${hr}h : 0${min}m : 0${sec}s`;
  start.disabled = false;

}

// Adding event listeners on buttons start, stop and reset

start.addEventListener('click',startCounter);

stopC.addEventListener('click',stopCounter);

reset.addEventListener('click',resetCounter);
