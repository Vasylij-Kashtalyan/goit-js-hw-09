const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector('input[name="delay"]');
const inputStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');
const btnEl = document.querySelector('button');

formEl.addEventListener('submit', onFormSubmit);
inputDelayEl.addEventListener('input', ()=>{});
inputStepEl.addEventListener('input', ()=>{});
inputAmountEl.addEventListener('input', ()=>{});

function onFormSubmit(evt) {
  evt.preventDefault();
  const startdelay = +inputDelayEl.value; // перваяотсрочка вызова ф-ции
  const step = +inputStepEl.value; // шаг изменения отсрочки
  const amount = +inputAmountEl.value; // кол-во создаваемых промисов

  for (let i = 0; i < amount; i += 1) {
    const currentPosition = i+1; // текущая позиция промиса (номер промиса)
    const currentDelay = startdelay + i * step; // текущая отсрочка вызова ф-ции
    
    createPromise(currentPosition, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        
      
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        
      });
  }

  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  const promises = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promises;
}