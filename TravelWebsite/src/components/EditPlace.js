import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./EditPlace.css";

const EditPlace = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Mock data for auth and userId
  const auth = { user: { _id: "mockUserId" } };
  const userId = auth.user._id;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch the post data using the id from the URL params and set the state
    // This part is a placeholder, replace it with actual data fetching logic
    const fetchData = async () => {
      const post = {
        title: "Sample Title",
        description: "Sample Description",
        address: "Sample Address",
        image: "https://images.pexels.com/photos/27057427/pexels-photo-27057427/free-photo-of-house-of-the-black-heads.jpeg"
      };
      setTitle(post.title);
      setDescription(post.description);
      setAddress(post.address);
      setImagePreview(post.image);
    };

    fetchData();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Post updated successfully!');

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="edit-place">
      <h2>Edit Place</h2>
      <form onSubmit={handleSubmit} className="edit-place-form">
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
        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditPlace;

