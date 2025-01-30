const jenisKelamin = document.getElementById('jenis-kelamin');
const beratBadan = document.getElementById('berat-badan');
const tinggiBadan = document.getElementById('tinggi-badan');
const hitung = document.getElementById('hitung');
const hasil = document.getElementById('hasil');

hitung.addEventListener('click', () => {
  const bb = parseFloat(beratBadan.value);
  const tb = parseFloat(tinggiBadan.value) / 100;
  const bmi = bb / (tb * tb);

  let kategori;
  if (bmi < 18.5) {
    kategori = 'Underweight';
  } else if (bmi < 25) {
    kategori = 'Normal';
  } else if (bmi < 30) {
    kategori = 'Overweight';
  } else {
    kategori = 'Obese';
  }

  hasil.textContent = `BMI: ${bmi.toFixed(2)} (${kategori})`;
});