// Ganti selector untuk menyesuaikan dengan class galeri
let next = document.querySelector('.gallery-next');
let prev = document.querySelector('.gallery-prev');

// Pastikan elemen ada sebelum menambahkan event listener
if (next && prev) {
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.gallery-item');
        document.querySelector('.gallery-slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.gallery-item');
        document.querySelector('.gallery-slide').prepend(items[items.length - 1]);
    });
} else {
    console.log('Tombol next/prev tidak ditemukan');
}