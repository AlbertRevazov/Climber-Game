let climber = document.querySelector('#man');
let contentWrapper = document.getElementById('content');
let contentWrapper2 = document.getElementById('content2');
let box = document.querySelectorAll('.box');
let win = document.createElement('img');
win.setAttribute('src', 'img/win.gif');
win.setAttribute('height', '70px');
win.style.marginTop = '-60px';
win.style.marginLeft = '-15px';
let fail = document.querySelector('#zero');
let finish = document.querySelector('#ten');
let steps = document.getElementsByClassName('steps');
let modelResult = document.getElementById('model-result-wrapper');
let modelResult2 = document.getElementById('model-result-wrapper2');
let btnClose = document.getElementById('btn-close');
let btnClose2 = document.getElementById('btn-close2')
let button = document.querySelector('.name');
let input = document.querySelector('.NamePlayer');
let lose = '';
let winner = '';
let move = 0;
let score = 0;
let bio = document.querySelector('.bio');

button.addEventListener('click', function () {
  let textBio = document.createElement('h3');
  textBio.innerText = `${input.value}`;
  bio.appendChild(textBio);
})


document.addEventListener('keydown', function (event) {
  if ((event.key === 'z' || event.key === 'я') && (steps.length - 1 > move)) {
    move += 1;
    score += 10;
    steps[move].appendChild(climber);
    if (move === steps.length - 1) {
      finish.prepend(win);
      winner += ' You   Win';
      prepareWin(winner);

    }

  } else if ((event.key === 'x' || event.key === 'ч') && (move > 0)) {
    move -= 1;
    score -= 10;
    steps[move].appendChild(climber);
    if (move === 0) {
      lose += 'Земля тебе пуховики';
      prepareLose(lose);
    }
  }
})


const prepareWin = winner => {
  contentWrapper.innerHTML = `${winner}`;
  modelResult.style.display = 'inline-block';
}

const prepareLose = lose => {
  contentWrapper2.innerHTML = `${lose} `;
  modelResult2.style.display = 'inline-block';
}

const closeModal = () => {
  modelResult.style.display = 'none';
  location.reload();
}



overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
btnClose2.addEventListener('click', closeModal);
