import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { registerLicense } from "@syncfusion/ej2-base";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS31Sd0FmXnpXd3BcTg==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEZiWHtbd3FcQWZYWQ==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dgWH5adXNQT2dbWUw=;ODQ5OTA0QDMyMzAyZTM0MmUzMGRLY3RrUXZUK0QrazJEUGczK0RCNWcwZFArM0tYK0JtQ0RqSDVTa2huc0U9;ODQ5OTA1QDMyMzAyZTM0MmUzMEJ2M2JBYnNLWkZSM1dhQTN6VkNrUDFrSG52U2ttTUFGRDVxVll1NDA2ejQ9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhWn5fdHFSQ2lUVEZ+;ODQ5OTA3QDMyMzAyZTM0MmUzME5QSk1ISDhVam9Wd3I1ZlhOR0dCZlNFMVozWm5hamF6cFJRdjB4eE1pcUU9;ODQ5OTA4QDMyMzAyZTM0MmUzMEkxZHZGNDNpdGd1bzN1VmZ0aFRyMk4wMkZ6LzJFeUtyLzh0aVpjem1zUGM9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dgWH5adXNQT2leVEw=;ODQ5OTEwQDMyMzAyZTM0MmUzMGM2Mzd3NU1INzFaY2hlQVJldWJYS0VqMS9VZ2tjVDBaYSthS0tJbW1uREE9;ODQ5OTExQDMyMzAyZTM0MmUzMEVVeE1vNHR4a2dFcjhCT1pIaGRJM1UydGc4clMrNWxmOHpaR1JOUHJDR289;ODQ5OTEyQDMyMzAyZTM0MmUzME5QSk1ISDhVam9Wd3I1ZlhOR0dCZlNFMVozWm5hamF6cFJRdjB4eE1pcUU9"
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
