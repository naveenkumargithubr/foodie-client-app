import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../ClientLayout/ClientLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import CartPage from "../pages/Shop/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        ),
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
