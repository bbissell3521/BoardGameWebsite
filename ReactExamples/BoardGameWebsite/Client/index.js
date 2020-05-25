// One time import babel polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// One time import of bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Load react libraries
import React from 'react'
import ReactDOM from 'react-dom'

import GameBrowsePage from './components/GameBrowsePage.jsx'

ReactDOM.render(
  <GameBrowsePage />,
  document.getElementById('root')
)
