const carousel = document.querySelector('.conteudo');
const message = carousel.querySelector('.conteudo1');

let carouselWidth = 0;

function cloneMessages() {
  const carouselWidth = carousel.offsetWidth;
  const messageWidth = message.offsetWidth;
  const numClones = Math.ceil(carouselWidth / messageWidth) + 1;

  for (let i = 0; i < numClones; i++) {
    const clone = message.cloneNode(true);
    carousel.appendChild(clone);
  }

  carousel.style.width = `${messageWidth * numClones}px`;
}

cloneMessages();
