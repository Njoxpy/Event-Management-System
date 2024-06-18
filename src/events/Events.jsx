import React from "react";
import { useLoaderData, Link, NavLink } from "react-router-dom";

export default function Events() {
  const events = useLoaderData();
  return (
    <div className="p-8">
      <h1 className="m-2 font-bold">Explore List Of Upcoming Events</h1>
      <div>
        {events.map((eventi) => (
          <div key={eventi.id}>
            <h2>{eventi.EventName}</h2>
            <h1>
              <small>{eventi.EventDate}</small>
            </h1>
            <p>{eventi.Description}</p>
            <NavLink to={eventi.id.toString()} className="text-blue-700">
              View More{" "}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
