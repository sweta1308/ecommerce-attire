# Ecommerce

This is a front-end React application that is specifically designed for integrating functional and unit tests.

<center><div style="display: inline_block"><br/>
<img align="center" alt="nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
<img align="center" alt="jvmh-typescript" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img align="center" alt="reactjs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="center" alt="react-router" height="50" width="80" src="https://reactrouter.com/_brand/react-router-stacked-color-inverted.svg" />
<img align="center" alt="jvmh-font-awesome" height="50" width="50" src="https://img.jsdelivr.com/github.com/FortAwesome.png" />
<img align="center" alt="jvmh-tailwindcss" height="50" width="50" src="https://www.svgrepo.com/show/349330/css3.svg" />
</center>

## Features

- Landing Page
- Product Listing Page
- Filters By
  - Price
  - Rating
  - Category
  - Brand
- Search Product Functionality
- Single Product Page
- Cart management
- Wishlist Management
- Order Management
- Address Management
- Checkout Management
- Payment Gateway Integration
- Authentication
  - Sign Up
  - Log In
  - Log Out
- Toast And Loaders
- Responsive

## Tech Stack

- React JS
- React Router v6
- React useContext + useReducer
- Vanilla CSS
- Font Awesome Icons
- Razorpay Payment Gateway

<br/>

## Generate JWT

```bash
brew install mike-engel/jwt-cli/jwt-cli
jwt encode --secret "this is just a test token example"
```

<br/>

## How to Install and Run Locally

```js
git clone git@github.com:cpeoples/ecommerce.git
cd ecommerce-attire
export REACT_APP_JWT_SECRET="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDcxNjcwNDd9.Ey7ekSna0a2Gc5AsnOizmxaM71ktgs3mUzzox3pixSk"
npm install
npm start
```
