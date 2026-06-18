import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/cards';
import './home.css';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://sample-e-1.onrender.com/product/getproducts');
                setProducts(response.data);
                setError('');
            } catch (err) {
                setError('Failed to load products. Please try again later.');
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

                        {loading && (
                            <div className="loading-message">
                                <p>Loading products...</p>
                            </div>
                        )}

                        {error && (
                            <div className="error-message-section">
                                <p>{error}</p>
                            </div>
                        )}

                        {!loading && !error && products.length === 0 && (
                            <div className="no-products-message">
                                <p>No products available at the moment.</p>
                            </div>
                        )}

                        {!loading && !error && products.length > 0 && (
                            <div className="products-grid">
                                {products.map((product) => (
                                    <Card key={product._id} product={product} />
                                ))}
                            </div>
                        )}
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
