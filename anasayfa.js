// Global Fonksiyonlar (HTML içindeki 'onclick' olayları için gereklidir)

/**
 * Sürpriz kutulara tıklandığında özel modal kutusunu açar.
 * @param {string} message - Modal içinde gösterilecek mesaj.
 */
function showModal(message) {
  document.getElementById('modalMessage').textContent = message;
  document.getElementById('customModal').style.display = 'flex';
}

/**
 * Özel modal kutusunu kapatır.
 */
function closeModal() {
  document.getElementById('customModal').style.display = 'none';
}


// Sayfa Tamamen Yüklendikten Sonra Çalışacak İşlevler

window.onload = function() {
    // 1. Kalp Yağmuru Efekti
    const heartContainer = document.getElementById("heart-container");
    
    // 50 adet kalp oluştur ve rastgele konum, boyut ve hız ver
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        // Rastgele yatay konum (0% ile 100% viewport genişliği arasında)
        heart.style.left = Math.random() * 100 + "vw";
        // Rastgele boyut (10px ile 30px arasında)
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        // Rastgele düşme süresi (2s ile 5s arasında)
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        heartContainer.appendChild(heart);
    }

    // 2. Açılış Pop-up Mesajı Kontrolü
    const initialPopup = document.querySelector('.popup');
    
    // Pop-up'ı sayfaya yüklenirken göster
    // Not: CSS'teki 'fadeIn' animasyonu yerine, JS ile kontrol ederek 
    // otomatik kapanma işlevini daha rahat yönetiyoruz.
    initialPopup.style.opacity = '1';
    initialPopup.style.visibility = 'visible';

    // 4 saniye sonra pop-up'ı gizle
    setTimeout(() => {
        initialPopup.style.opacity = '0';
        initialPopup.style.visibility = 'hidden';
        // Yumuşak geçiş efekti için geçiş stilini ekle
        initialPopup.style.transition = 'opacity 1s, visibility 1s'; 
    }, 4000); // 4000 milisaniye = 4 saniye
};