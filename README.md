# ReactJS Project 


## Folder structure

```
src
|__ components (shared components between features)
|  |__ Loading
|     |__ index.jsx
|     |__ styles.scss
|
|__ features
|  |__ Todo
|     |__ components (components of feature Todo)
|     |__ pages (pages of feature Todo)
|     |__ index.jsx (entry point of feature Todo)
|
|__ App.js        
```

FiltersViewer 

```js
const filters = {
  isPromotion: true,
  salePrice_lte: 100,
  salePrice_gte: 100,
}
```

FILTER_LIST
- id: number
- getLabel: (filters) => string
- isActive: (filters) => true/false
- isVisible: (filters) => true/false
- isRemovable: boolean
- onRemove: func
- onToggle: func


```
DetailPage handleSubmit
|__ AddToCartForm (form management)
|  |__ QuantityField
``` 


/products/:productId --> ProductDescription
/products/:productId/additional --> ProductAdditional
/products/:productId/reviews --> ProductReviews



DetailPage
Click Chon Mua
Open Mini Cart
Go to Cart Page

Cart
- showMiniCart: true / false
- cartItems -> item (product, quantity)

State tính toán phụ thuộc vào state có sẵn
- cartItemsCount
- cartTotal
--> createSelector()