import React from 'react'
import './App.css'
import Counter from '../Counter/Counter'
import { IStoreState, ITodoItem } from '../../interfaces'
import { connect } from 'react-redux'
import { deleteTodo, fetchTodos } from '../../actions'

interface AppProps {
  title?: string
  info?: string
  todos: ITodoItem[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
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
    const { title, info, fetchTodos, deleteTodo, todos } = this.props
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

        <div className={'d-grid gap-2'}>
          <h2>Posts</h2>
          <button
            type={'button'}
            className={'btn btn-lg btn-primary d-block w-25'}
            onClick={() => fetchTodos()}
          >
            Get Posts
          </button>

          {todos.length > 0 &&
            todos.map(item => {
              const { id, title, completed } = item

              return (
                <div key={id}>
                  <h3>{id}</h3>
                  <p>{title}</p>
                  {completed && <p className={'text-danger'}>Completed</p>}
                  <button
                    className={'btn btn-lg btn-danger d-block w-25'}
                    onClick={() => deleteTodo(id)}
                  >
                    Delete
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodoItem[] } => {
  return { todos }
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App)
