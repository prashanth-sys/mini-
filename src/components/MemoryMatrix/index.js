import {Component} from 'react'

import './index.css'

class MemoryMatrix extends Component {
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
