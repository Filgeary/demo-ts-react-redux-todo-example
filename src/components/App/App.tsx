import React from 'react'
import './App.css'

interface AppProps {
  title?: string
  info?: string
}

class App extends React.Component<AppProps> {
  render() {
    const { title, info } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <p>{info?.toLowerCase()}</p>
      </div>
    )
  }
}

export default App
