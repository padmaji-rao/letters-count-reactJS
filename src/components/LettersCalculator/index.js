import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state
    const count = input.length
    console.log(count, input)
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="countID" className="input-label">
              Enter the phrase
            </label>
            <br />
            <input
              onChange={this.onChangeInput}
              className="input"
              placeholder="Enter the phrase"
              id="countID"
            />
          </div>
          <p className="button">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
