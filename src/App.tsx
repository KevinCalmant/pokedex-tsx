import React from 'react'
import './App.css'
import HeaderLogo from './assets/images/header-logo.png'
import { Route, Routes } from 'react-router-dom'
import DexList from './pages/DexList'
import PokeDetail from './pages/PokeDetail'
import RegionNavigator from './components/RegionNavigator'


function App() {
	return (
		<div className="App">
			<div className="m-auto">
				<img className="header-logo m-auto -mt-12 -mb-12" src={HeaderLogo} alt="header logo"/>
				<Routes>
					<Route path="/">
						<Route index element={<DexList/>}/>
						<Route path=":id/detail" element={<PokeDetail/>}/>
					</Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
