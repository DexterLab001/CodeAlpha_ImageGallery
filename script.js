// Image data
const images = [
    // Nature Landscapes (8 images)
    {
        id: 0,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Mountain lake at sunrise",
        title: "Mountain Lake Sunrise",
        category: "nature",
        categoryDisplay: "Nature • Landscape"
    },
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Forest canopy from above",
        title: "Forest Canopy",
        category: "nature",
        categoryDisplay: "Nature • Aerial"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Ocean waves against cliffs",
        title: "Coastal Cliffs",
        category: "nature",
        categoryDisplay: "Nature • Ocean"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Rolling hills with wildflowers",
        title: "Wildflower Hills",
        category: "nature",
        categoryDisplay: "Nature • Fields"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Snow-capped mountain peaks",
        title: "Alpine Peaks",
        category: "nature",
        categoryDisplay: "Nature • Mountains"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Desert dunes under starry sky",
        title: "Desert Night",
        category: "nature",
        categoryDisplay: "Nature • Desert"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Autumn forest with fall colors",
        title: "Autumn Forest",
        category: "nature",
        categoryDisplay: "Nature • Fall"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Waterfall through lush forest",
        title: "Hidden Waterfall",
        category: "nature",
        categoryDisplay: "Nature • Waterfall"
    },
    // City Architecture (6 images)
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Modern glass skyscraper",
        title: "Glass Tower",
        category: "architecture",
        categoryDisplay: "Architecture • Modern"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1520637836862-4d197d17c92a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Gothic cathedral architecture",
        title: "Gothic Cathedral",
        category: "architecture",
        categoryDisplay: "Architecture • Historic"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Contemporary bridge design",
        title: "Modern Bridge",
        category: "architecture",
        categoryDisplay: "Architecture • Bridge"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Art Deco building facade",
        title: "Art Deco Facade",
        category: "architecture",
        categoryDisplay: "Architecture • Vintage"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Minimalist concrete architecture",
        title: "Concrete Minimalism",
        category: "architecture",
        categoryDisplay: "Architecture • Minimal"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Urban skyline architecture",
        title: "City Skyline",
        category: "architecture",
        categoryDisplay: "Architecture • Urban"
    },
    // Abstract Art (4 images)
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Swirling abstract colors",
        title: "Color Flow",
        category: "abstract",
        categoryDisplay: "Abstract • Fluid"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Geometric abstract shapes",
        title: "Geometric Forms",
        category: "abstract",
        categoryDisplay: "Abstract • Geometric"
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Textured paint strokes",
        title: "Paint Texture",
        category: "abstract",
        categoryDisplay: "Abstract • Texture"
    },
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Monochromatic abstract gradients",
        title: "Gradient Forms",
        category: "abstract",
        categoryDisplay: "Abstract • Gradient"
    },
    // Travel Destinations (6 images)
    {
        id: 18,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Ancient temple in jungle",
        title: "Ancient Temple",
        category: "travel",
        categoryDisplay: "Travel • Historic"
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Tropical beach with turquoise water",
        title: "Paradise Beach",
        category: "travel",
        categoryDisplay: "Travel • Beach"
    },
    {
        id: 20,
        src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "European cobblestone street",
        title: "Old Town Street",
        category: "travel",
        categoryDisplay: "Travel • Europe"
    },
    {
        id: 21,
        src: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Mountain village in alpine valley",
        title: "Alpine Village",
        category: "travel",
        categoryDisplay: "Travel • Mountains"
    },
    {
        id: 22,
        src: "https://images.unsplash.com/photo-1555400292-8015b768b41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Night market with colorful lanterns",
        title: "Night Market",
        category: "travel",
        categoryDisplay: "Travel • Culture"
    },
    {
        id: 23,
        src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Desert oasis with palm trees",
        title: "Desert Oasis",
        category: "travel",
        categoryDisplay: "Travel • Oasis"
    }
];

// Global variables
let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredImages = images;
let loadedImages = new Set();

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const imageCountEl = document.querySelector('.image-count');

function init() {
    renderGallery();
    setupEventListeners();
    updateImageCount();
}

function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    requestAnimationFrame(() => {
        const items = galleryGrid.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.animationDelay = `${index * 50}ms`;
            }, 10);
        });
    });
}

function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 100}ms`;
    
    item.innerHTML = `
        <img class="gallery-image loading" 
             src="${image.src}" 
             alt="${image.alt}"
             data-index="${index}">
        <div class="gallery-info">
            <h3 class="gallery-item-title">${image.title}</h3>
            <p class="gallery-item-category">${image.categoryDisplay}</p>
        </div>
    `;
    
    const img = item.querySelector('.gallery-image');
    
    // Handle image loading
    img.addEventListener('load', () => {
        img.classList.remove('loading');
        loadedImages.add(image.id);
    });
    
    // Handle image click
    item.addEventListener('click', () => {
        openLightbox(index);
    });
    
    // Add hover effect
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
    
    return item;
}

// Filter images
function filterImages(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => image.category === category);
    }
    
    updateActiveFilter();
    updateImageCount();
    renderGallery();
}

function updateActiveFilter() {
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        }
    });
}

function updateImageCount() {
    const count = filteredImages.length;
    imageCountEl.textContent = `${count} image${count !== 1 ? 's' : ''}`;
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const image = filteredImages[index];
    
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = image.categoryDisplay;
    updateLightboxCounter();
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    lightboxImage.classList.remove('loaded');
    lightboxImage.addEventListener('load', function onLoad() {
        lightboxImage.classList.add('loaded');
        lightboxImage.removeEventListener('load', onLoad);
    });
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
    openLightbox(currentLightboxIndex);
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    openLightbox(currentLightboxIndex);
}

function updateLightboxCounter() {
    lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${filteredImages.length}`;
}

function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterImages(btn.dataset.filter);
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
            }
        }
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage(); // Swipe left - next image
            } else {
                prevImage(); // Swipe right - prev image
            }
        }
    }
    
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', () => {
        alert('Load more functionality would fetch additional images from a server!');
    });
}

document.addEventListener('DOMContentLoaded', init);