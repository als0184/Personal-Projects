document.addEventListener('DOMContentLoaded', function() {
    let searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchProducts);
});

async function searchProducts() {
    const productQuery = encodeURIComponent(document.getElementById("textBox").value);
    const url = `https://real-time-product-search.p.rapidapi.com/search?q=${productQuery}&country=us&language=en&sort_by=TOP_RATED`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        const productsList = document.getElementById("products");
        productsList.innerHTML = "";  

        result.data.forEach(product => {
            const li = document.createElement("li");
            li.className = "list-group-item";

            li.innerHTML = `
                <strong>Title:</strong> ${product.product_title}<br>
                <strong>Description:</strong> ${product.product_description}<br>
                <strong>Rating:</strong> ${product.product_rating}<br>
                <strong>Product Page:</strong> <a href="${product.product_page_url}" target="_blank">Link</a><br>
                <strong>Offers Page:</strong> <a href="${product.product_offers_page_url}" target="_blank">Link</a><br>
                <strong>Typical Price Range:</strong> ${product.typical_price_range.join(" - ")}
            `;

            productsList.appendChild(li);
        });

    } 
    catch (error) {
        console.error(error);
    }
}
