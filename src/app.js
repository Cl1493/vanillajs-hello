/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = GeneraExcusas(who, action, what, when);
};

let who = ["El perro", "Mi abuela", "La tortuga", "El pájaro", "Mi hijo"];
let action = ["se comió", "se hizo pipi", "rompió", "ahogó", "tiró"];
let what = ["mis deberes", "las llaves", "el coche", "la casa", "el trabajo"];
let when = [
  "antes de clase",
  "justo ahora",
  "cuando terminé",
  "durante la comida",
  "mientras estaba rezando"
];

function GeneraExcusas(who, action, what, when) {
  let RandomWho = Math.floor(Math.random() * who.length);
  let RandomAction = Math.floor(Math.random() * action.length);
  let RandomWhat = Math.floor(Math.random() * what.length);
  let RandomWhen = Math.floor(Math.random() * when.length);

  return (
    who[RandomWho] +
    " " +
    action[RandomWho] +
    " " +
    what[RandomWhat] +
    " " +
    when[RandomWhen]
  );
}
git;
