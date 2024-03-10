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

        fetch("https://b437-35-203-130-99.ngrok-free.app/predictor2/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log("Done");
            console.log(result);
            setUrl(result.image_url);
            // console.log(result.data)
           
            
        })
        .catch((error) => console.error(error));

        const formData1 = new FormData();
        formData1.append('image', file);

        const requestOptions1 = {
            method: "POST",
            body: formData1,
            redirect: "follow",
        };
       
        fetch("https://hackniche-allstackers.onrender.com/damaged", requestOptions1)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.data[1].isAnythingBroken)
                setDamagedData(result.data);
            })
            .catch((error) => console.error(error));
        
       
    };

    return (
        <div className='mt-[30px]'>
            <div className='flex justify-center font-bold items-center mb-[30px] text-[30px]'>Detect Damage</div>
            <Timeline mode="alternate" 
            items={[
                {
                    children: (
                        <>
                            {selectedImage ?
                                <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-[160px] h-[200px]" />
                                :
                                <div className="p-4 border-[3px] border-dotted border-gray-300 rounded-lg bg-gray-100 text-center flex flex-col justify-center items-center ">
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
                    children: url !== "" ? (
                        <>
                             <img src={url} alt="image" className="w-[160px] h-[150px] ml-[13px]" />
                        </>
                    ) : null,
                    color: 'green',
                },
                {
                    children: data.length !== 0 ? (
                        <>
                            <div className='p-3 border boder-gray rounded-[15px]  text-left'>
                                <div className='flex flex-wrap mb-[10px]'>
                                    {data[0].items.map((item, index) => (
                                        <div key={index} className='h-[30px] text-[#5c9af1] px-1 text-[15px] font-bold rounded-[2px] ml-[5px] mb-[5px] border border-[#5c9af1]'>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                {data[1].isAnythingBroken == "yes" ? (<>
                                    <div className='py-[5px] text-[15px] font-bold'>Brkoen Object:  {data[2].brokenObjects[0]}</div>
                                    <div className='py-[5px] text-[15px] font-bold'>Cost of Replacement for {data[2].brokenObjects[0]} is {data[3].cost}</div>
                                </>) : (<>
                                    <div className='py-[5px] text-[15px] font-bold'>Nothing is Broken</div>
                                </>)}

                            </div>
                        </>
                    ) : null,
                    color: 'green',
                },
                
            ]} />
        </div>
    );
};

export default Damaged;
