import './style.css'

setupCounter();

function setupCounter() {
  const $counter = document.querySelector('#counter');
  const $btnIncrease = document.querySelector('#trigger-increase');
  const $btnDecrease = document.querySelector('#trigger-decrease');

  let counter = 0
  const updateCounter = (increment) => {
    showCounter(counter + increment);
  }
  const showCounter = (count) => {
    counter = count;
    $counter.innerHTML = `Jumlah item: ${counter}`;
  }
  $btnIncrease.addEventListener('click', () => updateCounter(1));
  $btnDecrease.addEventListener('click', () => updateCounter(-1));

  showCounter(0);
}
