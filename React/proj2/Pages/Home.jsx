import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function HomePage() {
    const [products] = useState([
        {
            id: 1,
            name: "Premium Headphones",
            price: "$299.99",
            description: "High-quality wireless headphones with noise cancellation",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: "$399.99",
            description: "Fitness tracking and health monitoring smartwatch",
            category: "Electronics"
        },
        {
            id: 3,
            name: "Laptop Stand",
            price: "$49.99",
            description: "Ergonomic aluminum laptop stand for better posture",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Wireless Mouse",
            price: "$79.99",
            description: "Precision wireless mouse with ergonomic design",
            category: "Accessories"
        },
        {
            id: 5,
            name: "Mechanical Keyboard",
            price: "$149.99",
            description: "RGB mechanical keyboard with premium switches",
            category: "Accessories"
        },
        {
            id: 6,
            name: "Portable Charger",
            price: "$59.99",
            description: "20000mAh fast charging power bank",
            category: "Electronics"
        },
        {
            id: 7,
            name: "USB-C Hub",
            price: "$89.99",
            description: "Multi-port USB-C hub with HDMI and card reader",
            category: "Accessories"
        },
        {
            id: 8,
            name: "Webcam HD",
            price: "$129.99",
            description: "1080p HD webcam with auto focus and noise reduction",
            category: "Electronics"
        }
    ]);

    return (
        <>
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to MyApp</h1>
                        <p className="hero-subtitle">
                            Discover premium products for your digital lifestyle
                        </p>
                        <div className="hero-buttons">
                            <Link to="/signup" className="hero-btn primary">
                                Get Started
                            </Link>
                            <Link to="#products" className="hero-btn secondary">
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section" id="products">
                    <div className="products-container">
                        <div className="section-header">
                            <h2>Featured Products</h2>
                            <p>Explore our curated collection of premium tech products</p>
                        </div>

                        <div className="products-grid">
                            {products.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <div className="product-placeholder">
                                            <span className="product-icon">📦</span>
                                        </div>
                                        <span className="product-category">{product.category}</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-description">{product.description}</p>
                                        <div className="product-footer">
                                            <span className="product-price">{product.price}</span>
                                            <button className="add-to-cart-btn">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to get started?</h2>
                        <p>Join thousands of satisfied customers today</p>
                        <Link to="/signup" className="cta-button">
                            Create Account
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;
