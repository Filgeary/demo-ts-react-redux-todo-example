import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { IStoreState } from '../interfaces'

const rootReducer = combineReducers<IStoreState>({
  todos: todosReducer,
})

export default rootReducer
