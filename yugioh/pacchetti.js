const buttonApriPacchetto = document.getElementById("apripacchetto");
buttonApriPacchetto.addEventListener("click", () => {
  const random10 = getRandomCards(allCards, 10);
});
let allCards = [];
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
