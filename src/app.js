import React from 'react'
import ReactDOM from 'react-dom'
import styles from 'styles/main.css'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
