document.addEventListener('DOMContentLoaded', () => {
    const updatesList = document.getElementById('updates-list');
    const updateForm = document.getElementById('update-form');
    const updateInput = document.getElementById('update-input');
    
    const imageContainer = document.getElementById('image-container');
    const imageForm = document.getElementById('image-form');
    const imageUrlInput = document.getElementById('image-url');

    const adminPanel = document.getElementById('admin-panel');
    const adminLogin = document.getElementById('admin-login');
    const loginForm = document.getElementById('login-form');
    const adminPassword = document.getElementById('admin-password');

    const ADMIN_PASSWORD = "minecraft123"; // Change this to your secure password

    // Display updates and images (initial content for demonstration)
    const updates = ["Server is now running version 1.20!", "New Nether update released!"];
    const images = [
        "https://example.com/minecraft1.jpg",
        "https://example.com/minecraft2.jpg"
    ];

    // Load initial updates
    updates.forEach(update => {
        const li = document.createElement('li');
        li.textContent = update;
        updatesList.appendChild(li);
    });

    // Load initial images
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Minecraft Image";
        imageContainer.appendChild(img);
    });

    // Handle admin login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (adminPassword.value === ADMIN_PASSWORD) {
            adminPanel.classList.remove('hidden');
            adminLogin.classList.add('hidden');
        } else {
            alert("Incorrect password!");
        }
    });

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
