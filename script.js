document.addEventListener('DOMContentLoaded', () => {
    const updatesList = document.getElementById('updates-list');
    const updateForm = document.getElementById('update-form');
    const updateInput = document.getElementById('update-input');
    
    const imageContainer = document.getElementById('image-container');
    const imageForm = document.getElementById('image-form');
    const imageUrlInput = document.getElementById('image-url');

    // Handle new server updates
    updateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUpdate = document.createElement('li');
        newUpdate.textContent = updateInput.value;
        updatesList.appendChild(newUpdate);
        updateInput.value = '';
    });

    // Handle adding new images
    imageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newImage = document.createElement('img');
        newImage.src = imageUrlInput.value;
        newImage.alt = "Minecraft Image";
        imageContainer.appendChild(newImage);
        imageUrlInput.value = '';
    });
});
