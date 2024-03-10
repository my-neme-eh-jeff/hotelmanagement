// import React from "react";
"use client";
import React,{ useState,useEffect } from "react"; // Import default styles
import { useRouter } from "next/navigation";
import { Checkbox } from 'antd';

const HomePage = () => {
  
  const router = useRouter();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };  

  return (
    <>
      <div className="mt-[20px] flex flex-col justify-center items-center">
        <div className="rounded-[10px] w-[95%] h-[220px] bg-[#002548] mb-4 flex justify-evenly items-center border bottom-1 px-[20px]">
          <div className="w-[100%] h-[100%]  flex flex-row justify-between items-center bg-opacity-50">
            <div className="flex flex-col justify-center items-center w-[48%] h-[60%] bg-[white] bg-opacity-20 text-white">
                <div className="text-[25px] font-bold mb-[10px]"> Rooms</div>
                <div className="text-[18px] font-md">421 234</div>
              
            </div>
            <div className="w-[47%] h-[60%] bg-[white] bg-opacity-20 overflow-y-scroll">
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Towel in 401</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Toilet in 201</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">staff lounge</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Checkbox</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Checkbox</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Checkbox</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Checkbox</Checkbox>
            <Checkbox onChange={onChange} className="text-[18px] font-md text-white">Checkbox</Checkbox>
            </div>
            
          </div>
          
        </div>
        <div className="flex mb-[20px] px-[10px] gap-x-[20px]">
          <div
            className="w-[50%] rounded-[20px] p-[10px] border-[1px] rounded-lg cursor-pointer"
            onClick={() => router.push("/staff/damaged")}
          >
            <img
              className="mb-[10px] rounded-[20px] h-[70%]"
              src="./assets/broken.jpg"
            ></img>
            <p className="w-full text-gray-600 text-center font-bold">
              Detect Damaged Items
            </p>
          </div>
          <div
            className="w-[50%] rounded-[20px] p-[10px] items-center border-[1px] rounded-lg cursor-pointer"
            onClick={() => router.push("/staff/inventory")}
          >
            <img
              className="mb-[10px] rounded-[20px] h-[70%]"
              src="./assets/minibar3.jpg"
            ></img>
            <p className="w-full text-gray-600 text-center font-bold">
              Inventory
            </p>
          </div>
        </div>
        <div className="p-[10px] mb-[10px] mx-[10px] gap-x-[10px] items-center flex rounded-[15px] border-[1px]">
          <img className="w-[60px] h-[60px] rounded-[50%]" src="./assets/room1.jpg" />
          <div>
            <p className="text-gray-600">
              Get an AI generated ideal image of a Dull, Messy Room.
            </p>
            <a
              onClick={() => {
                router.push("/staff/ideal");
              }}
              className="bold text-blue-500 font-bold"
            >
              Get Image &rarr;{" "}
            </a>
          </div>
        </div>
        <div className="p-[10px] w-full">
          <div className="flex py-[15px] rounded-[10px] border-[1px] justify-around">
            <div
              className="flex w-[33%] flex-col items-center"
              
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-[1px] border-gray-300">
                <img className="w-[40px]" src="assets/warning.png" />
              </div>
              <p className="font-bold text-gray-600">Report</p>
            </div>
            <div
              className="flex w-[33%] flex-col items-center"
             
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-[1px] border-gray-300">
                <img className="w-[40px]" src="assets/rice.png" />
              </div>
              <p className="font-bold text-gray-600">Alternate Food</p>
            </div>
            {/* <div className="flex w-[33%] flex-col items-center">
              <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-[1px] border-gray-300">
                <img className="w-[40px]" src="assets/vegetables.png" />
              </div>
              <p className="font-bold text-gray-600">Recommend</p>
            </div> */}
          </div>
        </div>
      
      </div>
    </>
  );
};

export default HomePage;
