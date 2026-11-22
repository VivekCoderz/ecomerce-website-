# E-commerce Website (React + Vite)

A front-end practice project: a product listing page for an online store, built with React and Vite. Product data is stored locally in `src/data/products.js` (10 sample products across smartphones, laptops, laptop accessories, books and fashion); there is no backend.

## Features

- Navbar with logo, search box and Home / About / Contact links (the search box and links are not wired up yet)
- Responsive grid of product cards, each showing image, description, review count, price, discount, MRP and stock
- Per-product quantity selector (`-` / `+`) kept between 0 and the available stock
- "Add To Cart" button that adds the product to the cart state in `App.jsx` (there is no cart page yet)

## Tech stack

- React 19
- Vite
- ESLint
- Plain inline styles + CSS

## Project structure

```
src/
  App.jsx                    # page layout, product + cart state
  components/
    Navbar.jsx
    IndiviualCard.jsx        # product card used on the page
    Card.jsx, SideCards.jsx  # not used yet
  data/
    products.js              # product list shown on the page
    cardData.js              # data for Card.jsx (not used yet)
```

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run lint      # run ESLint
```
