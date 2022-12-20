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
  "Mgo+DSMBaFt/QHNqVVhmXVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS39adkZgUHxfdnNTRw==;Mgo+DSMBPh8sVXJ0S0V+XE9Cd1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdERqWXxdeXdUQGldUA==;ORg4AjUWIQA/Gnt2VVhjQlFacF5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diUH9dc31WR2dcUkU=;NzgxNTU0QDMyMzAyZTMzMmUzMFYrQ1ZFQThVRjI3MUlrb2hsSWlTaDFSNVB2ZVB1dk9SYXAvNjhQdmVBQ1E9;NzgxNTU1QDMyMzAyZTMzMmUzMGhlVUZlbXI2Y253M3FENkJFQW12S2NscWVNdHV5am9scXBLN20wUk1TQlk9;NRAiBiAaIQQuGjN/V0Z+X09EaFlDVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhWHZec3dcRWFbV0J3;NzgxNTU3QDMyMzAyZTMzMmUzMGd5bVdySlovUUtvUlR4MllnQU5LaS8vUDN6YTZOTENqN2pIUjJvSzl5QjQ9;NzgxNTU4QDMyMzAyZTMzMmUzMFdPeWlYaTB3TEJSVGNtOE5mcDlWemNSSytUSVNMUGIxcGJqVkhBNFVTc1k9;Mgo+DSMBMAY9C3t2VVhjQlFacF5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diUH9dc31WR2hfVUU=;NzgxNTYwQDMyMzAyZTMzMmUzME1LYk1JYzZEdHBkZkVxZ2VLZUVBVjNkUENOWHpPL3hmY2R4d3QwZS8zOE09;NzgxNTYxQDMyMzAyZTMzMmUzMGp6c1ZVZHF5RmViOUdmWDArVHZXdFVUMXk1cC9iMWUvLzRDcTBXWGQ5SUk9;NzgxNTYyQDMyMzAyZTMzMmUzMGd5bVdySlovUUtvUlR4MllnQU5LaS8vUDN6YTZOTENqN2pIUjJvSzl5QjQ9"
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
