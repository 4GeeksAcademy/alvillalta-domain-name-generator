import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { EvaluatedModules } from "vite/module-runner";


window.onload = function () {

  let pronombre = ["mis", "las",];
  let adjetivo = ["mejores", "peores"];
  let sustantivo = ["vacaciones", "sorpresas"];
  let extension = [".com", ".es"]

  let domainSum = "";
  pronombre.map((elementoPronombre) => {
    adjetivo.map((elementoAdjetivo) => {
      sustantivo.map((elementoSustantivo) => {
        extension.map((elementoExtension) => {
          domainSum += `<li>${elementoPronombre}${elementoAdjetivo}${elementoSustantivo}${elementoExtension}</li>`;
        })
      })
    })
  })

  const domainGenerator = document.querySelector("#domainName");
  domainGenerator.innerHTML = domainSum;
  console.log(domainSum);
}