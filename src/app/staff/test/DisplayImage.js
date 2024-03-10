"use client";
import React from 'react';

const DisplayImage = ({ imageBlob }) => {
  return (
    <div>
      <img src={URL.createObjectURL(imageBlob)} alt="Predicted Image" />
    </div>
  );
};

export default DisplayImage;
