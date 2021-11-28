import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title={'TypeScript_React_Redux'} info={'cool project'} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
