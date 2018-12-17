import React, { Component, Fragment } from "react";
import MajorClock from "./components/MajorClock";
import ControlButtons from "./components/ControlButtons";
import SplitTimes from "./components/SplitTimes";

class App extends Component {
  // constructor() {
  //   super(...arguments);
  //   this.state = {
  //     isStarted: false,
  //     startTime: null,
  //     currentTime: null,
  //     splits: []
  //   };
  // }
  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: []
  };
  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date()
    });
    this.intervalHandle = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000 / 60);
  };
  onPause = () => {
    this.intervalHandle && clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  };
  onReset = () => {
    this.intervalHandle && clearInterval(this.intervalHandle);
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    });
  };
  onSplit = () => {
    this.setState({
      splits: [
        ...this.state.splits,
        this.state.currentTime - this.state.startTime
      ]
    });
  };
  render() {
    return (
      <div className="container">
        <style jsx>{`
          .container {
            width: 375px;
            height: 667px;
            overflow: auto;
            text-align: center;
            background: #eee;
          }
          h1 {
            color: green;
          }
        `}</style>
        <h1>秒表</h1>
        <MajorClock
          milliseconds={this.state.currentTime - this.state.startTime}
          activated={this.state.isStarted}
        />
        <ControlButtons
          activated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
        />
        <SplitTimes value={this.state.splits} />
      </div>
    );
  }
}

export default App;
