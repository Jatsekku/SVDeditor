import React from 'react'
import { open } from "@tauri-apps/api/dialog"
import RegisterEditor from './components/RegisterEditor/RegisterEditor'
import TreeView from './components/TreeView/TreeView'
import styles from './App.module.css'

async function pickFile() {
	const selectedPath = await open({
		multiple: false,
		title: "Select SVD file",
	})
	console.log(selectedPath)
}

const App = () => {
	return (
		<div className={styles.appContainer}>
			<div className={styles.sidebar}>
				<button onClick={pickFile} className={styles.sidebarButton}>Open File</button>
				<div className={styles.treeView}>{/* Tree View Content */}</div>
			</div>
			<div className={styles.content}>
				<RegisterEditor />
			</div>
		</div>
	)
}

export default App
