// Product data
const products = [
    {
        id: 1,
        name: "Classic Wool Sweater",
        price: 149.99,
        oldPrice: 189.99,
        category: "sweaters",
        image: "SP1/variant-image-1.jpeg",
        images: [
            "SP1/variant-image-1.jpeg",
            "SP1/variant-image-2.jpeg",
            "SP1/variant-image-3.jpeg",
            "SP1/variant-image-4.jpeg",
            "SP1/variant-image-5.jpeg"
        ],
        description: "Experience ultimate comfort with our premium wool sweater. Crafted from the finest merino wool, this sweater offers exceptional warmth and softness while maintaining a stylish silhouette.",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Brown", value: "#8B4513", image: "SP1/variant-image-1.jpeg" },
            { name: "Orange", value: "#D2691E", image: "SP1/variant-image-2.jpeg" },
            { name: "Sandy", value: "#F4A460", image: "SP1/variant-image-3.jpeg" },
            { name: "Black", value: "#000000", image: "SP1/variant-image-4.jpeg" },
            { name: "Gray", value: "#808080", image: "SP1/variant-image-5.jpeg" }
        ]
    },
    {
        id: 2,
        name: "Cozy Cable Knit Cardigan",
        price: 179.99,
        oldPrice: 229.99,
        category: "cardigans",
        image: "SP2/variant-image-1.jpeg",
        images: [
            "SP2/variant-image-1.jpeg",
            "SP2/variant-image-2.jpeg",
            "SP2/variant-image-3.jpeg",
            "SP2/variant-image-4.jpeg"
        ],
        description: "A timeless cable knit cardigan that combines traditional craftsmanship with modern comfort. Perfect for layering over any outfit.",
        rating: 4.8,
        reviews: 95,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Cream", value: "#F5DEB3", image: "SP2/variant-image-1.jpeg" },
            { name: "Navy", value: "#000080", image: "SP2/variant-image-2.jpeg" },
            { name: "Burgundy", value: "#800020", image: "SP2/variant-image-3.jpeg" },
            { name: "Forest Green", value: "#228B22", image: "SP2/variant-image-4.jpeg" }
        ]
    },
    {
        id: 3,
        name: "Lightweight Cashmere Blend Pullover",
        price: 249.99,
        oldPrice: 299.99,
        category: "pullover",
        image: "SP3/variant-image-1.jpeg",
        images: [
            "SP3/variant-image-1.jpeg",
            "SP3/variant-image-2.jpeg",
            "SP3/variant-image-3.jpeg",
            "SP3/variant-image-4.jpeg",
            "SP3/variant-image-5.jpeg",
            "SP3/variant-image-6.jpeg"
        ],
        description: "Luxurious cashmere blend pullover that feels incredibly soft against the skin. Lightweight yet warm, perfect for transitional seasons.",
        rating: 4.9,
        reviews: 67,
        inStock: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Pearl", value: "#F8F8FF", image: "SP3/variant-image-1.jpeg" },
            { name: "Rose", value: "#FFB6C1", image: "SP3/variant-image-2.jpeg" },
            { name: "Sage", value: "#9CAF88", image: "SP3/variant-image-3.jpeg" },
            { name: "Charcoal", value: "#36454F", image: "SP3/variant-image-4.jpeg" },
            { name: "Lavender", value: "#E6E6FA", image: "SP3/variant-image-5.jpeg" },
            { name: "Coral", value: "#FF7F50", image: "SP3/variant-image-6.jpeg" }
        ]
    },
    {
        id: 4,
        name: "Nordic Pattern Sweater",
        price: 159.99,
        oldPrice: 199.99,
        category: "sweaters",
        image: "SP4/main-image-1.jpeg",
        images: [
            "SP4/main-image-1.jpeg",
            "SP4/main-image-2.jpeg",
            "SP4/main-image-3.jpeg",
            "SP4/main-image-4.jpeg",
            "SP4/main-image-5.jpeg",
            "SP4/main-image-6.jpeg",
            "SP4/main-image-7.jpeg",
            "SP4/main-image-8.jpeg"
        ],
        description: "Inspired by traditional Nordic patterns, this sweater brings cozy charm to your winter wardrobe. Made from soft, durable wool.",
        rating: 4.7,
        reviews: 112,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Red/Navy", value: "#DC143C", image: "SP4/main-image-1.jpeg" },
            { name: "Green/White", value: "#006400", image: "SP4/main-image-2.jpeg" },
            { name: "Blue/Gray", value: "#4682B4", image: "SP4/main-image-3.jpeg" },
            { name: "Brown/Cream", value: "#8B4513", image: "SP4/main-image-4.jpeg" },
            { name: "Black/White", value: "#000000", image: "SP4/main-image-5.jpeg" },
            { name: "Purple/Gray", value: "#8B008B", image: "SP4/main-image-6.jpeg" },
            { name: "Orange/Brown", value: "#FF8C00", image: "SP4/main-image-7.jpeg" },
            { name: "Pink/Gray", value: "#FFC0CB", image: "SP4/main-image-8.jpeg" }
        ]
    },
    {
        id: 5,
        name: "Merino Wool Turtleneck",
        price: 189.99,
        oldPrice: 239.99,
        category: "sweaters",
        image: "SP1/variant-image-1.jpeg",
        images: [
            "SP1/variant-image-1.jpeg",
            "SP2/variant-image-1.jpeg",
            "SP3/variant-image-1.jpeg",
            "SP4/main-image-1.jpeg"
        ],
        description: "Elegant merino wool turtleneck that offers both style and warmth. A versatile piece that can be dressed up or down.",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Black", value: "#000000", image: "SP1/variant-image-4.jpeg" },
            { name: "Camel", value: "#C19A6B", image: "SP2/variant-image-1.jpeg" },
            { name: "Burgundy", value: "#800020", image: "SP3/variant-image-1.jpeg" },
            { name: "Navy", value: "#000080", image: "SP4/main-image-2.jpeg" }
        ]
    },
    {
        id: 6,
        name: "Boho Chic Fringe Cardigan",
        price: 139.99,
        oldPrice: 179.99,
        category: "cardigans",
        image: "SP6/main-image-1.jpeg",
        images: [
            "SP6/main-image-1.jpeg",
            "SP6/main-image-2.jpeg",
            "SP6/main-image-3.jpeg",
            "SP6/main-image-4.jpeg",
            "SP6/main-image-5.jpeg",
            "SP6/main-image-6.jpeg",
            "SP6/main-image-7.jpeg"
        ],
        description: "Free-spirited bohemian style cardigan with fringe details. Perfect for adding a touch of eclectic charm to any outfit.",
        rating: 4.4,
        reviews: 76,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Taupe", value: "#D2B48C", image: "SP6/main-image-1.jpeg" },
            { name: "Mustard", value: "#FFDB58", image: "SP6/main-image-2.jpeg" },
            { name: "Rust", value: "#B7410E", image: "SP6/main-image-3.jpeg" },
            { name: "Olive", value: "#808000", image: "SP6/main-image-4.jpeg" },
            { name: "Terracotta", value: "#E2725B", image: "SP6/main-image-5.jpeg" },
            { name: "Ivory", value: "#FFFFF0", image: "SP6/main-image-6.jpeg" },
            { name: "Chocolate", value: "#7B3F00", image: "SP6/main-image-7.jpeg" }
        ]
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    loadProducts();
    initializeSearch();
    initializeProductDetail();
    initializeCart();
    initializeContactForm();
    
    // Add page-specific initialization
    if (document.querySelector('.contact-page')) {
        initializeContactForm();
    }
    
    // Initialize size and color selection handlers
    initializeProductOptions();
    
    // Initialize filter handlers
    initializeFilters();
    
    // Initialize accordion for contact page
    initializeAccordions();
    
    // Initialize tabs for product detail page
    initializeTabs();
});

// Load products on home and products pages
function loadProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const productsGrid = document.getElementById('productsGrid');
    
    if (featuredContainer) {
        // Load featured products (first 4)
        const featuredProducts = products.slice(0, 4);
        featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
    
    if (productsGrid) {
        // Load all products
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        document.getElementById('productCount').textContent = products.length;
    }
}

// Create product card HTML
function createProductCard(product) {
    const ratingStars = generateStars(product.rating);
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="rating mb-2">
                        ${ratingStars}
                        <span class="text-muted">(${product.reviews})</span>
                    </div>
                    <div class="mb-3">
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                        <span class="price">$${product.price}</span>
                    </div>
                    <p class="card-text text-muted">${product.description.substring(0, 80)}...</p>
                    <div class="d-flex gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary flex-fill">View Details</a>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Add to cart function
function addToCart(productId, quantity = 1, size = 'M', color = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.size === size && 
        item.color === (color || product.colors[0].name)
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            size: size,
            color: color || product.colors[0].name,
            colorImage: color ? product.colors.find(c => c.name === color)?.image : product.colors[0].image
        });
    }
    
    saveCart();
    updateCartBadge();
    showNotification('Product added to cart!');
    
    // Update cart display if on cart page
    if (window.location.href.includes('cart.html') || document.querySelector('body').id === 'cart-page') {
        displayCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
    notification.style.zIndex = '9999';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(product => `
                    <div class="search-result-item" onclick="goToProduct(${product.id})">
                        <div class="d-flex">
                            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                            <div>
                                <div class="fw-bold">${product.name}</div>
                                <div class="text-muted">$${product.price}</div>
                            </div>
                        </div>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
                searchResults.style.display = 'block';
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

// Go to product detail page
function goToProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Initialize product detail page
function initializeProductDetail() {
    if (!window.location.href.includes('product-detail.html') && !document.querySelector('body').classList.contains('product-detail-page')) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update page title and breadcrumb
    document.title = `${product.name} - Yarn Studio LLC`;
    document.getElementById('productNameBreadcrumb').textContent = product.name;
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productDescription').textContent = product.description;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = product.image;
    }
    
    // Load thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = product.images.map((image, index) => `
            <img src="${image}" alt="Product variant ${index + 1}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="changeMainImage('${image}', this)">
        `).join('');
    }
    
    // Load color options
    const colorOptions = document.getElementById('colorOptions');
    if (colorOptions) {
        colorOptions.innerHTML = product.colors.map(color => `
            <div class="color-option" 
                 style="background-color: ${color.value};" 
                 data-color="${color.name}" 
                 data-image="${color.image}"
                 onclick="selectColor(this, '${color.name}', '${color.image}')"
                 title="${color.name}">
            </div>
        `).join('');
    }
    
    // Load related products
    loadRelatedProducts(productId);
}

// Change main image
function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Select color
function selectColor(element, colorName, colorImage) {
    // Update selected color
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Change main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage && colorImage) {
        mainImage.src = colorImage;
    }
}

// Size selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-option')) {
        document.querySelectorAll('.size-option').forEach(option => {
            option.classList.remove('selected');
        });
        e.target.classList.add('selected');
    }
});

// Quantity controls
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

// Add to cart from product detail
function addToCartFromDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const quantity = parseInt(document.getElementById('quantity')?.value || 1);
    const selectedSize = document.querySelector('.size-option.selected')?.dataset.size || 'M';
    const selectedColor = document.querySelector('.color-option.selected')?.dataset.color;
    
    addToCart(productId, quantity, selectedSize, selectedColor);
}

// Buy now function
function buyNow() {
    addToCartFromDetail();
    window.location.href = 'cart.html';
}

// Initialize cart page
function initializeCart() {
    if (!window.location.href.includes('cart.html') && !document.querySelector('body').id === 'cart-page') return;
    
    displayCart();
}

// Display cart items
function displayCart() {
    const cartContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const recommendedSection = document.getElementById('recommendedSection');
    
    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        if (recommendedSection) recommendedSection.style.display = 'none';
    } else {
        if (cartContainer) cartContainer.style.display = 'block';
        if (emptyCart) emptyCart.style.display = 'none';
        if (recommendedSection) recommendedSection.style.display = 'block';
        
        if (cartContainer) {
            cartContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.colorImage || item.image}" alt="${item.name}" class="cart-item-image">
                    </div>
                    <div class="col-md-4">
                        <h5>${item.name}</h5>
                        <p class="text-muted mb-1">Size: ${item.size}</p>
                        <p class="text-muted mb-0">Color: ${item.color}</p>
                    </div>
                    <div class="col-md-2">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" readonly>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p class="mb-0 fw-bold">$${(item.price * item.quantity).toFixed(2)}</p>
                        <p class="text-muted mb-0">$${item.price} each</p>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-link text-danger remove-btn" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        updateCartSummary();
        loadRecommendedProducts();
        }
    }
}

// Update cart quantity
function updateQuantity(index, change) {
    const item = cart[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity >= 1 && newQuantity <= 10) {
        item.quantity = newQuantity;
        saveCart();
        updateCartBadge();
        displayCart();
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    displayCart();
    showNotification('Item removed from cart');
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 8.95;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Load recommended products
function loadRecommendedProducts() {
    const recommendedContainer = document.getElementById('recommendedProducts');
    if (!recommendedContainer) return;
    
    // Get products not in cart
    const cartProductIds = cart.map(item => item.id);
    const recommendedProducts = products.filter(p => !cartProductIds.includes(p.id)).slice(0, 4);
    
    recommendedContainer.innerHTML = recommendedProducts.map(product => `
        <div class="col-md-3">
            <div class="recommended-product">
                <img src="${product.image}" alt="${product.name}" class="recommended-product-image">
                <h6>${product.name}</h6>
                <p class="mb-2">$${product.price}</p>
                <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Load related products on product detail page
function loadRelatedProducts(currentProductId) {
    const relatedContainer = document.getElementById('relatedProducts');
    if (!relatedContainer) return;
    
    const relatedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);
    
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <div class="col-md-4">
            <div class="card related-product">
                <img src="${product.image}" class="card-img-top related-product-image" alt="${product.name}">
                <div class="card-body">
                    <h6>${product.name}</h6>
                    <p class="price">$${product.price}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Apply promo code
function applyPromoCode() {
    const promoCodeInput = document.getElementById('promoCode');
    const discountRow = document.getElementById('discountRow');
    const discountElement = document.getElementById('discount');
    
    if (!promoCodeInput || !discountRow || !discountElement) return;
    
    const promoCode = promoCodeInput.value.toUpperCase();
    
    if (promoCode === 'SAVE10') {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = subtotal * 0.1;
        
        discountRow.style.display = 'flex';
        discountElement.textContent = `-$${discount.toFixed(2)}`;
        
        // Update total
        const shipping = subtotal > 100 ? 0 : 8.95;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax - discount;
        const totalElement = document.getElementById('total');
        if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
        
        showNotification('Promo code applied successfully!');
    } else if (promoCode === 'FREESHIP') {
        showNotification('Free shipping applied!');
        updateCartSummary();
    } else {
        showNotification('Invalid promo code');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    showNotification('Proceeding to checkout...');
    // In a real implementation, this would redirect to a checkout page
    setTimeout(() => {
        showNotification('Checkout functionality would be implemented here');
    }, 1000);
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };
            
            // In a real implementation, this would send the data to a server
            console.log('Contact form submitted:', formData);
            
            showNotification('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
}

// Product filtering and sorting
function applyFilters() {
    const searchQuery = document.getElementById('filterSearch')?.value.toLowerCase() || '';
    const selectedCategory = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const selectedPrice = document.querySelector('input[name="price"]:checked')?.value || 'all';
    const selectedSizes = Array.from(document.querySelectorAll('.size-checkbox:checked')).map(cb => cb.value);
    
    let filteredProducts = products.filter(product => {
        // Search filter
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery) && 
            !product.description.toLowerCase().includes(searchQuery)) {
            return false;
        }
        
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
            return false;
        }
        
        // Price filter
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            if (max === undefined && product.price < min) return false;
            if (max !== undefined && (product.price < min || product.price > max)) return false;
        }
        
        return true;
    });
    
    // Sort products
    const sortValue = document.getElementById('sortSelect')?.value || 'default';
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    // Update display
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        document.getElementById('productCount').textContent = filteredProducts.length;
    }
}

// Reset filters
function resetFilters() {
    document.getElementById('filterSearch').value = '';
    document.getElementById('catAll').checked = true;
    document.getElementById('priceAll').checked = true;
    document.querySelectorAll('.size-checkbox').forEach(cb => cb.checked = false);
    document.getElementById('sortSelect').value = 'default';
    
    loadProducts();
}

// Initialize product options (size and color selection)
function initializeProductOptions() {
    // Size selection
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('size-option')) {
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
    });
}

// Initialize filters
function initializeFilters() {
    // Category checkbox handlers
    document.addEventListener('change', function(e) {
        if (e.target.id === 'catAll') {
            document.querySelectorAll('.category-checkbox').forEach(cb => {
                if (cb.id !== 'catAll') cb.checked = false;
            });
        } else if (e.target.classList.contains('category-checkbox')) {
            document.getElementById('catAll').checked = false;
        }
    });

    // Price radio handlers
    document.addEventListener('change', function(e) {
        if (e.target.name === 'price') {
            applyFilters();
        }
    });

    // Sort change handler
    document.addEventListener('change', function(e) {
        if (e.target.id === 'sortSelect') {
            applyFilters();
        }
    });
}

// Initialize accordions
function initializeAccordions() {
    // Bootstrap accordions are initialized automatically
    // This function ensures they work properly on Cloudflare Pages
    const accordionButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-bs-target'));
            if (target) {
                target.classList.toggle('show');
                this.classList.toggle('collapsed');
            }
        });
    });
}

// Initialize tabs
function initializeTabs() {
    // Bootstrap tabs are initialized automatically
    // This function ensures they work properly on Cloudflare Pages
    const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and panes
            document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));
            
            // Add active class to clicked tab and corresponding pane
            this.classList.add('active');
            const target = document.querySelector(this.getAttribute('data-bs-target'));
            if (target) {
                target.classList.add('show', 'active');
            }
        });
    });
}

// Global functions for HTML onclick handlers
window.addToCart = addToCart;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.applyPromoCode = applyPromoCode;
window.proceedToCheckout = proceedToCheckout;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.goToProduct = goToProduct;
window.changeMainImage = changeMainImage;
window.selectColor = selectColor;
