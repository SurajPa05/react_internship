import './cards.css';

function Card({ product }) {
    const imageUrl = product.image 
        ? `https://sample-e-1.onrender.com/${product.image}` 
        : null;

    return (
        <div className="product-card">
            <div className="product-image">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={product.name}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.product-placeholder').style.display = 'flex';
                        }}
                    />
                ) : (
                    <div className="product-placeholder" style={{ display: 'flex' }}>
                        <span className="product-icon">📦</span>
                    </div>
                )}
                {!imageUrl && (
                    <div className="product-placeholder" style={{ display: 'none' }}>
                        <span className="product-icon">📦</span>
                    </div>
                )}
                <span className="product-category">{product.category}</span>
                {product.stock < 10 && product.stock > 0 && (
                    <span className="stock-badge low-stock">Low Stock</span>
                )}
                {product.stock === 0 && (
                    <span className="stock-badge out-of-stock">Out of Stock</span>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-stock-info">
                    <span className="stock-text">
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                </div>
                <div className="product-footer">
                    <span className="product-price">₹{product.price.toLocaleString()}</span>
                    <button 
                        className="add-to-cart-btn" 
                        disabled={product.stock === 0}
                    >
                        {product.stock === 0 ? 'Unavailable' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
