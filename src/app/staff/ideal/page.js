"use client";
import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import {Radio, Timeline } from 'antd';
import { Checkbox } from 'antd';

const Damaged = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [url,setUrl] = useState("")
    const [data, setDamagedData] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        const formData = new FormData();
        formData.append('file', file);

        const requestOptions = {
            method: "POST",
            body: formData,
            redirect: "follow",
        };

        fetch("https://5af4-34-173-238-94.ngrok-free.app/predictor/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log("Done");
            console.log(result);
            setUrl(result.image_url);
            // console.log(result.data)
           
            
        })
        .catch((error) => console.error(error));

        
        
       
    };

    return (
        <div className='mt-[30px] '>
            <div className='flex justify-center font-bold items-center mb-[30px] text-[30px]'>IDEAL IMAGE</div>
            <Timeline mode="left"
            items={[
                {
                    label: 'Uploaded Image',
                    children: (
                        <>
                            {selectedImage ?
                                <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-[160px] h-[200px]" />
                                :
                                <div className="p-4 border-[3px] border-dotted border-gray-300 rounded-lg bg-gray-100 text-center flex flex-col justify-center items-center w-[160px] ">
                                    <h2 className="text-l font-semibold ">Image Upload</h2>
                                    <label className="flex flex-col justify-center items-center mt-4 ">
                                        <div className="cursor-pointer border-2 border-dotted h-[70%] w-[100%] border-gray-400 px-2 rounded-lg bg-white py-[30px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-10 w-10 mx-auto text-gray-500"
                                                height="20"
                                                fill="gray"
                                                viewBox="0 -960 960 960"
                                                stroke="currentColor"
                                            >
                                                <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                                            </svg>
                                            <p className="text-gray-500 mt-2">
                                                Choose a file or drag it here
                                            </p>
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
                        </>
                    ),
                },
                {
                    label: 'Ideal Image',
                    children: url !== "" ? (
                        <>
                             <img src={url} alt="image" className="w-[160px] h-[200px] mr-[13px] mt-[10px]" />
                        </>
                    ) : null,
                    color: 'green',
                },
               
                
            ]} />
        </div>
    );
};

export default Damaged;
