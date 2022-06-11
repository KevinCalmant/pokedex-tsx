import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AxiosInstanceProvider } from "./contexts/AxiosContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <AxiosInstanceProvider config={{baseURL: "https://pokeapi.co/api/v2"}}
                               requestInterceptors={[]}
                               responseInterceptors={[]}>
          <App/>
        </AxiosInstanceProvider>
      </BrowserRouter>
    </React.StrictMode>
)
