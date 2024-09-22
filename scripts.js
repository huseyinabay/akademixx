// Menü toggle işlevi
document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Sayfa yukarı kaymasını engeller
    event.stopPropagation(); // Olayı diğer olay dinleyicilerine yayılmasını engeller
    document.getElementById('sidebar').classList.toggle('open');
});

// Ekranın herhangi bir yerine tıklandığında sidebar'ı kapatma
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var menuToggle = document.getElementById('menu-toggle');

    // Eğer tıklanan element sidebar veya menu-toggle değilse, sidebar'ı kapat
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Sekme Geçişi İçin Basit JavaScript
document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('signup-tab').classList.add('active');
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('login-tab').classList.add('active');
});

document.getElementById('login-tab').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
});

document.getElementById('signup-tab').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
});
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Form ve Tab Geçiş Fonksiyonları
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        switchToSignup();
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        switchToLogin();
    });

    loginTab.addEventListener('click', () => {
        switchToLogin();
    });

    signupTab.addEventListener('click', () => {
        switchToSignup();
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    function switchToSignup() {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
    }

    function switchToLogin() {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        signupTab.classList.remove('active');
        loginTab.classList.add('active');
    }

    // Giriş Formu Gönderimi
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Basit Doğrulama
        if (validateEmail(email) && password.length >= 6) {
            // Gerçek uygulamada burada sunucuya istek gönderilir
            // Örneğin:
            // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
            //     .then(response => response.json())
            //     .then(data => { /* Doğrulama ve yönlendirme */ });

            // Demo için başarılı kabul edip yönlendiriyoruz
            alert('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.');
            window.location.href = 'index.html'; // Yönlendirmek istediğiniz sayfanın URL'sini buraya ekleyin
        } else {
            alert('Lütfen geçerli bir e-posta ve en az 6 karakterli bir şifre girin.');
        }
    });

    // Kaydol Formu Gönderimi
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signup-username').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

        // Basit Doğrulama
        if (username && validateEmail(email) && password.length >= 6 && password === confirmPassword) {
            // Gerçek uygulamada burada sunucuya istek gönderilir
            // Örneğin:
            // fetch('/api/signup', { method: 'POST', body: JSON.stringify({ username, email, password }) })
            //     .then(response => response.json())
            //     .then(data => { /* Kayıt ve yönlendirme */ });

            // Demo için başarılı kabul edip yönlendiriyoruz
            alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
            switchToLogin();
        } else {
            alert('Lütfen tüm alanları doğru şekilde doldurun. Şifreler eşleşmeli ve en az 6 karakter olmalıdır.');
        }
    });

    // E-posta Doğrulama Fonksiyonu
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


function sortDershaneler(criteria) {
    const dershaneList = document.querySelector('.dershane-list');
    const dershaneCards = Array.from(dershaneList.getElementsByClassName('dershane-card'));

    let sortedCards;

    if (criteria === 'lowest-price') {
        sortedCards = dershaneCards.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (criteria === 'highest-price') {
        sortedCards = dershaneCards.sort((a, b) => b.dataset.price - a.dataset.price);
    } else if (criteria === 'recommended') {
        // Add recommended sorting logic here
    } else if (criteria === 'best-seller') {
        // Add best-seller sorting logic here
    } else if (criteria === 'favorites') {
        // Add favorites sorting logic here
    } else if (criteria === 'new') {
        // Add new sorting logic here
    } else if (criteria === 'most-reviewed') {
        // Add most-reviewed sorting logic here
    }

    dershaneList.innerHTML = '';
    sortedCards.forEach(card => dershaneList.appendChild(card));
}