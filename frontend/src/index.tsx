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
  "Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xRdEVmXH1aeX1cRA==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdhW39bdXZQR2BcVw==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhW31edXFXQ2FfVkI=;ODA0MDA4QDMyMzAyZTM0MmUzMEV3a1paRFlXYTlHcmJxbnJpSUJ1YzgxRUsyQW9Sbkt5a0NpSW5QTnpSOGs9;ODA0MDA5QDMyMzAyZTM0MmUzMGVJazhsWXI0SHpZOHhRaG5PM2pMaGhWU2NUcWFNNmhiR0QreHJUbHRiS0E9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW31ccHFQRGVYWUd2;ODA0MDExQDMyMzAyZTM0MmUzME80VjJuSGI4MTdsVEJNUGxhaXJ5M3ZEb0x3WnQwRlJSS0VJdGxFVFowK0E9;ODA0MDEyQDMyMzAyZTM0MmUzMEZtc283RDZxMzNxTEdubzhDbU9lMUhUYjZ0SFp3alZwdUI5N2RVcG5HZVU9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhW31edXFXQ2hYUUA=;ODA0MDE0QDMyMzAyZTM0MmUzME5qRDFaRnZZR01hU2ZzM2hjT3lDRE1QQ0RsWTdoL1ZtMkkwRTVON0dYbmc9;ODA0MDE1QDMyMzAyZTM0MmUzMGYzMmYwa1JrQ1dvSVNmSEkxRDhlNVJkcFFpcys4V3VXZE1FbmFXR3djSGM9;ODA0MDE2QDMyMzAyZTM0MmUzME80VjJuSGI4MTdsVEJNUGxhaXJ5M3ZEb0x3WnQwRlJSS0VJdGxFVFowK0E9"
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
