import { ITodoItem } from '../interfaces'
import { Action, ActionTypes } from '../actions/types'

const todosReducer = (state: ITodoItem[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    case ActionTypes.deleteTodo:
      return state.filter((todo: ITodoItem) => todo.id !== action.payload)
    default:
      return state
  }
}

export { todosReducer }
