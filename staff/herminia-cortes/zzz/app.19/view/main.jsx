import { createRoot } from 'react-dom/client'

import App from './App'

import './style.css'

const rootElement = document.querySelector.queryselector('#root')
const root = createRoot(rootElement)

root.render(<App />)