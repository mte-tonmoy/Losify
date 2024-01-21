import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Form,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contct from "./Components/Contct.jsx";
import Header from "./Components/Header.jsx";
import SignUp from "./Components/SignUp.jsx";
import Login from "./Components/Login.jsx";
import Item from "./Components/Item.jsx";
import Upload_Item from "./Components/Upload.jsx";
import Upload from "./Components/Upload.jsx";
import AuthProvider from "../Provider/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Entry from "./Components/Entry.jsx";
import Manage from "./Components/ManageDataTable.jsx";
import UpdateItem from "./Components/UpdateItem.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Reqest from "./Components/Reqest.jsx";
import RequestDetails from "./Components/RequestDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "contact",
        element: <Contct />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "request",
        element: <Reqest />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/item",
        element: <Item />,
      },
      {
        path: "/entry/:id",
        element: <Entry />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/requestdetails/:id",
        element: <RequestDetails />,
      },

      {
        path: "/updateitem/:id",
        element: <UpdateItem />,
      },
      {
        path: "upload",
        element: (
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        ),
      },
      
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
