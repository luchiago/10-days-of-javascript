var button = document.getElementById('btn');

button.onclick = () => {
  let number = Number(button.textContent);
  number += 1;
  button.innerHTML = String(number);
}
