import { roomsData } from "../data/roomsData";
import RoomRow from "./RoomRow";

function AvailableRooms() {
  return (
    <section className="mt-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Available rooms
      </h3>

      <div className="space-y-4">
        {roomsData.map((room) => (
          <RoomRow key={room.id} {...room} />
        ))}
      </div>
    </section>
  );
}

export default AvailableRooms;
