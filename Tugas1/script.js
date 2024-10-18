function tambahKarakter(karakter) {
  let layar = document.getElementById('hasil');
  layar.value += karakter;
}

function hitung() {
  let layar = document.getElementById('hasil');
  try {
    layar.value = eval(layar.value);
  } catch (e) {
    layar.value = "Error";
  }
}

function bersihkanLayar() {
  let layar = document.getElementById('hasil');
  layar.value = "";
}
