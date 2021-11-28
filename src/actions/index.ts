import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'
import { IFetchTodosAction, ITodoItem } from '../interfaces'

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
