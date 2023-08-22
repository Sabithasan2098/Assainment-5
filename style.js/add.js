
const cardNo6 = document.getElementById('cardNo6');
const h2Element6 = cardNo6.querySelector('h2');

const cardNo5 = document.getElementById('cardNo5');
const h2Element5 = cardNo5.querySelector('h2');

const cardNo4 = document.getElementById('cardNo4');
const h2Element4 = cardNo4.querySelector('h2');

const cardNo3 = document.getElementById('cardNo3');
const h2Element3 = cardNo3.querySelector('h2');

const cardNo2 = document.getElementById('cardNo2');
const h2Element2 = cardNo2.querySelector('h2');

const cardNo1 = document.getElementById('cardNo1');
const h2Element1 = cardNo1.querySelector('h2');

const outputTextArea = document.getElementById('outputTextArea');



cardNo6.addEventListener('click', function() {
    const h2Text = h2Element6.innerText;
    outputTextArea.value += h2Text + '\n';
});
cardNo5.addEventListener('click', function() {
    const h2Text = h2Element5.innerText;
    outputTextArea.value += h2Text + '\n';
});
cardNo4.addEventListener('click', function() {
    const h2Text = h2Element4.innerText;
    outputTextArea.value += h2Text + '\n';
});
cardNo3.addEventListener('click', function() {
    const h2Text = h2Element3.innerText;
    outputTextArea.value += h2Text + '\n';
});
cardNo2.addEventListener('click', function() {
    const h2Text = h2Element2.innerText;
    outputTextArea.value += h2Text + '\n';
});
cardNo1.addEventListener('click', function() {
    const h2Text = h2Element1.innerText;
    outputTextArea.value += h2Text + '\n';
});
