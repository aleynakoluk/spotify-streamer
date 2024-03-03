document.addEventListener("DOMContentLoaded", function () {
    var aboutUsSection = document.getElementById("about-us");

    // "about-us" bölümünün görünürlüğünü değiştir
    if (aboutUsSection) {
        aboutUsSection.style.display = "block";
    }

    // Butona tıklandığında login fonksiyonunu çağıran event dinleyici
    var loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", login);
    }

    // Bu fonksiyon, kullanıcının giriş yapmasını kontrol eder
    function login() {
        var username = document.getElementById('username').value;

        if (/^[a-zA-Z]+$/.test(username)) {
            // Başarılı giriş durumunda kullanıcı adını localStorage'a yaz
            localStorage.setItem('username', username);
            // Ardından albums.html sayfasını aç
            window.location.href = 'albums.html';
        } else {
            alert('Invalid username. Please use letters only and try again.');
        }
    }

    // Kullanıcı adını localStorage'dan al
    var username = localStorage.getItem('username');

    // Eğer kullanıcı adı varsa
if (username) {
    // Welcome mesajını göster
    var welcomeMessage = document.getElementById('user-info');
    if (welcomeMessage) {
        // Kullanıcı adını büyük harflerle yazdır
        var capitalizedUsername = username.toUpperCase();
        welcomeMessage.innerHTML = 'Welcome, ' + capitalizedUsername + '!';
    }
}

});
