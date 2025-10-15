import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  categoryName?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, categoryName }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      quantity: 1,
    });
  };
  return (
    <div className="product-grid-container">
      {categoryName && (
        <div className="category-header">
          <h1 className="category-title">{categoryName}</h1>
          <p className="product-count">{products.length} products</p>
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card-link"
          >
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                {product.isOnSale && (
                  <div className="sale-badge">Sale</div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-price">
                  {product.isOnSale ? (
                    <>
                      <span className="original-price">${product.originalPrice?.toFixed(2)}</span>
                      <span className="sale-price">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="regular-price">${product.price.toFixed(2)}</span>
                  )}
                </div>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">({product.reviewCount})</span>
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
