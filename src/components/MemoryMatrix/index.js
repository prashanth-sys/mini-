import {Component} from 'react'

import './index.css'

class MemoryMatrix extends Component {
  componentDidMount() {
    this.generateButton()
  }

  generateButton = () => {
    const buttonId = Array.from({length: 9}, index => index + 1)
    const shuffledButtonId = this.shuffleArray(buttonId)
    console.log(buttonId)
    const selectedButtons = shuffledButtonId.slice(0, 3)
    console.log(selectedButtons)
  }

  shuffleArray = array => {
    console.log(array)
  }

  render() {
    return (
      <div className="memory-matrix-container">
        <h1 className="game-heading">Memory Matrix</h1>
        <div className="level-container">
          <p className="level">Level-1</p>
          <p className="level">Max Level-00</p>
        </div>
        <div className="game-container">
          {Array.from({length: 9}, index => (
            <button key={index} type="button" className="button">
              .
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default MemoryMatrix
