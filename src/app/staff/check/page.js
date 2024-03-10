"use client"
import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);
//   const [blobs, setBlobs] = useState([]);
  const [status, setStatus] = useState([]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (images.length < 3) {
//       setImages([...images, URL.createObjectURL(file)]);
//       setBlobs([...blobs, file]);
//     }
//   };

  const handleUpload = (event) => {
    

      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      
      const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow"
      };

      fetch("https://hackniche-allstackers.onrender.com/check", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
          setStatus((prevStatus) => [...prevStatus, result.data[0].status]);
        })
        .catch((error) => console.error(error));
   
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload Images</h2>
      <div className="mb-4">
        {images.map((image, index) => (
          <div key={index} className="mb-2">
            <img src={image} alt={`Image ${index + 1}`} className="w-[100px] h-[100px] object-cover rounded" />
            <span className={`px-2 py-1 rounded-lg ${status[index] === 'ok' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {status[index] === 'ok' ? 'OK' : 'Damaged'}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <input
          type="file"handleImageUpload
          accept=".jpg, .png, .jpeg"
          onChange={handleUpload}
        //   key={fileInputKey}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className={`cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 ${images.length >= 3 ? 'hidden' : ''}`}
        >
          {images.length === 0 ? 'Upload Image' : 'Upload Another Image'}
        </label>
      </div>
      <button
        onClick={handleUpload}
        className={`bg-green-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-green-600 ${images.length === 0 ? 'hidden' : ''}`}
      >
        Upload All
      </button>
    </div>
  );
};

export default ImageUpload;
