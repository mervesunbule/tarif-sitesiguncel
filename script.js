document.addEventListener('DOMContentLoaded', function() {
    const tarifEkleLink = document.getElementById('tarif-ekle-link');
    const girisYapSayfasi = 'login.html'; // Giriş yap sayfanızın adresi

    if (tarifEkleLink) {
        tarifEkleLink.addEventListener('click', function(event) {
            event.preventDefault(); // Bağlantının varsayılan davranışını engelle (sayfayı # işaretine götürmesini)

            // Burada giriş yapılıp yapılmadığını kontrol edebilirsiniz.
            // Bu örnekte basitçe giriş yap sayfasına yönlendiriyoruz.
            // Gerçek bir uygulamada localStorage, sessionStorage veya bir çerez kontrolü yapabilirsiniz.
            if (!localStorage.getItem('kullaniciGirisYapti')) {
                window.location.href = girisYapSayfasi;
            } else {
                // Kullanıcı giriş yapmışsa, tarif ekleme sayfasına yönlendirin (eğer varsa)
                window.location.href = 'add-recipe.html';
            }
        });
    }

    // Mobil menü toggle (eğer navbar kullanıyorsanız)
    const menuToggle = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    if (menuToggle && navbarLinks) {
        menuToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }
});