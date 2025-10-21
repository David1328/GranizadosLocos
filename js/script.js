let index = 0;
    const slides = document.getElementById('slides');
    setInterval(() => {
      index = (index + 1) % 3;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000)