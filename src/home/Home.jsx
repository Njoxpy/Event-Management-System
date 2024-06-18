import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function home() {
  const events = useLoaderData();
  return (
    <div>
      <div className="p-8">
        <h1 className="m-2 font-bold">Explore List Of Upcoming Events</h1>
        <div>
          {events.map((eventi) => (
            <div
              key={eventi.id}
              className="border-eventManagement-darkGray border-l-4 p-2"
            >
              <h2 className="font-semibold">{eventi.EventName}</h2>
              <h1>
                <small className="text-eventManagement-darkGray">
                  {eventi.EventDate}
                </small>
              </h1>
              <p className="text-eventManagement-darkGray">
                {eventi.Description}
              </p>
              <Link to="/events" className="text-blue-700">
                View More
              </Link>

              <hr className="p-2 m-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const eventLoader = async () => {
  const response = await fetch("http://localhost:3003/events");

  if (!response.ok) {
    throw Error ("Could not fetch event")
  }
  return response.json();
};
/**
 * flex: Applies flexbox layout to the container.
justify-between: Distributes space between navigation items to spread them out.
items-center: Aligns items vertically in the center.
 */
