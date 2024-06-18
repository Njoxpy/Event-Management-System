import { NavLink, useRouteError } from "react-router-dom";

export default function EventsError() {
  const error = useRouteError();
  return (
    <div className="p-8">
      <h1 className="font-bold">Error</h1>
      <p>{error.message}</p>
      <p>The Event You are Lokking For Was Not Found</p>
      <NavLink to="/" className="text-blue-700 underline font-semibold">
        Back to Homepage
      </NavLink>
    </div>
  );
}
