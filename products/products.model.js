const products = [
        {
            id: 'leatherbelt',
            description: 'Leather Belt',
            price: 25.00,
            reviews: [],
        },
        {
            id: 'cottonsocks',
            description: 'Cotton Socks',
            price: 5.00,
            reviews: [],
        },
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter(product => {
        return product.price >= min && product.price <= max;
})
}

function getProductById(id) {
    return products.find(product => {
        return product.id === id;
    });
}   

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: [],
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById (id); 
    if (matchedProduct) {
        const NewProductReview = {
            rating,
            comment,
        };
        matchedProduct.reviews.push(NewProductReview);

        return newProductReview;

    }
}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
}