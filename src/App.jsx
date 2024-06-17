import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
import EventLayout from "./layout/EventsLayout"

// pages
import NotFound from "./pages/NotFound";
import Home from "./home/Home";
import EventDetails from "./events/EventDetails";
import Event from "./events/Events";
import Create from "./auth/Create"
import Dashboard from "./pages/Dashboard"
import Profile from "./user/Profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="events" element={<EventLayout />}>
        <Route index element={<Event />}></Route>
        <Route path=":id" element={<EventDetails />}></Route>
      </Route>
      <Route path="create" element={<Create />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
