"use client";
import { useState } from "react";
import { Button, Image, Select, Modal } from "antd";
import { Tooltip } from "@nextui-org/tooltip";

export default function SchedulingChecks() {
  const [floor, setFloor] = useState(1);
  const [rooms, setRooms] = useState(8);
  const [open, setOpen] = useState(false);
  const heightInREM = 24;
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const DoorComponent = ({ leftOrNot }: { leftOrNot: boolean }) => {
    return (
      <Tooltip
        placement={leftOrNot ? "left" : "right"}
        content={
          <div className="justify-center relative p-4 pt-0 overflow-hidden rounded-xl border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-cyan-300 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.7)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl dark:shadow-zinc-900 hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <div className="flex justify-center text-small font-semibold">
              Room 101
            </div>
            <div className="text-tiny">Last occupant: Jannat Singh</div>
            <div className="text-tiny">Last checkin date: 09/03/2024</div>
            <div className="text-tiny">Phone Number: 981383125</div>
            <Button onClick={showModal}>View More</Button>
          </div>
        }
      >
        <div className="flex w-[35px] h-[20px]">
          <div
            className={`flex-1 bg-[#964B00] w-[35px] h-[20px] relative border border-dashed`}
            style={{
              borderRadius: `${
                leftOrNot ? "4px 0px 0px 4px" : "0px 4px 4px 0px"
              }`,
            }}
          >
            <div
              className={`absolute ${
                leftOrNot
                  ? "right-1 top-2 transform -translate-y-1/2"
                  : "left-1 bottom-2 transform translate-y-1/2"
              }  w-[5px] h-[5px] bg-gray-400 rounded-full`}
            ></div>
          </div>
        </div>
      </Tooltip>
    );
  };
  const RoomDoors = ({ leftOrNot }: { leftOrNot: boolean }) => {
    return (
      <div className={`py-6 flex flex-col gap-y-6`}>
        {Array.from({ length: rooms }, (_, index) => (
          <div key={index}>
            <DoorComponent leftOrNot={leftOrNot} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-12 mb-6 gap-10">
        <Select
          className="w-80 !mx-auto justify-center"
          showSearch
          onChange={(value) => setFloor(value)}
          placeholder="Select Floor"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Floor 1",
            },
            {
              value: "2",
              label: "Floor 2",
            },
            {
              value: "3",
              label: "Floor 3",
            },
            {
              value: "4",
              label: "Floor 4",
            },
            {
              value: "5",
              label: "Floor 5",
            },
            {
              value: "6",
              label: "Floor 6",
            },
          ]}
        />
        <div className="flex flex-row justify-center h-96 justify-items-center">
          <div className="">
            <RoomDoors leftOrNot={true} />
          </div>
          <div className="w-36 border-2 border-solid border-indigo-600 rounded-xl text-center"></div>
          <div className="">
            <RoomDoors leftOrNot={false} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        title="Room 101"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <div className="mb-4 rounded-md flex justify-center place-items-center place-content-center">
          <Image
            width={300}
            className="rounded-md"
            alt="A bunch of pink and white flowers in a vase"
            src="https://images.unsplash.com/photo-1709891798937-fd431bd7e10b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <p>Captured at: 08/03/2024</p>
      </Modal>
    </>
  );
}
