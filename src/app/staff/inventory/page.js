"use client";
import React, { useState } from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Tooltip } from 'antd';
import { Modal } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { ScaleLoader } from 'react-spinners';
const axios = require('axios');

const Inventory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [miniBar, setMiniBar] = useState([]);
    const [towels, setTowel] = useState(0);
    const [Toilet, setToilet] = useState([]);



    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    const plainOptions = ['Coak', 'Bear', 'Pepsi', 'Waffers'];
    const toiletItems = ['Shampoo', 'Soap', 'Brush'];
    const options = [
        {
            label: 'Coak',
            value: 'Coak',
        },
        {
            label: 'Bear',
            value: 'Bear',
        },
        {
            label: 'Pepsi',
            value: 'Pepsi',
        },
        {
            label: 'Waffers',
            value: 'Waffers',
        },
    ];

    const items = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    //

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };



    const handleUpload = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            // setLoading(true);

            // Remove or update the Content-Type header
            const requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow"
            };
            fetch("https://hackniche-allstackers.onrender.com/minibar", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.data)
                    setMiniBar(result.data)
                })
                .catch((error) => console.error(error));
        } else {
            console.warn('No image selected');
        }
    };
    const handleUpload1 = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            // setLoading(true);

            // Remove or update the Content-Type header
            const requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow"
            };
            fetch("https://hackniche-allstackers.onrender.com/towels", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.data[0].Towels)
                    setTowel(result.data[0].Towels)
                })
                .catch((error) => console.error(error));
        } else {
            console.warn('No image selected');
        }
    };

    const handleUpload2 = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            // setLoading(true);

            // Remove or update the Content-Type header
            const requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow"
            };
            fetch("https://hackniche-allstackers.onrender.com/toilet", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setToilet(result.data)
                })
                .catch((error) => console.error(error));
        } else {
            console.warn('No image selected');
        }
    };

    // For modal 1
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // For modal 2

    const showModal1 = () => {
        setIsModal1Open(true);
    };
    const handleOk1 = () => {
        setIsModal1Open(false);
    };
    const handleCancel1 = () => {
        setIsModal1Open(false);
    };

    // For modal 3

    const showModal2 = () => {
        setIsModal2Open(true);
    };
    const handleOk2 = () => {
        setIsModal2Open(false);
    };
    const handleCancel2 = () => {
        setIsModal2Open(false);
    };



    return (
        <div className='px-[30px] py-[30px] text-[25px] font-bold'>
            <div className='flex justify-center items-center mb-[30px]'>Inventory</div>
            <div className='w-[100%] mb-[15px]'>
                <Space wrap>
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                Floor
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>

                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                Room
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Space>
            </div>
            <div className='flex justify-center items-center flex-col '>
                <div className='w-[100%] border border-gray rounded-[15px] h-[170px] mb-[20px] cursor-pointer overflow-hidden' onClick={showModal} >

                    <img
                        className="h-[100%] w-[100%]"
                        src="../assets/minibar1.jpeg"
                    ></img>
                </div>
                <div className='flex justify-between w-[100%]'>
                    <div className='border border-gray rounded-[15px] w-[45%] h-[120px] overflow-hidden' onClick={showModal1}>
                        <img
                            className="h-[100%] w-[100%]"
                            src="../assets/towel.jpg"
                        ></img>
                    </div>
                    <div className='border border-gray rounded-[15px] w-[45%] h-[120px] overflow-hidden' onClick={showModal2}>
                        <img
                            className="h-[100%] w-[100%]"
                            src="../assets/toilet.jpg"
                        ></img>
                    </div>
                </div>
            </div>
            <Modal title="MiniBar Status" okButtonProps={{ style: { background: "#5c9af1" } }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex flex-col items-center">

                    {selectedImage ?
                        <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-[300px] h-[300px]" />
                        :
                        <div className="p-8 border-[3px] border-dotted border-gray-300 rounded-lg bg-gray-100 text-center flex flex-col justify-center items-center ">
                            <h2 className="text-xl font-semibold ">Image Upload</h2>
                            <label className="flex flex-col justify-center items-center mt-4 ">
                                <div className="cursor-pointer border-2 border-dotted h-[100%] w-[100%] border-gray-400 px-4 rounded-lg bg-white py-[30px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 mx-auto text-gray-500"
                                        height="24"
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
                                        className=" hidden"
                                        type="file"
                                        accept=".jpg,.png,.jpeg"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </label>
                        </div>
                    }
                    {/* <p>{image?.name}</p> */}
                    {loading ? (
                        <div className="mt-4">
                            <ScaleLoader color="#2563eb" />
                            Hold on!
                        </div>
                    ) : (
                        <button
                        className="my-2 py-2 px-6 bg-[#5c9af1] text-white rounded-[10px]"
                            onClick={handleUpload}
                        >
                            Upload Image
                        </button>
                    )}
                </div>
                <div className='flex flex-col w-[100%] h-content '>
                    {miniBar.length !== 0 && (
                        <div className='flex flex-wrap'>
                            {miniBar.map((item, index) => (
                                <div key={index} className='h-[35px] text-[#5c9af1] px-4 py-1 text-[18px] font-bold rounded-[4px] ml-[5px] mb-[10px] border border-[#5c9af1]'>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Modal>
            <Modal title="Towels" okButtonProps={{ style: { background: "#5c9af1" } }} open={isModal1Open} onOk={handleOk1} onCancel={handleCancel1}>
                {/* <Checkbox.Group options={plainOptions} onChange={onChange} />
                <br />
                <br /> */}
                <div className="flex flex-col items-center">

                    {selectedImage ?
                        <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-[300px] h-[300px]" />
                        :
                        <div className="p-8 border-[3px] border-dotted border-gray-300 rounded-lg bg-gray-100 text-center flex flex-col justify-center items-center ">
                            <h2 className="text-xl font-semibold ">Image Upload</h2>
                            <label className="flex flex-col justify-center items-center mt-4 ">
                                <div className="cursor-pointer border-2 border-dotted h-[100%] w-[100%] border-gray-400 px-4 rounded-lg bg-white py-[30px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 mx-auto text-gray-500"
                                        height="24"
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
                                        className=" hidden"
                                        type="file"
                                        accept=".jpg,.png,.jpeg"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </label>
                        </div>
                    }
                    {/* <p>{image?.name}</p> */}
                    {loading ? (
                        <div className="mt-4">
                            <ScaleLoader color="#2563eb" />
                            Hold on!
                        </div>
                    ) : (
                        <button
                        className="my-2 py-2 px-6 bg-[#5c9af1] text-white rounded-[10px]"
                            onClick={handleUpload1}
                        >
                            Upload Image
                        </button>
                    )}
                </div>

                <div className='text-[20px] font-bold color-[#5c9af1]'>TOWELS : {towels}</div>
            </Modal>
            <Modal title="Toilet Accessories" okButtonProps={{ style: { background: "#5c9af1" } }} open={isModal2Open} onOk={handleOk2} onCancel={handleCancel2}>
                {/* <Checkbox.Group options={toiletItems} onChange={onChange} />
                <br />
                <br /> */}
                <div className="flex flex-col items-center">

                    {selectedImage ?
                        <img src={URL.createObjectURL(selectedImage)} alt="image" className="w-[300px] h-[300px]" />
                        :
                        <div className="p-8 border-[3px] border-dotted border-gray-300 rounded-lg bg-gray-100 text-center flex flex-col justify-center items-center ">
                            <h2 className="text-xl font-semibold ">Image Upload</h2>
                            <label className="flex flex-col justify-center items-center mt-4 ">
                                <div className="cursor-pointer border-2 border-dotted h-[100%] w-[100%] border-gray-400 px-4 rounded-lg bg-white py-[30px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 mx-auto text-gray-500"
                                        height="24"
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
                                        className=" hidden"
                                        type="file"
                                        accept=".jpg,.png,.jpeg"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </label>
                        </div>
                    }
                    {/* <p>{image?.name}</p> */}
                    {loading ? (
                        <div className="mt-4">
                            <ScaleLoader color="#2563eb" />
                            Hold on!
                        </div>
                    ) : (
                        <button
                            className="my-2 py-2 px-6 bg-[#5c9af1] text-white rounded-[10px]"
                            onClick={handleUpload2}
                        >
                            Upload Image
                        </button>
                    )}
                </div>

            </Modal>
        </div>
    )
}

export default Inventory