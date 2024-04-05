import {Component} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa6'

import './index.css'

class DigitalTimer extends Component {
  state = {
    timer: 25,
    isStart: false,
  }

  onClickDecrement = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  onClickIncrement = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  onClickStart = () => {
    this.setState(prevState => ({isStart: !prevState.isStart}))
  }

  onClickReset = () => {
    this.setState({timer: 25, isStart: false})
  }

  render() {
    const {timer, isStart} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-buttons-container">
          <div className="timer-card">
            <div className="h1-p-card">
              <h1 className="timer-h1">{timer}:00</h1>
              <p className="paused">Paused</p>
            </div>
          </div>
          <div className="start-reset-container">
            <div className="start-reset-card">
              {isStart ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="pause icon"
                  className="icon"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="icon"
                />
              )}
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickStart}
              >
                {isStart ? 'Pause' : 'Start'}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="icon"
              />
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
            <p>Set Timer limit</p>
            <div className="start-reset-card">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickDecrement}
              >
                <FaMinus alt="minus" />
              </button>
              <p className="paragraph-25">{timer}</p>
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickIncrement}
              >
                <FaPlus alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
