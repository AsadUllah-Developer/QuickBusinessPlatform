// this code is generated by chatgpt for product
// Product Data Array
const products = [
    {
        name: "Product 1",
        image: "../Materials/product1.jpg", // Correct path to your image
        description: "This is a great product.",
        price: "$10"
    },
    {
        name: "Product 2",
        image: "../Materials/product2.jpg", // Correct path to your image
        description: "This is another great product.",
        price: "$20"
    },
    {
        name: "Product 3",
        image: "../Materials/product3.jpg", // Correct path to your image
        description: "You will love this product.",
        price: "$15"
    },
    {
        name: "Product 4",
        image: "../Materials/product4.jpg", // Correct path to your image
        description: "You will love this product.",
        price: "$15"
    },
    {
        name: "Product 5",
        image: "../Materials/product5.jpg", // Correct path to your image
        description: "You will love this product.",
        price: "$15"
    }
];

// Get the Product Container
const productContainer = document.getElementById("product-container");

// Generate Product Cards Dynamically
products.forEach((product) => {
    const productCard = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button>Add to Cart</button>
        </div>
    `;
    productContainer.innerHTML += productCard;
});


