const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query  {
      products: [Product]
      orders: [Order]
    }

    type Product {
      id: ID!
      description: String!
      reviews: [Review]
      price: Float! 
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product
        quantity: Int!
    }
`);


const root = {
    products: [
    {
        id: 'leatherbelt',
        description: 'Leather Belt',
        price: 25.00,
    },
    {
        id: 'cottonsocks',
        description: 'Cotton Socks',
        price: 5.00,
    },
    ],
    orders: [
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
    ]
};
 

const app = express();


app.use('/graphql', graphqlHTTP ({
        schema: schema,
        rootValue: root,
        graphiql: true,
}));


app.listen(3000, () => {
    console.log('GraphQL server is running on port 3000');
});