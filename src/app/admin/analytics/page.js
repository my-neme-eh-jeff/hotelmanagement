"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Rate } from "antd";
import { ScaleLoader } from "react-spinners";
import { Tooltip } from "@nextui-org/tooltip";
import "./styles.css";

const Analytics = () => {
  const [reviewData, setReviewData] = useState([]);
  const [loadingForReviewData, setLoadingForReviewData] = useState();
  useEffect(() => {
    const getReviewData = async () => {
      try {
        setLoadingForReviewData(true);
        const { data } = await axios.get("http://localhost:3002/reviews");
        //reverse this data
        data.reverse();
        console.log(data)
        setReviewData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingForReviewData(false);
      }
    };
    getReviewData();
  }, []);
  const overview = [
    {
      title: "Today's",
      subTitle: "Check-in",
      value: 23,
    },
    {
      title: "Today's",
      subTitle: "Check-out",
      value: 13,
    },
    {
      title: "Total",
      subTitle: "In hotel",
      value: 60,
    },
    {
      title: "Total",
      subTitle: "Available rooms",
      value: 10,
    },
    {
      title: "Total",
      subTitle: "Occupied rooms",
      value: 90,
    },
  ];
  const roomStatus = {
    occupied: {
      value: 140,
      details: [
        {
          title: "Clean",
          value: 90,
        },
        {
          title: "Dirty",
          value: 4,
        },
        {
          title: "Inspected",
          value: 60,
        },
        {
          title: "Maintenance",
          value: 10,
        },
      ],
    },
    available: {
      value: 20,
      details: [
        {
          title: "Clean",
          value: 90,
        },
        {
          title: "Dirty",
          value: 4,
        },
        {
          title: "Inspected",
          value: 60,
        },
        {
          title: "Maintenance",
          value: 10,
        },
      ],
    },
  };
  const customerFeedback = [
    {
      id: "A101",
      name: "John Doe",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "A102",
      name: "Mark Zuckerberg",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "A103",
      name: "Bill Gates",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "A104",
      name: "Elon Musk",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "A104",
      name: "Elon Musk",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "A104",
      name: "Elon Musk",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-lg py-[15px] px-[20px] w-full">
        <h1 className="text-xl text-gray-600 mb-[20px]">Overview</h1>
        <div className="flex justify-between ">
          {overview.map((item, index) => (
            <div key={index}>
              <h1 className="font-light">{item.title}</h1>
              <div className="flex items-end gap-x-[15px]">
                <p className="text-[17px]">{item.subTitle}</p>
                <p className="font-bold text-blue-500 text-2xl mt-[-5px]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-x-6 mt-6">
        <div className="bg-white rounded-lg py-[15px] px-[20px] w-[60%]">
          <h1 className="text-xl text-gray-600 mb-[20px]">Room Status</h1>
          <div className="flex justify-between">
            <div className="w-[200px]">
              <div className="flex text-gray-500 mb-[5px] justify-between font-bold">
                <p>Occupied Rooms</p>
                <p>{roomStatus.occupied.value}</p>
              </div>
              {roomStatus.occupied.details.map((item, index) => (
                <div
                  key={index}
                  className="flex mb-[2px] text-gray-500 justify-between"
                >
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <div className="w-[200px]">
              <div className="flex text-gray-500 mb-[5px] justify-between font-bold">
                <p>Available Rooms</p>
                <p>{roomStatus.occupied.value}</p>
              </div>
              {roomStatus.available.details.map((item, index) => (
                <div
                  key={index}
                  className="flex mb-[2px] text-gray-500 justify-between"
                >
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[15px] px-[20px] w-[40%]">
          <h1 className="text-xl text-gray-600 mb-[20px]">Floor Status</h1>
          <div>
            <em>Here Goes the Graph</em>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6 mt-6">
        <div className="bg-white rounded-lg py-[15px] px-[20px] w-[60%]">
          <h1 className="text-xl text-gray-600 mb-[20px]">
            Occupency Statistics
          </h1>
          <div>
            <em>Here Goes the Graph</em>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[15px] px-[20px] w-[40%]">
          <h1 className="text-xl text-gray-600 mb-[20px]">Customer Feedback</h1>
          <div
            className="max-h-[200px] overflow-y-auto">
            {loadingForReviewData ? (
              <div className="flex justify-center items-center ">
                <ScaleLoader color="#2563eb" />
              </div>
            ) : (
              reviewData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-[10px] border-b-[1px] pb-[5px] border-gray-300"
                >
                  <div className="max-w-[80%]">
                    <Rate
                      className="place-items-center place-content-center mx-auto"
                      disabled
                      defaultValue={item.rating}
                    />
                    <p className="text-gray-500">
                      {item.nameofPerson} {" (Room" + item.roomNumber + ") "}
                    </p>
                    <p className="text-gray-500 font-light truncate">
                      {item.review}
                    </p>
                  </div>
                  <Tooltip
                    content={
                      <div className="justify-center relative p-4 pt-2 overflow-hidden rounded-xl border text-blue-500 border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-stone-100 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.7)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl dark:shadow-zinc-900 hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                        <div className="flex justify-center text-small font-semibold">
                          Staff Assigned: {item.staffName}
                        </div>
                        <div className="text-tiny">
                          This review was generated on 10th February, 2024
                        </div>
                      </div>
                    }
                  >
                    <p className="text-gray-500 truncate inline">
                      <p className="underline inline">Read More</p>
                    </p>
                  </Tooltip>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
