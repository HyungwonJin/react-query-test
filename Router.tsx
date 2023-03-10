import {createBrowserRouter} from "react-router-dom";
import Coins from "./src/routes/Coins";
import Coin from "./src/routes/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />
  },
  {
    path: "/:coinId",
    element: <Coin />
  }
])

export default router