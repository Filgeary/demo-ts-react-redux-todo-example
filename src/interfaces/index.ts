import { ActionTypes } from '../actions/types'

export interface ITodoItem {
  id: number
  title: string
  completed: boolean
}

export interface IStoreState {
  todos: ITodoItem[]
}

export interface IFetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: ITodoItem[]
}

export interface IDeleteTodoAction {
  type: ActionTypes.deleteTodo
  payload: number
}
