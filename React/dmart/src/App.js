import "./App.css";
import { useState } from "react";
import "./Component/ClassBased.css";

import Electronics from "./Component/InventoryDashboard/Electronics.js";
import Groceries from "./Component/InventoryDashboard/Groceries.js";
import ListItems from "./Component/InventoryDashboard/ListItems.js";

import MonthlySalesReport from "./Component/SalesDashboard/MonthlySalesReport.js";
import Home from "./Component/Home.js";
import PageNotFound from "./Component/PageNotFound.js";

import ComputorAccessories from "./Component/InventoryDashboard/ComputorAccessories";
import Device from "./Component/Device.js";
import DeviceDetails from "./Component/DeviceDetails.js";

import { Route, Routes, Link, Navigate } from "react-router-dom";
import Input from "./Component/React-Redux/Input.js";
function App() {
  let [state, setState] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" />
        </div>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/device" className="nav-link">
          Device
        </Link>
        <Link to="/groceries" className="nav-link">
          Groceries
        </Link>
        <Link to="/list-items" className="nav-link">
          ListItems
        </Link>
        <Link to="/monthly-sales-report" className="nav-link">
          Monthly Sales Report
        </Link>
        <Link to="/input" className="nav-link">
          React Redux
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/device" element={<Device />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route
            path="computor-accessories"
            element={<ComputorAccessories />}
          />
        </Route>

        <Route path="/groceries" element={<Groceries />} />
        <Route path="/list-items" element={<ListItems />} />
        <Route path="/monthly-sales-report" element={<MonthlySalesReport />} />
        <Route path="/device-details/:id" element={<DeviceDetails />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
