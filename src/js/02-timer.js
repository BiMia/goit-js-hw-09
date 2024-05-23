// Described in documentation
import flatpickr from "flatpickr";
// Additional styles import
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  flatpickr("#datetime-picker", options);


  const inputData = document.querySelector("#datetime-picker")
  const startBtn = document.querySelector("[data-start]");
  const dataDays = document.querySelector("[data-days]")
  const dataHours = document.querySelector("[data-hours]")
  const dataMinutes = document.querySelector("[data-minutes]")
  const dataSeconds = document.querySelector("[data-seconds]")
  
  startBtn.disabled = true;
  
  function validateInput() {
     inputData.addEventListener("change", () => {
          const minData = new Date(); console.log(minData)
          const selectedData = new Date(inputData.value); console.log(selectedData)    
  });
  }
  validateInput();
  
  startBtn.addEventListener("click", () => {
  
      startBtn.disabled = true;
      
      const timerId = setInterval(() => {
  
  const targetDate = new Date(inputData.value);
      
  const currentDate = new Date();
      
  const differenceTime = targetDate.getTime() - currentDate.getTime();
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(differenceTime/ day);
    const hours = Math.floor((differenceTime % day) / hour);
    const minutes = Math.floor(((differenceTime % day) % hour) / minute);
    const seconds = Math.floor((((differenceTime% day) % hour) % minute) / second);
      
          
     console.log(days, hours, minutes, seconds);
       
      if (differenceTime < 1000) {
      clearInterval(timerId); 
          }
         
      const startTime = (value) => value.toString().padStart(2, "0");
       
      dataDays.textContent = startTime(days);
      dataHours.textContent = startTime(hours);
      dataMinutes.textContent = startTime(minutes);
      dataSeconds.textContent = startTime(seconds);
                 
      }, 1000);
      
  });
