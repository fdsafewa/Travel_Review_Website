import React, { useState } from "react";
import "./AddPlace.css";

const AddPlace = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, address, image });
  };

  const handleExit = () => {
    setTitle("");
    setDescription("");
    setAddress("");
    setImage(null);
    setImagePreview(null);
    console.log("Exit clicked, form reset.");
  };

  return (
    <div className="add-place">
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit} className="add-place-form">
        <div className="form-group">
          <div className="image-preview">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview of uploaded place" />
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
            <tr>
              <td>
                <label htmlFor="description">Description:</label>
              </td>
              <td>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="5"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="exit-button" onClick={handleExit}>
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;
