import Notiflix from 'notiflix';

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstDelay = Number(event.target.delay.value);
  const delayStep = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * delayStep;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log('Fulfilled promise ${position} in ${delay}ms');
      })
      .catch(({ position, delay }) => {
        console.log('Rejected promise ${position} in ${delay}ms');
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}