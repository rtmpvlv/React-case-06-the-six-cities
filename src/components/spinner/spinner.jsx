import React from "react";
import {SyncLoader} from "react-spinners";

export const Spinner = () => {
  const spinnerStyle = {
    width: `100vw`,
    height: `100vh`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  };
  return (
    <div style={spinnerStyle}>
      <SyncLoader color="#4481c3" />
    </div>
  );
};
