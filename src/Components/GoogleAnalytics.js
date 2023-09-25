import React, { useEffect } from "react";
import ReactGA from "react-ga";

function GoogleAnalytics() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
}

export default GoogleAnalytics;
