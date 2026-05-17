import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let root = null

export const mount = (el) => {
    root = ReactDOM.createRoot(el)
    root.render(<App />)
}

export const unmount = () => {
    if (root) {
        root.unmount()
    }
}