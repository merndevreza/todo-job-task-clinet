
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
         path:"/",
         element:<Home></Home>
      },
      {
         path:"/login",
         element:<Login></Login>
      },
      {
         path:"/register",
         element:<Register></Register>
      },
    ]
  },
]);

export default router;
