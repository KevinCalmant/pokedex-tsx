import React from 'react'
import './App.scss'
import HeaderLogo from '../assets/header-logo.png';

function App() {
	return (
		<div className="App">
			<img className="header-logo" src={HeaderLogo} alt="header logo" />
		</div>
	)
}

export default App
