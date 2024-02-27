const orders =  [
        {
            date: '2021-01-01',
            subtotal: 30.00,
            items: [
            {
                product: {
                    id: 'leatherbelt',
                    description: 'Vintage Leather Belt',
                    price: 34.15,
                },
                quantity: 1,
                },  
                ]
            }
        ];

function getAllOrders() {
    return orders;
}


module.exports = {
    getAllOrders,
}