let products = [
    { id: 1, name: 'product A', price: 45000, comb: 3, comb_name: 'product C' },
    { id: 2, name: 'product B', price: 32000, comb: 8, comb_name: 'product HT' },
    { id: 3, name: 'product C', price: 47000, comb: 2, comb_name: 'product B' },
    { id: 4, name: 'product D', price: 55000, comb: 7, comb_name: 'product Z' },
];

function addCombProduct(products) {
    let size = products.length;
    for (let i = 0; i < size; i++) {
        const product = products[i];
        const combProductId = product.comb; 
        let found = false;
        for (const existingProduct of products) {
            if (existingProduct.id === combProductId) {
                found = true;
                break;
            }
        }
        if (!found) {
            products.push({ id: combProductId, name: product.comb_name, price: product.price, comb: 0, comb_name: "" });
        }
    }

    return products;
}

products = addCombProduct(products);

for (const product of products) {
    console.log(product);
}