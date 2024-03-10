"use client";
import { useEffect, useState } from "react";
import { Button, Image, Select, Modal } from "antd";
import { Tooltip } from "@nextui-org/tooltip";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

export default function SchedulingChecks() {
  const [floor, setFloor] = useState(1);
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = useState(false);
  const [presentRoom, setPresentRoom] = useState();
  const [dataFromApi, setDataFromApi] = useState();
  const [floorOptions, setFloorOptions] = useState([]); // Initialize state to hold floor options
  const [loading, setLoading] = useState(true);
  const [assignedStaff, setAssignedStaff] = useState();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://loc6.pythonanywhere.com/inventory/room/"
        );
        const floors = Array.from(
          new Set(data.map((item: any) => item.floor))
        ).map((floor) => ({
          value: floor.toString(),
          label: `Floor ${floor}`,
        }));
        setFloorOptions(floors);
        setDataFromApi(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const getAssignedStaff = async (roomId: number) => {
    const { data } = await axios.get(
      `https://loc6.pythonanywhere.com/inventory/staff/${roomId}`
    );
    setAssignedStaff({ name: data.name, staffType: data.staff_type });
    console.log(data);
  };
  const setCurrentRoom = async (id: number) => {
    await getAssignedStaff(id);
    setPresentRoom((prev) => rooms.filter((room) => room.id === id)[0]);
    showModal();
  };
  const DoorComponent = ({
    leftOrNot,
    room,
  }: {
    leftOrNot: boolean;
    room: any;
  }) => {
    return (
      <Tooltip
        placement={leftOrNot ? "left" : "right"}
        content={
          <div className="justify-center relative p-4 pt-2 overflow-hidden rounded-xl border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-cyan-300 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.7)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl dark:shadow-zinc-900 hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <div className="flex justify-center text-small font-semibold">
              Room {room.id}
            </div>
            <div className="text-tiny">
              {room.room_details.ocuupied ? "Current " : "Previous "}occupant:{" "}
              {room.room_details.occupant}
            </div>
            <div className="text-tiny">
              Last checkin date: {room.room_details["checkin date"]}
            </div>
            <div className="text-tiny">
              Phone Number: {room.room_details.phonenumber}
            </div>
            <Button
              onClick={() => {
                setCurrentRoom(room.id);
                console.log(presentRoom);
              }}
            >
              View More
            </Button>
          </div>
        }
      >
        <div className="flex w-[35px] h-[20px]">
          <div
            className={`flex-1 bg-[#964B00] w-[35px] h-[20px] relative ${
              room.room_details.ocuupied
                ? "border-green-400 border-dashed border-2"
                : "border-"
            }`}
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
  const handlingFloorChange = (value) => {
    setFloor(parseInt(value));
    const roomsOnFloor = dataFromApi.filter(
      (room) => room.floor === parseInt(value)
    );
    setRooms(roomsOnFloor);
    console.log(roomsOnFloor);
  };

  const RoomDoors = ({ leftOrNot }) => {
    const minGap = 6;
    const maxGap = 24;
    const dynamicGap = Math.max(minGap, maxGap - rooms.length);
    return (
      <div
        className={`py-10 flex flex-col align-middle`}
        style={{ gap: `${dynamicGap}px` }} // Apply dynamic gap here
      >
        {rooms.length > 1 &&
          rooms.map((room, index) => (
            <div key={index}>
              <DoorComponent leftOrNot={leftOrNot} room={room} />
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <ScaleLoader color="#2563eb" />
        </div>
      ) : (
        <div className="flex flex-col justify-center mt-12 mb-6 gap-10">
          {!loading && (
            <Select
              className="w-80 !mx-auto justify-center"
              showSearch
              onChange={(value) => handlingFloorChange(value)}
              placeholder="Select Floor"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={floorOptions}
            />
          )}
          <div className="flex flex-row justify-center h-96 justify-items-center">
            <div>
              <RoomDoors leftOrNot={true} />
            </div>
            <div className="w-36 border-2 border-solid border-indigo-600 rounded-xl text-center"></div>
            <div>
              <RoomDoors leftOrNot={false} />
            </div>
          </div>
        </div>
      )}
      <Modal
        open={open}
        title={`Room Details`}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Image.PreviewGroup>
          {presentRoom &&
            Object.values(presentRoom.room_details["latest image"]).map(
              (imgUrl, index) => (
                <Image
                  key={index}
                  src={imgUrl}
                  alt={`Room Image ${index + 1}`}
                  style={{ width: "100%", marginBottom: 8 }}
                />
              )
            )}
        </Image.PreviewGroup>
        {presentRoom && <p>Captured at: 10/03/2024</p>}
        {"Assigned staff: " +
          assignedStaff?.name +
          ", " +
          assignedStaff?.staffType}
      </Modal>
    </>
  );
}
