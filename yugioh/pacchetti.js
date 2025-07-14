const buttonApriPacchetto = document.getElementById("apripacchetto");
let allCards = [];
buttonApriPacchetto.addEventListener("click", () => {
  const eliminaPacchetto = document.getElementsByClassName("eliminaPacchetto");
  eliminaPacchetto[0].classList.add("d-none");
  const random12 = getRandomCards(allCards, 12);
  random12.forEach((carta) => {
    const pacchettoAperto = document.getElementById("pacchetto-aperto");
    pacchettoAperto.innerHTML += `<div class="colonna col col-2">
    <div class="card" >
  <img src="${carta.card_images[0].image_url}" class="card-img-top" alt="...">
  
</div>
    </div>`;
    const colonne = document.querySelectorAll(".colonna");
    colonne.forEach((colonna, i) => {
      setTimeout(() => {
        colonna.classList.add("visibile");
        colonna.style.animation = `dropCard 3s linear ${i * 3}s forwards`;
      }, i * 3000);
    });
  });
});

console.log(row);
const getRandomCards = function (arr, num) {
  const arrayCopia = [...arr];
  for (let i = arrayCopia.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopia[i], arrayCopia[randomIndex]] = [
      arrayCopia[randomIndex],
      arrayCopia[i],
    ];
  }
  return arrayCopia.slice(0, num);
};

const getYugiohCard = function () {
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then((res) => {
      if (res.ok === true) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((card) => {
      allCards = card.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getYugiohCard();
