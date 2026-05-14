document.addEventListener('DOMContentLoaded', () => {
    console.log("Hafta 7 Scripti Yüklendi."); // Kontrol için

    const form = document.getElementById('etkinlikFormu');
    const sonucAlani = document.getElementById('sonucAlani');
    const themeToggle = document.getElementById('themeToggle');

    // Tema Değiştirme Butonu Kontrolü
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-bs-theme', newTheme);
            console.log("Tema değişti: " + newTheme);
        });
    }

    // Form Gönderimi Kontrolü [cite: 54, 68, 89]
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const ad = document.getElementById('adSoyad').value.trim();
            const eposta = document.getElementById('eposta').value.trim();
            const bolum = document.getElementById('bolum').value.trim();
            const sinif = document.getElementById('sinif').value;

            // Özet Kartı Üretme [cite: 70, 78, 91]
            sonucAlani.innerHTML = `
                <div class="col-lg-8">
                    <div class="alert alert-info shadow-sm">
                        <h5>Başvuru Başarılı!</h5>
                        <p><strong>İsim:</strong> ${ad} | <strong>Bölüm:</strong> ${bolum} (${sinif}. Sınıf)</p>
                        <p class="mb-0"><strong>E-posta:</strong> ${eposta}</p>
                    </div>
                </div>
            `;
            console.log("Özet oluşturuldu.");
        });
    }
});
