import { createRoot } from 'react-dom/client'

import APP from './App'

import './style.css'

const rootElement = document.querySelector('#root')
const root = createRoot(rootElement)

root.render(<APP />)