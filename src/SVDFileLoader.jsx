import React, { useState } from 'react'

function SVDFileLoader({ onFileLoaded }) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleFileInput = async event => {
		setLoading(true)
		setError(null)
		try {
			const file = event.target.files[0]
			const data = await file.text()
			onFileLoaded(data)
			setLoading(false)
		} catch (err) {
			setError('Błąd wczytywania pliku: ' + err.message)
			setLoading(false)
		}
	}

	return (
		<div>
			{loading && <p>Wczytywanie...</p>}
			{error && <p className="error">{error}</p>}
			<input type="file" onChange={handleFileInput} />
		</div>
	)
}

export default SVDFileLoader
