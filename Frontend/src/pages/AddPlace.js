import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const AddPlace = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        placeName: '',
        address: '',
        description: '',
        rating: '',
        photos: [],
        mapUrl: '',
        phone: '',
        accessibility: [],
        amenities: [],
        children: [],
        pets: [],
        finalTags: [],
    });

    const [newItem, setNewItem] = useState({
        newAccessibility: '',
        newAmenities: '',
        newChildren: '',
        newPets: '',
        newFinalTags: '',
        newPhotoUrl: '',
    });

    const handleNewItemChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddItem = (type) => {
        const key = `new${type.charAt(0).toUpperCase() + type.slice(1)}`;
        const newItemValue = newItem[key].trim();
        if (newItemValue) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [type]: [...prevFormData[type], newItemValue],
            }));
            setNewItem({ ...newItem, [key]: '' });
        }
    };

    const handleRemoveItem = (type, indexToRemove) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [type]: prevFormData[type].filter((_, index) => index !== indexToRemove),
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const convenience = {
            accessibility: formData.accessibility,
            amenities: formData.amenities,
            children: formData.children,
            pets: formData.pets,
        };

        const placeData = {
            placeName: formData.placeName,
            address: formData.address,
            description: formData.description,
            rating: formData.rating,
            photos: formData.photos,
            location: {
                mapUrl: formData.mapUrl,
                phone: formData.phone,
            },
            convenience,
            finalTags: formData.finalTags,
        };
       
        console.log(placeData); // Log placeData to verify it before sending

        try {
            const uploadedPhotos = await Promise.all(
                formData.photos.map(async (photo) => {
                    const response = await fetch(photo);
                    const blob = await response.blob();
                    const file = new File([blob], `photo-${Date.now()}.jpg`, { type: blob.type });
    
                    const formData = new FormData();
                    formData.append('file', file);
    
                    const uploadResponse = await axios.post('http://localhost:3001/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
    
                    return uploadResponse.data.url;
                })
            );
    
            // Add the uploaded photo URLs to the placeData
            placeData.photos = uploadedPhotos;

            const response = await fetch('http://localhost:3001/addPlace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(placeData),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Place added successfully!'); 
                navigate('/placelist'); // Redirect to the places list or any other appropriate page
            } else {
                alert(`Failed to add place: ${data.message}`);
            }
        } catch (error) {
            console.error('Error adding place:', error);
            alert('Failed to add place.');
        }
    };

    const handleAddPhotoUrl = () => {
        const newPhotoUrl = newItem.newPhotoUrl.trim();
        if (newPhotoUrl) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                photos: [...prevFormData.photos, newPhotoUrl],
            }));
            setNewItem({ ...newItem, newPhotoUrl: '' });
        }
    };

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        const newPhotos = files.map(file => URL.createObjectURL(file));
        setFormData((prevFormData) => ({
            ...prevFormData,
            photos: [...prevFormData.photos, ...newPhotos],
        }));
    };

    return (
        <div className="page-container" style={{ minHeight: '230vh' }}>
            <div className="content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="trans-uppercase mb-10">Add a Place</h4>
                            <div className="cws_divider mb-30"></div>
                        </div>
                    </div>
                    <div className="review-content pattern relative">
                        <div className="row">
                            <div className="col-md-5 mb-md-30 mb-xs-0">
                                <div className="review-total">
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="review-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Place Name *</label>
                                            <input
                                                type="text"
                                                name="placeName"
                                                className="form-control"
                                                value={formData.placeName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Address *</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Description *</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="3"
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Rating *</label>
                                            <div className="rating-stats">
                                                Current rating: {formData.rating}
                                            </div>
                                            <div>
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <React.Fragment key={star}>
                                                        <input
                                                            type="radio"
                                                            id={`star${star}`}
                                                            name="rating"
                                                            value={star}
                                                            checked={Math.abs(formData.rating) === star}
                                                            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                                            className="star-input"
                                                        />
                                                        <label htmlFor={`star${star}`} className={`star-label ${star <= formData.rating ? 'full' : ''}`}>&#9733;</label>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
            <label>Photos</label>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ width: '70%', padding: '10px',borderRadius: '4px' }}
              
            />
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <input
                    type="text"
                    name="newPhotoUrl"
                    className="form-control"
                    value={newItem.newPhotoUrl}
                    onChange={handleNewItemChange}
                    style={{ width: '70%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <button
                    type="button"
                    onClick={handleAddPhotoUrl}
                    className="add-button"
                >
                    Add Photo URL
                </button>
            </div>
            <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {formData.photos.map((photo, index) => (
                    <div key={index} className="photo-container">
                        <img src={photo} alt={`Photo ${index}`} className="photo-preview" />
                        <button
                            onClick={() => handleRemoveItem('photos', index)}
                            className="remove-photo-button"
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                            />
                                        </div>

                                        {/* Accessibility */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Accessibility</label>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    name="newAccessibility"
                                                    className="form-control"
                                                    value={newItem.newAccessibility}
                                                    onChange={handleNewItemChange}
                                                    style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddItem('accessibility')}
                                                    className="add-button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ marginTop: '15px' }}>
                                                {formData.accessibility.map((item, index) => (
                                                    <span key={index} className="item">
                                                        {item}
                                                        <button
                                                            onClick={() => handleRemoveItem('accessibility', index)}
                                                            className="remove-button"
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Amenities</label>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    name="newAmenities"
                                                    className="form-control"
                                                    value={newItem.newAmenities}
                                                    onChange={handleNewItemChange}
                                                    style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddItem('amenities')}
                                                    className="add-button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ marginTop: '15px' }}>
                                                {formData.amenities.map((item, index) => (
                                                    <span key={index} className="item">
                                                        {item}
                                                        <button
                                                            onClick={() => handleRemoveItem('amenities', index)}
                                                            className="remove-button"
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Children */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Children</label>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    name="newChildren"
                                                    className="form-control"
                                                    value={newItem.newChildren}
                                                    onChange={handleNewItemChange}
                                                    style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddItem('children')}
                                                    className="add-button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ marginTop: '15px' }}>
                                                {formData.children.map((item, index) => (
                                                    <span key={index} className="item">
                                                        {item}
                                                        <button
                                                            onClick={() => handleRemoveItem('children', index)}
                                                            className="remove-button"
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Pets */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Pets</label>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    name="newPets"
                                                    className="form-control"
                                                    value={newItem.newPets}
                                                    onChange={handleNewItemChange}
                                                    style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddItem('pets')}
                                                    className="add-button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ marginTop: '15px' }}>
                                                {formData.pets.map((item, index) => (
                                                    <span key={index} className="item">
                                                        {item}
                                                        <button
                                                            onClick={() => handleRemoveItem('pets', index)}
                                                            className="remove-button"
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label>Tags</label>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    name="newFinalTags"
                                                    className="form-control"
                                                    value={newItem.newFinalTags} 
                                                    onChange={handleNewItemChange}
                                                    style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddItem('finalTags')} 
                                                    className="add-button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ marginTop: '15px' }}>
                                                {formData.finalTags.map((item, index) => (
                                                    <span key={index} className="item">
                                                        {item}
                                                        <button
                                                            onClick={() => handleRemoveItem('finalTags', index)}
                                                            className="remove-button"
                                                        >
                                                            x
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <button type="submit" className="cws-button alt">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <section className="page-section pt-90 pb-80 bg-main pattern relative">
                <div className="container">
                    <div className="call-out-box clearfix with-icon">
                        <div className="row call-out-wrap">
                            <div className="col-md-5">
                                <h6 className="title-section-top gray font-4">subscribe today</h6>
                                <h2 className="title-section alt-2"><span>Get</span> Latest offers</h2><i className="flaticon-suntour-email call-out-icon"></i>
                            </div>
                            <div className="col-md-7">
                                <form action="php/contacts-process.php" method="post" className="form contact-form mt-10">
                                    <div className="input-container">
                                        <input type="text" placeholder="Enter your email" value="" name="email" className="newsletter-field mb-0 form-row" /><i className="flaticon-suntour-email icon-left"></i>
                                        <button type="submit" className="subscribe-submit"><i className="flaticon-suntour-arrow icon-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AddPlace;

