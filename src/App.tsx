import React, { useState } from 'react'
import './App.css'
import HeaderLogo from './assets/images/header-logo.png'
import { Route, Routes } from 'react-router-dom'
import DexList from './pages/DexList'
import PokeDetail from './pages/PokeDetail'
import RegionContext from "./contexts/RegionContext"
import { Region } from "./models/RegionInfo"

function App() {
	const [region, setRegion] = useState<Region>('kanto')

	return (
		<div className="App">
			<div className="m-auto">
				<img className="header-logo m-auto -mt-12 -mb-12" src={HeaderLogo} alt="header logo"/>
				<RegionContext.Provider value={{region, setRegion}}>
					<Routes>
						<Route path="/">
							<Route index element={<DexList/>}/>
							<Route path=":id/detail" element={<PokeDetail/>}/>
						</Route>
					</Routes>
				</RegionContext.Provider>
			</div>
		</div>
	)
}

export default App
