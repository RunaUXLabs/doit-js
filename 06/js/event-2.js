const button = document.querySelector("button");

// button.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

button.addEventListener('mouseover', () => {
  document.body.classList.add('green');
});
button.addEventListener('mouseout', () => {
  document.body.classList.remove('green');
});