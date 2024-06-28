import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddPlace.css";

const AddPlace = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { auth } = useContext(AuthContext);
  const userId = auth.user._id;

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('image', image);
    formData.append('userId', userId);

    try {
      const response = await axios.post('http://localhost:3001/api/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        console.log('Post created successfully:', response.data);

        setTitle('');
        setDescription('');
        setAddress('');
        setImage(null);
        setImagePreview(null);


        toast.success('Post created successfully!');
        

        setTimeout(() => {
          navigate('/places');
        }, 2000);
      } else {
        console.error('Error creating post:', response.data);

        toast.error('Error creating post.');
      }
    } catch (error) {
      console.error('Error creating post:', error);

      toast.error('Error creating post.');
    }
  };

  return (
    <div className="add-place">
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit} className="add-place-form">
        <div className="form-group">
          <div className="image-preview">
            {imagePreview ? (
              <img src={imagePreview} alt="Image Preview" />
            ) : (
              <div className="image-placeholder">Image Preview</div>
            )}
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="image">Upload Photo:</label>
              </td>
              <td>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="title">Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Description:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddPlace;

