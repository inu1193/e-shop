// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react"
import ReactDOM from "react-dom"
import App from "./src/App"
import ShopContextProvider from "./src/Context/ShopContext"

ReactDOM.render(<div>
    
    <ShopContextProvider>
        <App /> 
    </ShopContextProvider> </div>, document.getElementById("root"))
