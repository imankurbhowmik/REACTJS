import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const username = "Ankur"

const ReactElement = React.createElement(
    'a', 
    {href: "https://www.google.com", target: "_blank"},
    "click me to visit google",
    username
)



ReactDOM.createRoot(document.getElementById('root')).render(
    
    
    // ReactElement

    <App/>
    
    
    
  
)
