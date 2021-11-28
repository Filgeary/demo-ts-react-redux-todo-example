import React from 'react'
import './App.css'

interface AppProps {
  title?: string
  info?: string
}

class App extends React.Component<AppProps> {
  state = {
    counter: 0,
  }

  handleIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    const { title, info } = this.props
    const { counter } = this.state

    return (
      <div className={'container-lg'}>
        <h1>{title}</h1>
        <p>{info?.toLowerCase()}</p>

        <div className={'btn-group-lg'}>
          <button
            type={'button'}
            className={'btn btn-lg btn-primary'}
            onClick={this.handleIncrement}
          >
            <i className={'bi-plus-circle'} />
          </button>
          <button
            type={'button'}
            className={'btn btn-lg btn-secondary'}
            onClick={this.handleDecrement}
          >
            <i className={'bi-dash-circle'} />
          </button>
          <h2>{counter}</h2>
        </div>
      </div>
    )
  }
}

export default App
