const form = document.querySelector("#form");
const input = document.getElementById("input");
const button = document.getElementById("btn");
const piyoda = document.getElementById("piyoda");
const velosiped = document.getElementById("velosiped");
const mashina = document.getElementById("mashina");
const samolyot = document.getElementById("samolyot");
const error = document.getElementById("error");
const piyodaTezligi = 3.6;
const velosipedTezligi = 20.1;
const mashinaTezligi = 70;
const samolyotTezligi = 800;

function vaqt(masofa, tezlik) {
  const soat = Math.floor(masofa / tezlik);
  const minut = Math.floor((masofa / tezlik - soat) * 60);
  const sekund = Math.floor(((masofa / tezlik - soat) * 60 - minut) * 60);
  return soat + " soat " + minut + " minut " + sekund + " sekund ";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = Number(input.value.trim());

  if (inputValue <= 0 || isNaN(inputValue)) {
    error.textContent =
      "Noto'g'ri qiymat kiritdingiz! Iltimos Tekshirib qaytadan kiriting!";
  } else {
    piyoda.textContent = vaqt(inputValue, piyodaTezligi);
    velosiped.textContent = vaqt(inputValue, velosipedTezligi);
    mashina.textContent = vaqt(inputValue, mashinaTezligi);
    samolyot.textContent = vaqt(inputValue, samolyotTezligi);
  }

  input.value = null;
});
