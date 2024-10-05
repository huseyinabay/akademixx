// script.js

const dershaneList = document.getElementById('dershaneleryks');
const filterBtn = document.getElementById('filterBtn');

function displayDershaneler(filteredDershaneler) {
    dershaneList.innerHTML = '';

    if (filteredDershaneler.length === 0) {
        dershaneList.innerHTML = '<div class="col"><p class="text-center">Hiç dershane bulunamadı.</p></div>';
        return;
    }

    filteredDershaneler.forEach(dershane => {
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML = `
            <div class="card h-100 dershane-card">
                <img src="${dershane.logo}" class="card-img-top" alt="${dershane.isim}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${dershane.isim}</h5>
                    <p class="card-text">${dershane.slogan}</p>
                    <a href="${dershane.detaySayfa}" class="btn btn-primary mt-auto">İncele</a>
                </div>
            </div>
        `;

        dershaneList.appendChild(card);
    });
}

// İlk olarak tüm dershaneleri göster
displayDershaneler(dershaneleryks);

// Filtreleme Fonksiyonu
filterBtn.addEventListener('click', () => {
    const selectedLocation = document.getElementById('location').value;
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    

    const filtered = dershaneleryks.filter(dershane => {
        // Konum filtresi
        const konumMatch = selectedLocation === 'all' || dershane.konum.includes(selectedLocation);

        // Fiyat filtresi (8. sınıf ücreti üzerinden)
        const fiyat = dershane.ucret8 || 0;
        const fiyatMatch = fiyat >= minPrice && fiyat <= maxPrice;

        return konumMatch && fiyatMatch;
    });

    displayDershaneler(filtered);
});
