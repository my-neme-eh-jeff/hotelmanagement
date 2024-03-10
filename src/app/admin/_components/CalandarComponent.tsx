import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);
const myEventsList = [
  {
    id: 0,
    title: "Deluxe Suite - John Smith",
    start: dayjs("2024-03-12").toDate(),
    end: dayjs("2024-03-15").toDate(),
    roomName: "Deluxe Suite",
  },
  {
    id: 1,
    title: "Standard Room - Jane Doe",
    start: dayjs("2024-03-14").toDate(),
    end: dayjs("2024-03-16").toDate(),
    roomName: "Standard Room",
  },
];

const MyCalendar = (props: any) => (
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default MyCalendar;
