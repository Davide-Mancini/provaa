const getDisneyCharacters = function () {
  fetch("https://api.disneyapi.dev/character")
    .then((response) => {
      //   console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((characters) => {
      const arrayFilm = characters.data;
      console.log(arrayFilm);
      arrayFilm.forEach((film) => {
        row.innerHTML += `<div class="col col-12 col-md-6 col-lg-4 d-flex ">
      <div class="card flex-grow-1" >
  <img src="${film.imageUrl}" class="card-img-top max-h-100" alt="...">
  <div class="card-body">
 <h1 class="card-title" id='titolo'></h1>
    <h5 class="card-title" '>${film.films}</h5>
    <p class="card-text">PROTAGONISTA:${film.name}.</p>
    
    <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
  </div>
</div>
      </div>`;
      });
      console.log(characters);
    })
    .catch((err) => {
      console.log(err);
    });
};
getDisneyCharacters();
