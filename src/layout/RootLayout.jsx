import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div className="p-8 bg-eventManagement-lightGray text-eventManagement-darkGray">
        {" "}
        <h1 className="text-2xl font-bold text-yellow-500 text-center">Event Management</h1>
        <nav className="sm:text-sm text-center mt-2">
          <h2>
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="cursor-pointer hidden"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"
              />
            </svg>
          </h2>
          <NavLink
            to="/"
            className="active:text-eventManagement-orange focus:text-eventManagement-orange hover:text-eventManagement-accent px-4 py-2 text-xl font-semibold hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            to="events"
            className="active:text-eventManagement-orange focus:text-eventManagement-orange hover:text-eventManagement-accent px-4 py-2 text-xl font-semibold hover:underline"
          >
            Events
          </NavLink>
          <NavLink
            to="create"
            className="active:text-eventManagement-orange focus:text-eventManagement-orange hover:text-eventManagement-accent px-4 py-2 text-xl font-semibold hover:underline"
          >
            Create Event
          </NavLink>
          <NavLink
            to="dashboard"
            className="active:text-eventManagement-orange focus:text-eventManagement-orange hover:text-eventManagement-accent px-4 py-2 text-xl font-semibold hover:underline"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="profile"
            className="active:text-eventManagement-orange focus:text-eventManagement-orange hover:text-eventManagement-accent px-4 py-2 text-xl font-semibold hover:underline"
          >
            Profile
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

/*
Colors
- Background colors
- text colors
- hover, focus and active colors suggestion

Margin, padding
- Horizontal padding px-4 , vertical padding py-2

Font Size
- Main navigation bar: 16px to 18px
- Dropdown Menus: Font Size: 14px to 16px
- Breadcrumb Navigation:Font Size: 14px
- Sidebar Navigation (if applicable):Font Size: 14px to 16px

- Navlinks should be text-xl while font should be semibold

Logo
- text-2xl font-bold text-yellow-500
 */
