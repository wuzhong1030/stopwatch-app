import React, { Fragment } from "react";

const ControlButtons = props => {
  const { activated, onStart, onPause, onReset, onSplit } = props;
  if (activated) {
    return (
      <Fragment>
        <button onClick={onSplit} className="left-button button">
          计次
        </button>
        <button onClick={onPause} className="right-button button">
          停止
        </button>
      </Fragment>
    );
  } else {
    return (
      <div>
        <button onClick={onReset} className="left-button button">
          复位
        </button>
        <button onClick={onStart} className="right-button button">
          启动
        </button>
      </div>
    );
  }
};

export default ControlButtons;
