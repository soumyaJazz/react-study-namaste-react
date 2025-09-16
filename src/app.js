import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body1";
import ErrorPage from "./components/ErrorPage";
import { About } from "./components/About";
import ContactUs from "./components/ContactUs";
import RestraurantMenuList from "./components/RestraurantMenuList";
import useIsInternetOnline from "./utils/useIsInternetOnline";
import ShimmerCard from "./components/ShimmerCard";

const Grocery = lazy(() => import("./components/grocery/grocery"));

// app layout
const AppLayoutComponent = () => {
  const isInternetOnline = useIsInternetOnline();
  if (!isInternetOnline) {
    return <p>Looks like you are offline</p>;
  }
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/menu/:restName",
        element: <RestraurantMenuList />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
