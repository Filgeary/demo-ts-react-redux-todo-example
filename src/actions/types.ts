import { IDeleteTodoAction, IFetchTodosAction } from '../interfaces'

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = IFetchTodosAction | IDeleteTodoAction
