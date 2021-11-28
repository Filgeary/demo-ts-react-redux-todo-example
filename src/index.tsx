import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'

ReactDOM.render(
  <React.StrictMode>
    <App title={'TypeScript_React_Redux'} info={'cool project'} />
  </React.StrictMode>,
  document.getElementById('root'),
)
