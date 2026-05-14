document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('etkinlikFormu');
    const sonucAlani = document.getElementById('sonucAlani');
    const themeToggle = document.getElementById('themeToggle');

    // 1. Tema Değiştirme Etkileşimi 
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
    });

    // 2. Form Gönderimi ve Özet Üretme [cite: 68-70]
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Sayfa yenilenmesini engelle 

        // Değerleri al [cite: 25]
        const ad = document.getElementById('adSoyad').value.trim();
        const eposta = document.getElementById('eposta').value.trim();
        const bolum = document.getElementById('bolum').value.trim();
        const sinif = document.getElementById('sinif').value;

        // Eksik alan kontrolü [cite: 55]
        if (!ad || !eposta || !bolum || !sinif) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        // Başarılı durumda özet kartı oluştur [cite: 56, 78]
        sonucAlani.innerHTML = `
            <div class="col-lg-8">
                <div class="alert alert-success border-0 shadow-sm rounded-4">
                    <h4 class="alert-heading">Başvuru Özeti</h4>
                    <hr>
                    <p class="mb-1"><strong>Ad Soyad:</strong> ${ad}</p>
                    <p class="mb-1"><strong>E-posta:</strong> ${eposta}</p>
                    <p class="mb-1"><strong>Bölüm:</strong> ${bolum}</p>
                    <p class="mb-0"><strong>Sınıf:</strong> ${sinif}. Sınıf</p>
                </div>
            </div>
        `;
        
    });
});
