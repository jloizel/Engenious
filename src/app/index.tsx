import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./page";
import { JobProvider } from "../../components/jobContext/jobContext";
import Jobs from "./jobs/page";
import CVUpload from "./jobs/cv-upload/page";
import ReactGA from "react-ga4"

const googleAnalyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID || "";
ReactGA.initialize("G-LBE91BRV9Z")

if (googleAnalyticsId) {
  // Initialize Google Analytics with your tracking ID
  ReactGA.initialize(googleAnalyticsId);

  // Send a pageview event
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)


