import React, { useState } from 'react';
import './addProduct.css';

const addProduct = () => {
	const [product, setProduct] = useState({
		id: '',
		name: '',
		description: '',
		price: '',
		category: '',
		stock: '',
		imageFile: null,
		imagePreview: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			const preview = URL.createObjectURL(file);
			setProduct((prev) => ({ ...prev, imageFile: file, imagePreview: preview }));
		} else {
			setProduct((prev) => ({ ...prev, imageFile: null, imagePreview: '' }));
		}
	};

	const handleSubmit = (e) => 
		e.preventDefault();
		122
	;

	return (
		<div className="add-product-container">
			<h2 className="add-product-title">Add Product</h2>
			<form className="add-product-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Id</label>
					<input name="id" type="text" value={product.id} onChange={handleChange} required />
				</div>

				<div className="form-group">
					<label>Name</label>
					<input name="name" type="text" value={product.name} onChange={handleChange} required />
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea name="description" value={product.description} onChange={handleChange} rows={4} />
				</div>

				<div className="form-row">
					<div className="form-group">
						<label>Price</label>
						<input name="price" type="number" step="0.01" value={product.price} onChange={handleChange} required />
					</div>

					<div className="form-group">
						<label>Stock</label>
						<input name="stock" type="number" value={product.stock} onChange={handleChange} />
					</div>
				</div>

				<div className="form-group">
					<label>Category</label>
					<input name="category" type="text" value={product.category} onChange={handleChange} />
				</div>

				<div className="form-group">
					<label>Image (upload)</label>
					<input name="imageFile" type="file" accept="image/*" onChange={handleFileChange} />
				</div>

				{product.imagePreview && (
					<div className="image-preview">
						<img src={product.imagePreview} alt="Preview" />
					</div>
				)}

				<button className="submit-btn" type="submit">Submit</button>
			</form>
		</div>
	);
};

export default addProduct;

