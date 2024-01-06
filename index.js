document.addEventListener("DOMContentLoaded", function () {
    const index = document.getElementById("image-index");
    const images = Array.from(index.getElementsByTagName("img"));
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Auto-scroll to the next image every 5 seconds
    setInterval(nextImage, 2000);
});


