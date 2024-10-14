import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./page";
import { JobProvider } from "../../components/jobContext/jobContext";
import Jobs from "./jobs/page";
import CVUpload from "./jobs/cv-upload/page";
import ReactGA from "react-ga4"


require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)


