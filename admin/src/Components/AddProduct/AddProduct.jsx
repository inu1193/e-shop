import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        if (!productDetails.name || !productDetails.new_price || !productDetails.old_price || !image) {
            alert("Please fill all fields and select an image.");
            return;
        }

        let responseData;
        let product = { ...productDetails };

        let formData = new FormData();
        formData.append('product', image);

        try {
            const uploadResponse = await fetch('https://e-shop-v7kq.onrender.com/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            responseData = await uploadResponse.json();

            if (responseData && responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                const productResponse = await fetch('https://e-shop-v7kq.onrender.com/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                });

                const productData = await productResponse.json();
                productData.success ? alert("Product Added") : alert("Failed to add product");
            } else {
                alert("Failed to upload image.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name='name'
                    placeholder='Type Here'
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name='old_price'
                        placeholder='Type Here'
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name='new_price'
                        placeholder='Type Here'
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className='add-product-selector'
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        className='addproduct-thumbnail-img'
                        alt=""
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name='image'
                    id='file-input'
                    hidden
                />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;
