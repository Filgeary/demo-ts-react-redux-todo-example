import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'
import { IDeleteTodoAction, IFetchTodosAction, ITodoItem } from '../interfaces'

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const result = await axios.get<ITodoItem[]>(baseUrl)

    dispatch<IFetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: result.data,
    })
  }
}

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  }
}
