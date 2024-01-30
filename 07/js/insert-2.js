let button = document.querySelector("button");

button.addEventListener("click", () => {
  let tsNode = document.createElement("p");
  let tsTextNode = document.createTextNode("Typescript");
  tsNode.appendChild(tsTextNode);

  // let basisNode = document.querySelectorAll("p")[2];
  let basisNode = document.querySelector("h1");
  document.body.insertBefore(tsNode, basisNode);
});


