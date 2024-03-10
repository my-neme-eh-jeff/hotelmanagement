"use client";
import React, { useState } from 'react';
import { Radio } from 'antd';
import { ScaleLoader } from 'react-spinners';

const Inventory = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [value, setValue] = useState(1);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleUpload = () => {
        if (selectedImage) {
            setLoading(true);
            const formData = new FormData();
            formData.append('image', selectedImage);

            const requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow"
            };

            fetch("http://localhost:5000/minibar", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.data);
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                });
        } else {
            console.warn('No image selected');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-center">Upload Images</h2>
            <div className="mb-4 flex justify-center items-center">
                {selectedImage ?
                    <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-48 h-48 object-cover rounded-lg" />
                    :
                    <div className="p-8 border-4 border-dashed border-gray-300 rounded-lg bg-gray-200 text-center">
                        <h2 className="text-xl font-semibold mb-4">Image Upload</h2>
                        <label className="flex flex-col justify-center items-center">
                            <div className="cursor-pointer border-2 border-dotted h-36 w-36 border-gray-400 rounded-lg bg-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto text-gray-500 mt-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M7 4a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V4z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3H6a1 1 0 0 1-1-1V6zm10-2a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4h-7z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-500 mt-4">Choose a file or drag it here</p>
                                <input
                                    className="hidden"
                                    type="file"
                                    accept=".jpg,.png,.jpeg"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </label>
                    </div>
                }
            </div>
            <div className="mb-4 text-center">
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1} className='text-[20px] font-bold'>A</Radio>
                    <Radio value={2} className='text-[20px] font-bold'>B</Radio>
                    <Radio value={3} className='text-[20px] font-bold'>C</Radio>
                    <Radio value={4} className='text-[20px] font-bold'>D</Radio>
                </Radio.Group>
            </div>
            {loading ? (
                <div className="mt-4 flex items-center justify-center">
                    <ScaleLoader color="#2563eb" />
                    <span className="ml-2">Uploading...</span>
                </div>
            ) : (
                <button
                    onClick={handleUpload}
                    className={`block w-full bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 ${!selectedImage ? 'hidden' : ''}`}
                >
                    Upload Image
                </button>
            )}
        </div>
    )
}

export default Inventory;
