var main_btn = document.getElementById('btn5');

const preenche = () => {
  let btn_arrs = [];
  let btn_values = [];
  for (let i = 1; i <= 9; i++) {
    if (i != 5) {
      btn_arrs.push(document.getElementById('btn' + i));
      btn_values.push(document.getElementById('btn' + i).textContent);
    }
  }
  return [btn_arrs, btn_values];
}

main_btn.onclick = () => {
  let btn_arrs;
  let btn_values;
  let arrs = preenche();
  btn_arrs = arrs[0];
  btn_values = arrs[1];
  btn_arrs[0].innerHTML = btn_values[3];
  btn_arrs[1].innerHTML = btn_values[0];
  btn_arrs[2].innerHTML = btn_values[1];
  btn_arrs[3].innerHTML = btn_values[5];
  btn_arrs[4].innerHTML = btn_values[2];
  btn_arrs[5].innerHTML = btn_values[6];
  btn_arrs[6].innerHTML = btn_values[7];
  btn_arrs[7].innerHTML = btn_values[4];
}
