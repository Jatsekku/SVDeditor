import React, { useState } from 'react'
import SVDFileLoader from './SVDFileLoader'
import RegisterViewer from './RegisterViewer'
import RegisterEditor from './RegisterEditor'

function App() {
	const [registers, setRegisters] = useState([])
	const [selectedRegister, setSelectedRegister] = useState(null)

	const handleFileLoaded = parsedData => {
		setRegisters(parsedData)
	}

	const handleRegisterSelect = register => {
		setSelectedRegister(register)
	}

	const handleSave = updatedRegister => {
		const updatedRegisters = registers.map(reg => (reg.id === updatedRegister.id ? updatedRegister : reg))
		setRegisters(updatedRegisters)
		setSelectedRegister(null) // Optional: close the editor after save
	}

	return (
		<div className="App">
			<h1>Edytor Plików SVD</h1>
			<SVDFileLoader onFileLoaded={handleFileLoaded} />
			<RegisterViewer registers={registers} onRegisterSelect={handleRegisterSelect} />
			{selectedRegister && <RegisterEditor register={selectedRegister} onSave={handleSave} />}
		</div>
	)
}

export default App
