import { Outlet } from "react-router-dom";

export default function EventsLayout() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
}
