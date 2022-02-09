import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const inputEll = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const daysEll = document.querySelector('span[data-days]');
const hoursEll = document.querySelector('span[data-hours]');
const minutesEll = document.querySelector('span[data-minutes]');
const secondsEll = document.querySelector('span[data-seconds]');

inputEll.addEventListener('input', () => { });
btnStart.addEventListener('click', onStartTimer);

const date = new Date();
// let eventDate = [];

flatpickr("input#datetime-picker", {
    enableTime: false,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        btnStart.disabled = false;
        
        if (selectedDates[0].getTime() < date.getTime()) {
            alert("Please choose a date in the future");
            btnStart.disabled = true;
            
        }
     return eventDate = selectedDates[0];   
    }
});
function onStartTimer(eventDate) {
    btnStart.disabled = true;
    const startTime = Date.now();

    const setId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;


        const deadlineTime = eventDate - deltaTime  ;

        const timeDeadline = convertMs(deadlineTime);
        onFaceTimer(timeDeadline);

        // const currentTime = Date.now();
        // const deltaTime = currentTime - startTime;
        // const time = convertMs(deltaTime)
        // onFaceTimer(time);
           
    }, 1000);
    
}


function onFaceTimer({ days, hours, minutes, seconds }) {
    daysEll.textContent = `${days}`;
    hoursEll.textContent = `${hours}`;
    minutesEll.textContent = `${minutes}`;
    secondsEll.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

