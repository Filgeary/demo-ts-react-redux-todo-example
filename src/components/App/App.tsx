import React from 'react'
import './App.css'
import Counter from '../Counter/Counter'
import { IStoreState, ITodoItem } from '../../interfaces'
import { connect } from 'react-redux'
import { fetchTodos } from '../../actions'

interface AppProps {
  title?: string
  info?: string
  todos: ITodoItem[]
  fetchTodos(): any
}

interface AppState {
  counter: number
}

class App extends React.Component<AppProps, AppState> {
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
      <div className={'container-lg d-grid gap-4 p-3'}>
        <div>
          <h1>{title}</h1>
          <p>{info?.toLowerCase()}</p>
        </div>

        <Counter
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          counter={counter}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodoItem[] } => {
  return { todos }
}

export default connect(mapStateToProps, { fetchTodos })(App)
