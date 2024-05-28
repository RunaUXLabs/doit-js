const button = document.querySelector("button");

// button.onclick = function () {
//   // document.body.style.backgroundColor = "green";
//   document.body.classList.toggle('green');
// };

button.addEventListener('mouseover', () => {
  document.body.classList.add('green');
});
button.addEventListener('mouseout', () => {
  document.body.classList.remove('green');
});