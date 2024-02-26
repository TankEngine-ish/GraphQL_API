const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { loadFilesSync } = require('@graphql-tools/load-files');

const { makeExecutableSchema } = require('graphql-tools');


const typesArray = loadFilesSync('**/*.graphql');


const schema = makeExecutableSchema({
    typeDefs: [schemaText]
});

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