document.addEventListener("DOMContentLoaded", () => {
    const itemsPool = [
        { id: 1, name: "Luxury Chair", originalPrice: 299, discount: 30, image: "item1.jpg", description: "Ergonomically designed for ultimate comfort." },
        { id: 2, name: "Smart Watch", originalPrice: 199, discount: 40, image: "item2.jpg", description: "Track your fitness and stay connected on the go." },
        { id: 3, name: "Wireless Earbuds", originalPrice: 99, discount: 20, image: "item3.jpg", description: "Experience crystal-clear sound anywhere." },
        { id: 4, name: "Gaming Mouse", originalPrice: 79, discount: 50, image: "item4.jpg", description: "Achieve precision and performance in every game." },
        { id: 5, name: "Portable Speaker", originalPrice: 129, discount: 30, image: "item5.jpg", description: "Portable sound with incredible bass." },
        { id: 6, name: "4K Monitor", originalPrice: 499, discount: 25, image: "item6.jpg", description: "Enjoy ultra-clear visuals for work and play." },
        { id: 7, name: "Fitness Tracker", originalPrice: 69, discount: 15, image: "item7.jpg", description: "Stay on top of your health goals easily." }
    ];

    const topPicksContainer = document.getElementById("top-picks-items");
    const shopContainer = document.getElementById("shop-items");

    function renderItems(items, container, isSale = false) {
        container.innerHTML = "";
        items.forEach(item => {
            const discountedPrice = (item.originalPrice * (1 - item.discount / 100)).toFixed(2);
            container.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>
                        ${isSale ? `<span class="original-price">$${item.originalPrice}</span>` : ""}
                        <span class="sale-price">$${discountedPrice}</span>
                    </p>
                    ${isSale ? `<p>${item.discount}% OFF</p>` : ""}
                    <button class="btn-primary">Add to Cart</button>
                </div>
            `;
        });
    }

    // Render Top Picks (Only Sale Items) on the Landing Page
    if (topPicksContainer) {
        const topPicks = itemsPool.slice(0, 5); // Show the first 5 items as Top Picks
        renderItems(topPicks, topPicksContainer, true);
    }

    // Render All Items on the Shop All Page
    if (shopContainer) {
        renderItems(itemsPool, shopContainer, false);
    }
});
