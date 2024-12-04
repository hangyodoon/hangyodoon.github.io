const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}








let state = {
    dress: 0,
    hair: 0,
    hat: 0,
    shoes: 0,
    accessory: 0,
    face: 0,
  };
  nextdress();
  nexthair();
  nextface();
  nextface();
  //function to change dress
  function nextdress() {
    let dress = document.querySelector("#dress");
    if (state.dress < 5) {
      state.dress++;
      dress.setAttribute("class", `dress${state.dress}`);
    } else if (state.dress === 5) {
      state.dress = 0;
      dress.setAttribute("class", `dress${state.dress}`);
    }
  }
  

  
  function nexthat() {
    let hat = document.querySelector("#hat");
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
  }
  


  function nextface() {
    let face = document.querySelector("#face");
    if (state.face < 4) {
      state.face++;
      face.setAttribute("class", `face${state.face}`);
    } else if (state.face === 4) {
      state.face = 0;
      face.setAttribute("class", `face${state.face}`);
    }
  }