document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
    let intervalId = null;

    function startColorChange() {
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      startButton.disabled = true;
    }
  
    function stopColorChange() {
      clearInterval(intervalId);
      startButton.disabled = false;
    }
  
    startButton.addEventListener('click', startColorChange);
  
    stopButton.addEventListener('click', stopColorChange);
  });
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

