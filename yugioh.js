const row = document.getElementById("row");
console.log(row);
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
      console.log(card.data[1].card_images[0].image_url);
      for (let i = 0; i < 20; i++) {
        row.innerHTML += `<div class="col col-12 col-md-6 col-lg-4">
        <div class="card" >
  <img src="${card.data[i].card_images[0].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.data[i].name}</h5>
    <p class="card-text">${card.data[i].desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>`;
      }
    })
    .catch((err) => [console.log(err)]);
};
getYugiohCard();
