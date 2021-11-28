import { IFetchTodosAction, ITodoItem } from '../interfaces'
import { ActionTypes } from '../actions/types'

const todosReducer = (state: ITodoItem[] = [], action: IFetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}

export { todosReducer }
