import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import App from 'src/App'
import 'src/styles/index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <App />
  </Router>
)
