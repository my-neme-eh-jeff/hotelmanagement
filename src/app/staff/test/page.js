"use client";
import React, { useState } from 'react';
import DisplayImage from './DisplayImage'; // Import the DisplayImage component

const YourComponent = () => {
  const [imageBlob, setImageBlob] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://b045-34-143-239-229.ngrok-free.app/predictor2/", requestOptions);
      const result = await response.blob(); // Get response as Blob
      setImageBlob(result); // Set the image blob to state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg, .png, .jpeg" onChange={handleImageUpload} />
      {imageBlob && <DisplayImage imageBlob={imageBlob} />} {/* Render the DisplayImage component if imageBlob is not null */}
    </div>
  );
};

export default YourComponent;
