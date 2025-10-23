document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.carousel').forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let index = 0;

    function showImage(idx) {
        const offset = -idx * 100;
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
    });
});
