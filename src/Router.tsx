import {createBrowserRouter} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />
  },
  {
    path: "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "/:coinId/price",
        element: <Price />
      },
      {
        path: "/:coinId/chart",
        element: <Chart />
      }
    ]
  }
])

export default router