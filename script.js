// Product data
const products = [
    {
        id: 7,
        name: "Plain Silk Saree - Customizable",
        description: "Premium quality plain silk saree with customizable design options",
        price: 1999,
        originalPrice: 3999,
        image: "freepik__the-style-is-candid-image-photography-with-natural__44449.png",
        category: "Sarees",
        rating: 4.7,
        stock: 15,
        colors: ["White", "Ivory", "Beige", "Light Pink", "Light Blue"],
        sizes: ["Free Size"],
        sizeChartImage: "size chart.jpg",
        isCustomizable: true,
        designs: [
            {
                id: "d1",
                name: "Floral Border",
                image: "https://t4.ftcdn.net/jpg/00/40/98/47/360_F_40984798_DXM81PAeJJlhywRo4qCpqe1yMJRXxlD1.jpg",
                price: 500
            },
            {
                id: "d2",
                name: "Traditional Motif",
                image: "https://static.vecteezy.com/system/resources/previews/022/172/769/original/ethnic-floral-seamless-pattern-colorful-background-abstract-traditional-folk-antique-tribal-graphic-line-texture-textile-fabric-indian-patterns-ornate-elegant-luxury-vintage-retro-style-vector.jpg",
                price: 800
            },
            {
                id: "d3",
                name: "Modern Pattern",
                image: "https://static.vecteezy.com/system/resources/previews/002/001/796/non_2x/henna-banner-colorful-border-free-vector.jpg",
                price: 600
            }
        ],
        reviews: [
            { user: "Priya", rating: 5, comment: "Beautiful saree with great customization options!" },
            { user: "Rahul", rating: 4, comment: "Good quality, design preview is helpful" }
        ]
    },
    {
        id: 8,
        name: "Plain Cotton Saree - Customizable",
        description: "Comfortable cotton saree with design customization",
        price: 1499,
        originalPrice: 2999,
        image: "https://azlqkobuum.cloudimg.io/v7/https://seerat.shop/wp-content/uploads/2021/12/Whitagram-Image-35-min.jpg",
        category: "Sarees",
        rating: 4.5,
        stock: 20,
        colors: ["White", "Off White", "Light Yellow", "Light Green"],
        sizes: ["Free Size"],
        sizeChartImage: "size chart.jpg",
        isCustomizable: true,
        designs: [
            {
                id: "d4",
                name: "Floral Border",
                image: "https://t4.ftcdn.net/jpg/00/40/98/47/360_F_40984798_DXM81PAeJJlhywRo4qCpqe1yMJRXxlD1.jpg",
                price: 500
            },
            {
                id: "d5",
                name: "Traditional Motif",
                image: "https://static.vecteezy.com/system/resources/previews/022/172/769/original/ethnic-floral-seamless-pattern-colorful-background-abstract-traditional-folk-antique-tribal-graphic-line-texture-textile-fabric-indian-patterns-ornate-elegant-luxury-vintage-retro-style-vector.jpg",
                price: 800
            },
            {
                id: "d6",
                name: "Modern Pattern",
                image: "https://static.vecteezy.com/system/resources/previews/002/001/796/non_2x/henna-banner-colorful-border-free-vector.jpg",
                price: 600
            }
        ],
        reviews: [
            { user: "Anjali", rating: 4, comment: "Perfect for daily wear with nice design options" },
            { user: "Meera", rating: 5, comment: "Great quality cotton, designs are elegant" }
        ]
    },
    {
        id: 9,
        name: "Plain Cotton Saree - White",
        description: "Comfortable cotton saree with design customization",
        price: 1499,
        originalPrice: 2999,
        image: "WhatsApp Image 2025-04-02 at 18.14.45_2e81f89a.jpg",
        category: "Sarees",
        rating: 4.5,
        stock: 20,
        colors: ["White", "Off White", "Light Yellow", "Light Green"],
        sizes: ["Free Size"],
        sizeChartImage: "size chart.jpg",
        isCustomizable: true,
        designs: [
            {
                id: "d4",
                name: "Floral Border",
                image: "https://t4.ftcdn.net/jpg/00/40/98/47/360_F_40984798_DXM81PAeJJlhywRo4qCpqe1yMJRXxlD1.jpg",
                price: 500
            },
            {
                id: "d5",
                name: "Traditional Motif",
                image: "floral.jpg",
                price: 800
            },
            {
                id: "d6",
                name: "Modern Pattern",
                image: "design 1.jpg",
                price: 600
            }
        ],
        reviews: [
            { user: "Anjali", rating: 4, comment: "Perfect for daily wear with nice design options" },
            { user: "Meera", rating: 5, comment: "Great quality cotton, designs are elegant" }
        ]
    },
    {
        id: 10,
        name: "Plain Cotton Saree - green",
        description: "Comfortable cotton saree with design customization",
        price: 1499,
        originalPrice: 2999,
        image: "saree.jpg",
        category: "Sarees",
        rating: 4.5,
        stock: 20,
        colors: ["White", "Off White", "Light Yellow", "Light Green"],
        sizes: ["Free Size"],
        sizeChartImage: "size chart.jpg",
        isCustomizable: true,
        designs: [
            {
                id: "d4",
                name: "Floral Border",
                image: "https://t4.ftcdn.net/jpg/00/40/98/47/360_F_40984798_DXM81PAeJJlhywRo4qCpqe1yMJRXxlD1.jpg",
                price: 500
            },
            {
                id: "d5",
                name: "Traditional Motif",
                image: "floral.jpg",
                price: 800
            },
            {
                id: "d6",
                name: "Modern Pattern",
                image: "design 1.jpg",
                price: 600
            }
        ],
        reviews: [
            { user: "Anjali", rating: 4, comment: "Perfect for daily wear with nice design options" },
            { user: "Meera", rating: 5, comment: "Great quality cotton, designs are elegant" }
        ]
    },
    {
        id: 1,
        name: "Elegant Red Saree",
        description: "Handcrafted silk saree with intricate embroidery",
        price: 999,
        originalPrice: 2999,
        image: "https://th.bing.com/th/id/OIP.RX8zW3xMhXrrVSKcQN4jgwHaKL?w=800&h=1100&rs=1&pid=ImgDetMain",
        category: "Sarees",
        rating: 4.5,
        stock: 10,
        colors: ["Red", "Maroon", "Crimson"],
        sizes: ["Free Size"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Priya", rating: 5, comment: "Beautiful saree, excellent quality!" },
            { user: "Rahul", rating: 4, comment: "Good product, fast delivery" }
        ]
    },
    {
        id: 2,
        name: "Royal Blue Lehenga",
        description: "Designer lehenga with detailed work",
        price: 999,
        originalPrice: 1999,
        image: "https://cdn.shopify.com/s/files/1/1105/1322/products/RoyalBlueDesignerHeavyEmbroideredBridalLehenga_9_-Saira_sBoutique.jpg?v=1604207244",
        category: "Lehengas",
        rating: 4.8,
        stock: 8,
        colors: ["Blue", "Navy", "Royal Blue"],
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Anjali", rating: 5, comment: "Stunning lehenga, perfect for weddings!" },
            { user: "Meera", rating: 4, comment: "Beautiful design, good quality" }
        ]
    },
    {
        id: 3,
        name: "Emerald Green Anarkali",
        description: "Traditional anarkali with modern touch",
        price: 1599,
        originalPrice: 5699,
        image: "https://i.etsystatic.com/19396120/r/il/4fcd53/2808187835/il_1140xN.2808187835_9hx2.jpg",
        category: "Anarkalis",
        rating: 4.3,
        stock: 15,
        colors: ["Green", "Emerald", "Forest Green"],
        sizes: ["S", "M", "L", "XL"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Neha", rating: 4, comment: "Comfortable and elegant" },
            { user: "Ravi", rating: 5, comment: "Great quality, beautiful design" }
        ]
    },
    {
        id: 4,
        name: "Pink Designer Saree",
        description: "Contemporary saree with elegant design",
        price: 999,
        originalPrice: 6999,
        image: "https://th.bing.com/th/id/OIP.lvRoRqR6FGftm_2HapSZ6AHaLH?rs=1&pid=ImgDetMain",
        category: "Suits",
        rating: 4.6,
        stock: 12,
        colors: ["Pink", "Rose", "Light Pink"],
        sizes: ["S", "M", "L"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Sneha", rating: 5, comment: "Perfect for office wear" },
            { user: "Amit", rating: 4, comment: "Good quality, nice fit" }
        ]
    },
    {
        id: 5,
        name: "Gold Embroidered Lehenga",
        description: "Bridal lehenga with heavy embroidery",
        price: 999,
        originalPrice: 5999,
        image: "https://th.bing.com/th/id/OIP.RdmRyk2-KZ33DuYCcklcwAHaLH?rs=1&pid=ImgDetMain",
        category: "Lehengas",
        rating: 4.9,
        stock: 5,
        colors: ["Gold", "Golden", "Yellow"],
        sizes: ["S", "M", "L"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Pooja", rating: 5, comment: "Perfect for my wedding!" },
            { user: "Rahul", rating: 5, comment: "Exquisite work, worth every penny" }
        ]
    },
    {
        id: 6,
        name: "Chikankari Kurti",
        description: "Hand-embroidered kurti with traditional design",
        price: 999,
        originalPrice: 4999,
        image: "https://i.etsystatic.com/17422051/r/il/c31bcf/4163799562/il_1140xN.4163799562_r167.jpg",
        category: "Kurtis",
        rating: 4.4,
        stock: 20,
        colors: ["White", "Ivory", "Beige"],
        sizes: ["S", "M", "L", "XL"],
        sizeChartImage: "size chart.jpg",
        reviews: [
            { user: "Priya", rating: 4, comment: "Beautiful embroidery" },
            { user: "Anjali", rating: 5, comment: "Perfect for casual wear" }
        ]
    }
];

// Filter and sort functionality
let filteredProducts = [...products];

function filterProducts() {
    const categorySelect = document.getElementById('categorySelect');
    const selectedCategory = categorySelect.value;
    
    filteredProducts = selectedCategory === 'all' 
        ? [...products] 
        : products.filter(product => product.category === selectedCategory);
    
    sortProducts();
}

function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect.value;
    
    filteredProducts.sort((a, b) => {
        switch(sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id; // Assuming higher ID means newer product
            default:
                return 0;
        }
    });
    
    displayProducts();
}

// Cart functionality
let cart = [];

// Display products
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container" onclick="showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 onclick="showProductDetails(${product.id})">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price-container">
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discounted-price">₹${product.price}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                    <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productDetailsModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Update modal content
    document.getElementById('productDetailsImage').src = product.image;
    document.getElementById('productDetailsImage').alt = product.name;
    document.getElementById('productDetailsName').textContent = product.name;
    document.getElementById('productDetailsDescription').textContent = product.description;
    
    // Price display
    document.getElementById('productDetailsPrice').innerHTML = `
        <div class="price-container">
            <span class="original-price">₹${product.originalPrice}</span>
            <span class="discounted-price">₹${product.price}</span>
        </div>
    `;

    // Colors
    document.getElementById('productDetailsColors').innerHTML = `
        <h3>Available Colors</h3>
        <div class="color-options">
            ${product.colors.map(color => `
                <div class="color-option" style="background-color: ${color.toLowerCase()}" data-color="${color}"></div>
            `).join('')}
        </div>
    `;

    // Add click event for color selection
    setTimeout(() => {
        document.querySelectorAll('.color-option').forEach(colorOption => {
            colorOption.addEventListener('click', function() {
                // Remove selected class from all color options
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked color option
                this.classList.add('selected');
                // Store selected color
                product.selectedColor = this.getAttribute('data-color');
            });
        });
    }, 100);

    // Sizes with Size Chart Button
    document.getElementById('productDetailsSizes').innerHTML = `
        <h3>Available Sizes <button class="view-size-chart" onclick="showSizeChart('${product.sizeChartImage}')">View Size Chart</button></h3>
        <div class="size-options">
            ${product.sizes.map(size => `
                <button class="size-option" data-size="${size}">${size}</button>
            `).join('')}
            <button class="size-option custom-size-btn" data-size="custom">Custom Size</button>
        </div>
        <div class="custom-size-form" style="display: none;">
            <h4>Enter Custom Measurements (in inches)</h4>
            <div class="custom-size-inputs">
                ${product.category === 'Sarees' ? `
                    <div class="input-group">
                        <label for="blouseSize">Blouse Size:</label>
                        <input type="number" id="blouseSize" name="blouseSize" min="30" max="48" placeholder="32">
                    </div>
                    <div class="input-group">
                        <label for="sareeLength">Saree Length:</label>
                        <input type="number" id="sareeLength" name="sareeLength" min="5" max="9" placeholder="6 yards">
                    </div>
                ` : product.category === 'Lehengas' ? `
                    <div class="input-group">
                        <label for="waist">Waist:</label>
                        <input type="number" id="waist" name="waist" min="24" max="44" placeholder="28">
                    </div>
                    <div class="input-group">
                        <label for="bust">Bust:</label>
                        <input type="number" id="bust" name="bust" min="30" max="48" placeholder="34">
                    </div>
                    <div class="input-group">
                        <label for="hip">Hip:</label>
                        <input type="number" id="hip" name="hip" min="30" max="50" placeholder="36">
                    </div>
                    <div class="input-group">
                        <label for="length">Length:</label>
                        <input type="number" id="length" name="length" min="38" max="44" placeholder="40">
                    </div>
                ` : `
                    <div class="input-group">
                        <label for="bust">Bust:</label>
                        <input type="number" id="bust" name="bust" min="30" max="48" placeholder="34">
                    </div>
                    <div class="input-group">
                        <label for="waist">Waist:</label>
                        <input type="number" id="waist" name="waist" min="24" max="44" placeholder="28">
                    </div>
                    <div class="input-group">
                        <label for="hip">Hip:</label>
                        <input type="number" id="hip" name="hip" min="30" max="50" placeholder="36">
                    </div>
                    <div class="input-group">
                        <label for="shoulder">Shoulder:</label>
                        <input type="number" id="shoulder" name="shoulder" min="14" max="18" placeholder="15">
                    </div>
                    <div class="input-group">
                        <label for="length">Length:</label>
                        <input type="number" id="length" name="length" min="34" max="42" placeholder="38">
                    </div>
                `}
                <div class="custom-size-note">
                    <p>* Custom sizes may take 3-5 additional days for production.</p>
                </div>
            </div>
        </div>
    `;

    // Add click event listeners for size selection
    setTimeout(() => {
        document.querySelectorAll('.size-option').forEach(sizeOption => {
            sizeOption.addEventListener('click', function() {
                // Remove selected class from all size options
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked size option
                this.classList.add('selected');
                
                const selectedSize = this.getAttribute('data-size');
                product.selectedSize = selectedSize;
                
                // Toggle custom size form
                const customSizeForm = document.querySelector('.custom-size-form');
                if (selectedSize === 'custom') {
                    customSizeForm.style.display = 'block';
                    product.isCustomSize = true;
                } else {
                    customSizeForm.style.display = 'none';
                    product.isCustomSize = false;
                }
            });
        });
    }, 100);

    // Stock status
    document.getElementById('productDetailsStock').innerHTML = `
        <div class="stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
            ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </div>
    `;

    // Design customization section
    if (product.isCustomizable) {
        const designSection = document.createElement('div');
        designSection.className = 'design-customization';
        designSection.innerHTML = `
            <h3>Customize Design</h3>
            <div class="design-preview">
                <div class="preview-container">
                    <img src="${product.image}" alt="Base Saree" class="base-saree">
                    <div class="design-overlay"></div>
                </div>
            </div>
            <div class="design-options">
                <h4>Available Designs</h4>
                <div class="design-grid">
                    ${product.designs.map(design => `
                        <div class="design-option" onclick="selectDesign(${product.id}, '${design.id}')">
                            <img src="${design.image}" alt="${design.name}">
                            <h5>${design.name}</h5>
                            <p>+₹${design.price}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        modalContent.appendChild(designSection);
    }

    // Add to cart button
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart';
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.onclick = (event) => {
        event.stopPropagation();
        addToCart(productId);
    };
    modalContent.appendChild(addToCartBtn);

    // Reviews
    const reviewsHTML = `
        <div class="product-reviews">
            <h3>Customer Reviews</h3>
            <div class="rating">
                ${generateStars(product.rating)}
                <span class="review-count">(${product.reviews.length} reviews)</span>
            </div>
            <div class="reviews-list">
                ${product.reviews.map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-user">${review.user}</span>
                            <div class="review-rating">${generateStars(review.rating)}</div>
                        </div>
                        <p class="review-comment">${review.comment}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add reviews section to modal content
    const reviewsContainer = document.createElement('div');
    reviewsContainer.className = 'product-reviews-container';
    reviewsContainer.innerHTML = reviewsHTML;
    modalContent.appendChild(reviewsContainer);

    // Show modal with smooth animation
    modal.style.display = 'block';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    // Add event listeners for closing
    const closeBtn = modal.querySelector('.close-product');
    closeBtn.onclick = () => closeProductDetails(modal);

    // Close on outside click
    window.onclick = (event) => {
        if (event.target === modal) {
            closeProductDetails(modal);
        }
    };

    // Enable scrolling in modal content
    modalContent.style.maxHeight = '90vh';
    modalContent.style.overflowY = 'auto';
}

// Show Size Chart Modal
function showSizeChart(chartImageUrl) {
    // Create modal if it doesn't exist
    let sizeChartModal = document.getElementById('sizeChartModal');
    
    if (!sizeChartModal) {
        sizeChartModal = document.createElement('div');
        sizeChartModal.id = 'sizeChartModal';
        sizeChartModal.className = 'modal';
        sizeChartModal.innerHTML = `
            <div class="modal-content size-chart-modal">
                <span class="close">&times;</span>
                <h2>Size Chart</h2>
                <div class="size-chart-container">
                    <img id="sizeChartImage" src="" alt="Size Chart" class="size-chart-image">
                </div>
            </div>
        `;
        document.body.appendChild(sizeChartModal);
        
        // Add close functionality
        const closeBtn = sizeChartModal.querySelector('.close');
        closeBtn.onclick = function() {
            sizeChartModal.style.display = 'none';
        };
        
        // Close on outside click
        window.onclick = function(event) {
            if (event.target === sizeChartModal) {
                sizeChartModal.style.display = 'none';
            }
        };
    }
    
    // Set the image source
    document.getElementById('sizeChartImage').src = chartImageUrl;
    
    // Display the modal
    sizeChartModal.style.display = 'block';
}

// Function to select and preview design
function selectDesign(productId, designId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product || !product.isCustomizable) return;

    const design = product.designs.find(d => d.id === designId);
    if (!design) return;

    // Store the selected design on the product object
    product.selectedDesign = design;

    // Remove selected class from all design options
    document.querySelectorAll('.design-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to clicked design option
    const selectedOption = document.querySelector(`.design-option[onclick*="${designId}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    // Update design overlay
    const designOverlay = document.querySelector('.design-overlay');
    if (designOverlay) {
        designOverlay.style.backgroundImage = `url(${design.image})`;
        designOverlay.style.opacity = '0.7';
    }

    // Update price display
    const totalPrice = product.price + design.price;
    const priceContainer = document.querySelector('.price-container');
    if (priceContainer) {
        priceContainer.innerHTML = `
            <span class="original-price">₹${product.originalPrice}</span>
            <span class="discounted-price">₹${totalPrice}</span>
            <span class="design-price">+ Design: ₹${design.price}</span>
        `;
    }
}

// Close product details modal
function closeProductDetails(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        // Remove design customization and reviews container
        const designCustomization = modal.querySelector('.design-customization');
        if (designCustomization) {
            designCustomization.remove();
        }
        const reviewsContainer = modal.querySelector('.product-reviews-container');
        if (reviewsContainer) {
            reviewsContainer.remove();
        }
    }, 300);
}


// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if this is a customizable product (IDs 7 and 8)
    const isCustomizable = product.isCustomizable;

    // For customizable products, check if a design is selected
    if (isCustomizable && !product.selectedDesign) {
        showNotification('Please select a design first', 'error');
        return;
    }

    // Create cart item with appropriate structure
    const cartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
    };

    // Add design details for customizable products
    if (isCustomizable && product.selectedDesign) {
        cartItem.design = {
            id: product.selectedDesign.id,
            name: product.selectedDesign.name,
            price: product.selectedDesign.price,
            image: product.selectedDesign.image
        };
        cartItem.total = product.price + product.selectedDesign.price;
    } else {
        cartItem.total = product.price;
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => {
        if (isCustomizable) {
            return item.id === productId && 
                  item.design && 
                  product.selectedDesign && 
                  item.design.id === product.selectedDesign.id;
        }
        return item.id === productId;
    });

    if (existingItemIndex !== -1) {
        // Update existing item quantity
        cart[existingItemIndex].quantity++;
        cart[existingItemIndex].total = cart[existingItemIndex].quantity * 
            (cart[existingItemIndex].price + (cart[existingItemIndex].design ? cart[existingItemIndex].design.price : 0));
    } else {
        // Add new item to cart
        cart.push(cartItem);
    }

    // Update cart display and count
    updateCartDisplay();
    updateCartCount();
    showNotification('Item added to cart', 'success');
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Use item total for price calculation
        let itemHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                ${item.design ? `
                    <p class="cart-item-design">Design: ${item.design.name}</p>
                    <p class="cart-item-price">Base: ₹${item.price}</p>
                    <p class="cart-item-design-price">Design: +₹${item.design.price}</p>
                    <p class="cart-item-total">Total: ₹${item.total}</p>
                ` : `
                    <p class="cart-item-price">₹${item.price}</p>
                `}
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1}, ${item.design ? `'${item.design.id}'` : 'null'})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1}, ${item.design ? `'${item.design.id}'` : 'null'})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id}, ${item.design ? `'${item.design.id}'` : 'null'})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItem.innerHTML = itemHTML;
        cartItems.appendChild(cartItem);
    });

    updateCartTotals();
}

// Update cart totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('cartTax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;
}

// Update quantity with design support
function updateQuantity(productId, newQuantity, designId) {
    if (newQuantity < 1) {
        removeFromCart(productId, designId);
    } else {
        const itemIndex = cart.findIndex(item => {
            if (designId) {
                return item.id === productId && item.design && item.design.id === designId;
            }
            return item.id === productId;
        });
        
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            cart[itemIndex].total = cart[itemIndex].quantity * 
                (cart[itemIndex].price + (cart[itemIndex].design ? cart[itemIndex].design.price : 0));
            updateCartDisplay();
            updateCartCount();
        }
    }
}

// Remove from cart with design support
function removeFromCart(productId, designId) {
    if (designId) {
        cart = cart.filter(item => !(item.id === productId && item.design && item.design.id === designId));
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCartDisplay();
    updateCartCount();
    showNotification('Product removed from cart!');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart modal
function showCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    updateCartDisplay();
}

// Close cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    closeCartModal();
    showCheckoutModal();
}

// Show checkout modal
function showCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'block';
    updateCheckoutTotals();
}

// Close checkout modal
function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'none';
    cart = [];
    updateCartCount();
    showNotification('Thank you for your purchase!');
}

// Update checkout totals
function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('checkoutTax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString()}`;
}

// Handle checkout steps
document.getElementById('buyerDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Generate random order ID
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('orderId').textContent = orderId;
    
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
});

// Toggle wishlist
function toggleWishlist(productId) {
    const wishlistBtn = event.currentTarget;
    wishlistBtn.classList.toggle('active');
    const icon = wishlistBtn.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();

    // Add event listeners for modal close buttons
    document.querySelectorAll('.close').forEach(button => {
        button.onclick = function() {
            this.closest('.modal').style.display = 'none';
        }
    });

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }

    // Add cart icon click event listener
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            showCartModal();
        });
    }

    // Add event listeners for add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.stopPropagation();
            const productId = parseInt(e.target.getAttribute('onclick').match(/\d+/)[0]);
            addToCart(productId);
        }
    });

    // Add logout button click event listener
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            firebase.auth().signOut().then(() => {
                // Sign-out successful
                showNotification('Logged out successfully!');
                // Redirect to home page
                window.location.href = 'index.html';
            }).catch((error) => {
                // An error happened
                showNotification('Error logging out: ' + error.message);
            });
        });
    }
});