import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(){
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }


  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render(){
    return (
      <div class="clock">
        <h1>I am clock</h1>
        <clock>
          <date>
            Date: {this.state.time.toDateString()}
          </date>
          <br />
          <time>
            Time: {this.state.time.toTimeString()}
          </time>
        </clock>
      </div>
    );
  }
}

export default Clock;
