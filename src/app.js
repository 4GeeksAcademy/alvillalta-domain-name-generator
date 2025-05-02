import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { EvaluatedModules } from "vite/module-runner";


window.onload = function () {

  // Declaración variables
  let pronoun = ["mis", "las",];
  let adj = ["mejores", "peores"];
  let noun = ["vacaciones", "sorpresas"];
  let extension = [".com", ".es"]

  // Iteración + Concatenación
  let domainSum = "";
  pronoun.map((element) => {
    adj.map((iterator) => {
      noun.map((item) => {
        extension.map((extension) => {
          domainSum += `<li>${element}${iterator}${item}${extension}</li>`;
        })
      })
    })
  })

  // Captura elemento HTML
  const domainGenerator = document.querySelector("#domainName");
  domainGenerator.innerHTML = domainSum;
  console.log(domainSum);

}