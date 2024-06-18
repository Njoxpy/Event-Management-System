import { useLoaderData, useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const events = useLoaderData();
  return (
    <div className="p-8 border-l-orange-600 border-l-4 bg-darkGray">
      <h2>
        <span className="font-bold">Event Name:</span> {events.EventName}
      </h2>
      <small>Event Date: {events.EventDate}</small>
      <p>
        <span className="font-bold">Event Description:</span>{" "}
        <span>{events.Description}</span>
      </p>
      <a href="#">
        <span className="font-bold">Link To The Event: </span>
        <span className="text-blue-700 font-bold">{events.Link}</span>
      </a>
      <p>
        <span className="font-bold">Location:</span> {events.Location}
      </p>
      <p>
        <span className="font-bold">Event Organizer Contact:</span>{" "}
        {events.Contact}
      </p>

      <form action="">
        <button className="bg-eventManagement-orange p-2 rounded text-eventManagement-white font-bold mt-4 hover:to-eventManagement-textHover">
          Register
        </button>
      </form>
    </div>
  );
}

export const eventLoaderDetails = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:3003/events/${id}`);

  if (!response.ok) {
    throw Error("Could not fetch event");
  }
  return response.json();
};
