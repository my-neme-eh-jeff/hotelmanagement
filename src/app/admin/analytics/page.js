import React from "react";

const Analytics = () => {
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
            className="max-h-[200px] overflow-y-auto"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          >
            {customerFeedback.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-[10px] border-b-[1px] pb-[5px] border-gray-300"
              >
                <div className="max-w-[80%]">
                  <p className="text-gray-500">{item.name}</p>
                  {/* give me code for ellipse if feedback is too long */}

                  <p className="text-gray-500 font-light truncate">
                    {item.feedback}
                  </p>
                </div>
                <p className="text-gray-500">{item.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
