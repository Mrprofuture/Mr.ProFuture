document.addEventListener("DOMContentLoaded", () => {
    // Load updates from updates.txt
    fetch('updates.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('updates-content').textContent = data;
        })
        .catch(error => {
            document.getElementById('updates-content').textContent = 'Error loading updates.';
            console.error('Error fetching updates:', error);
        });

    // Manually specify images if directory listing is not working
    const imageGallery = document.getElementById('image-gallery');
    const imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];  // Add your image filenames here

    imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = `images/${file}`;
        img.alt = 'Server Image';
        imageGallery.appendChild(img);
    });

    // Load download link from link.txt
    const downloadButton = document.getElementById('download-button');
    fetch('link.txt')
        .then(response => response.text())
        .then(link => {
            downloadButton.textContent = 'Download Minecraft';
            downloadButton.disabled = false;
            downloadButton.onclick = () => {
                window.open(link.trim(), '_blank');
            };
        })
        .catch(error => {
            downloadButton.textContent = 'Error loading link';
            console.error('Error fetching download link:', error);
        });
});
