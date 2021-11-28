import { ActionTypes } from '../actions/types'

export interface ITodoItem {
  id: number
  title: string
  completed: boolean
}

export interface IFetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: ITodoItem[]
}

export interface IStoreState {
  todos: ITodoItem[]
}
