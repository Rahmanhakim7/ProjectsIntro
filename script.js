const tombolPesan  = document.getElementById('salamBtn');
const pesanSalam = document.getElementById('pesanSalam');

tombolPesan.addEventListener('click', () => {
    pesanSalam.textContent = 'Halo! Perkenalkan, namaku Rahman Hakim. Aku berasal dari Kota Tangerang Selatan. Hobiku adalah berolahraga, terutama bermain sepak bola. Selain itu, aku juga sangat suka belajar coding karena aku ingin menjadi seorang programmer yang hebat di masa depan.';
});