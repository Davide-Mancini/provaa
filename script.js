const getFbiWanted = function () {
  fetch("https://api.fbi.gov/wanted/v1/list")
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((wantedObj) => {
      console.log(wantedObj);
      const arrayWanted = wantedObj.items;
      const foto = wantedObj.items;
      console.log(arrayWanted);
      const row = document.getElementById("row");
      arrayWanted.forEach((wanted, i) => {
        console.log(wanted);
        const ognifoto = wanted.images[0];
        if (wanted.aliases) {
          const titolo = document.getElementById("titolo");
          titolo.innerText = wanted.aliases;
        }
        row.innerHTML += `<div class="col col-12 col-md-6 col-lg-4">
      <div class="card" ">
  <img src="https://placebear.com/300/300" class="card-img-top" alt="...">
  <div class="card-body">
 <h1 class="card-title" id='titolo'></h1>
    <h5 class="card-title" '>${wanted.description}</h5>
    <p class="card-text">${wanted.details}.</p>
    <p class="card-text">${wanted.publication}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getFbiWanted();
