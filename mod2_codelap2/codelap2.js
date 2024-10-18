document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (name === '' || email === '' || phone === '' || password === '') {
        errorMessage.textContent = "Semua data harus diisi.";
    } else {
        errorMessage.textContent = "";
        alert("Pendaftaran berhasil!");
    }
});
