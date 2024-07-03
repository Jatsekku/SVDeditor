import React, { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { open } from '@tauri-apps/api/dialog'
import RegisterEditor from './components/RegisterEditor/RegisterEditor'
import TreeView from './components/TreeView/TreeView'
import styles from './App.module.css'

const App = () => {
	const [svdData, setSvdData] = useState(null)

	const pickFile = async () => {
		const selectedPath = await open({
			multiple: false,
			title: 'Select SVD file',
		})
		// invoke('parse_svd_file', { path: selectedPath }).then(message => console.log(message))
		const data = await invoke('parse_svd_file', { path: selectedPath })
		setSvdData(data)
		console.log(data) // Wyświetlenie danych w konsoli
	}
 
	return (
		<div className={styles.appContainer}>
			<div className={styles.sidebar}>
				<button onClick={pickFile} className={styles.sidebarButton}>
					Open File
				</button>
				<div className={styles.treeView}>
					{/* Przekazanie danych do komponentu TreeView */}
					{svdData && <TreeView data={svdData} />}
				</div>
			</div>
			<div className={styles.content}>
				<RegisterEditor />
			</div>
		</div>
	)
}

export default App
