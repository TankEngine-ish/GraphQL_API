# GraphQL_API


## Overview

This is a simple GraphQL API built with Apollo Server and Express.js. It provides functionality for querying and mutating data related to products and orders.

## Setup

The server is set up in server.js using Apollo Server and Express.js. The GraphQL schema and resolvers are loaded from the *.graphql and *.resolvers.js files respectively. The server listens on port 3000 and exposes the GraphQL API at the /graphql endpoint.

## Schema

The schema is defined in the *.graphql files. It includes the following types:

- `Product`: Represents a product with an id, description, price, and reviews.
- `Review`: Represents a review with a rating and comment.
- `Order`: Represents an order with a date, subtotal, and items.
- `OrderItem`: Represents an order item with a product and quantity.

The schema also includes the following queries and mutations:

* Query:

- `products`: Returns all products.
- `productsByPrice(min: Float!, max: Float!)`: Returns products within a price range.
- `product(id: ID!)`: Returns a product by ID.
- `orders`: Returns all orders.

* Mutation:

- `addNewProduct(id: ID!, description: String!, price: Float!)`: Adds a new product.
- `addNewProductReview(id: ID!, rating: Int!, comment: String)`: Adds a new product review.

## Resolvers

The resolvers are defined in the *.resolvers.js files. They provide the logic for fetching and mutating data based on the queries and mutations defined in the schema.

- `products.resolvers.js`: Contains resolvers for the products, productsByPrice, product, addNewProduct, and addNewProductReview queries and mutations.
- `orders.resolvers.js`: Contains the resolver for the orders query.

## Data

The data for products and orders is stored in memory in the products.model.js and orders.model.js files respectively. The data includes a list of products and a list of orders, each with their respective properties as defined in the schema. The models also include functions for fetching and mutating the data.