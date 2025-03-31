const gallery = document.getElementById("gallery");
const themeToggle = document.getElementById("theme-toggle");
const filterFavorites = document.getElementById("filter-favorites");

const images = [
    { url: "image1.jpg", caption: "Sunset View", favorite: true },
    { url: "image2.jpg", caption: "Mountain Peaks", favorite: false },
    { url: "image3.jpg", caption: "Ocean Breeze", favorite: true },
    { url: "image4.jpg", caption: "Forest Path", favorite: false },
    { url: "image5.jpg", caption: "City Lights", favorite: true }
];

// Function to display images
function renderGallery(filter = false) {
    gallery.innerHTML = ""; // Clear previous content
    images
        .filter(img => !filter || img.favorite) // Filter if needed
        .forEach(img => {
            const item = document.createElement("div");
            item.classList.add("gallery-item");
            item.innerHTML = `
                <img src="${img.url}" alt="${img.caption}">
                <div class="caption">${img.caption}</div>
            `;
            gallery.appendChild(item);
        });
}

// Toggle dark mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Filter favorites
filterFavorites.addEventListener("click", () => {
    const isFiltering = filterFavorites.classList.toggle("active");
    renderGallery(isFiltering);
});

// Initial render
renderGallery();
