import React, { useState } from 'react'
import styles from '../styles/FileUpload.module.css'

const FileUpload = () => {
	const [file, setFile] = useState(null)

	const handleFileChange = event => {
		setFile(event.target.files[0])
	}

	const handleFileUpload = async () => {
		if (!file) return

		const reader = new FileReader()
		reader.onload = async e => {
			const bytes = new Uint8Array(e.target.result)
			try {
				const response = await invoke('upload_file', { file: { name: file.name, bytes } })
				console.log(response)
			} catch (error) {
				console.error('Error uploading file:', error)
			}
		}
		reader.readAsArrayBuffer(file)
	}

	return (
		<div className={styles.fileUploadContainer}>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleFileUpload}>Upload</button>
		</div>
	)
}

export default FileUpload
