refs = {
    btnClickStart: document.querySelector("button[data-start]"),
    btnClickStop: document.querySelector("button[data-stop]"),
    bodyColor: document.body,
}

refs.btnClickStart.addEventListener('click',onStartBtn);
refs.btnClickStop.addEventListener('click', onStopBtn);

function onStartBtn() {
    refs.btnClickStart.setAttribute('disabled','disable');
    timerId = setInterval(() => {
        refs.bodyColor.style.backgroundColor = getRandomHexColor();
    }, 800);
}
function onStopBtn() {
    clearInterval(timerId);
    refs.btnClickStart.removeAttribute('disabled', 'dasabled');
    refs.bodyColor.style.backgroundColor = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}