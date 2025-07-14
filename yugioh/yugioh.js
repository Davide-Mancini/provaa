const row = document.getElementById("row");

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
      // GENERO LE CARD--------------------------------------------------------------------
      const nuovoset = new Set();
      for (let i = 0; i < 200; i++) {
        // console.log(card.data[i]);
        row.innerHTML += `<div class="hpcard col col-12 col-md-6 col-lg-4 g-3 " data-id="${card.data[i].id}">
        <div class="card h-100 " >
  <img src="${card.data[i].card_images[0].image_url}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${card.data[i].name}</h5>
    <p class="card-text flex-grow-1">${card.data[i].desc}</p>
    <button class="bottonedeck btn btn-primary" data-id="${card.data[i].id}">Aggiungi al tuo Deck</button>
  </div>
</div>
</div>`;

        if (!nuovoset.has(card.data[i].type)) {
          console.log(nuovoset);
          nuovoset.add(card.data[i].type);
          const menutendina = document.getElementById("menutendina");
          menutendina.innerHTML += ` <li><a class="dropdown-item" href="#">${card.data[i].type}</a></li>`;
        }
      }
      const deck = document.getElementById("yourdeck");
      const tuttiBottoni = document.querySelectorAll(".bottonedeck");
      const tutteCard = document.querySelectorAll("#row .col");
      tuttiBottoni.forEach((bottone, i) => {
        bottone.addEventListener("click", () => {
          const cardCol = bottone.closest(".col");
          const cloneCard = cardCol.cloneNode(true);
          deck.appendChild(cloneCard);
        });
      });
    })
    .catch((err) => [console.log(err)]);
};
getYugiohCard();
