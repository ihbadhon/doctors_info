import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AllDoctors from "./components/AllDoctors.jsx";
import root from "./components/root.jsx";
import SingleDoctors from "./components/SingleDoctors.jsx";
import Blogs from "./pages/Blogs.jsx";
import Booked from "./pages/Booked.jsx";
import Contacts from "./pages/Contacts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/doctors.json");
          // console.log(res);
          return res;
        },
        Component: () => {
          return (
            <Suspense fallback={<p>...loading</p>}>
              <AllDoctors></AllDoctors>
            </Suspense>
          );
        },
      },

      {
        path: "booked",
        Component: Booked,
      },

      {
        path: "singleDoctor",
        Component: SingleDoctors,
      },

      {
        path: "blogs",
        Component: Blogs,
      },

      {
        path: "contacts",
        Component: Contacts,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
