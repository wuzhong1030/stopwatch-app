import React, { Fragment } from "react";
import { ms2Time } from "../utils";

const MajorClock = ({ milliseconds = 0, activated = false }) => {
  return (
    <Fragment>
      <style jsx>{`
        h1 {
          color: ${activated ? "red" : "black"};
          font-family: monospace;
        }
      `}</style>
      <h1>{ms2Time(milliseconds)}</h1>
    </Fragment>
  );
};

export default MajorClock;
