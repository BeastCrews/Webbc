var loginButtonsVisible = false; // Menyimpan status tombol login

// Fungsi JavaScript untuk menampilkan atau menghapus tombol login
function toggleLoginButtons() {
    var loginButtonContainer = document.getElementById("loginButtonContainer");

    if (loginButtonsVisible) {
        loginButtonContainer.innerHTML = '';
        loginButtonsVisible = false;
        document.getElementById("toggleLoginButtons").innerHTML = "Tampilkan Tombol Login";
    } else {
        // Loop untuk membuat dan menambahkan 13 tombol login
        for (var i = 1; i <= 13; i++) {
            var loginButton = document.createElement("a");
            loginButton.href = "login" + i + ".php"; // Mengarahkan ke login1.php, login2.php, dll.
            loginButton.innerHTML = "Tombol " + i;
            loginButton.className = "login-button";
            loginButton.addEventListener("click", function() {
                // Ketika tombol login diklik, tampilkan pop-up login
                var loginPopup = document.getElementById("loginPopup");
                var overlay = document.getElementById("overlay");
                loginPopup.style.display = "block";
                overlay.style.display = "block";
            });
            loginButtonContainer.appendChild(loginButton);
        }
        loginButtonsVisible = true;
        document.getElementById("toggleLoginButtons").innerHTML = "Sembunyikan Tombol Login";
    }
}

// Mendengarkan klik pada tombol "Tampilkan dan Hapus Tombol Login"
document.getElementById("toggleLoginButtons").addEventListener("click", function() {
    toggleLoginButtons();
});
