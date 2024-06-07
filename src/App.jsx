import React from 'react'
import RegisterEditor from './components/RegisterEditor'
import TreeView from './components/TreeView'
import styles from './styles/App.module.css'

const App = () => {
	return (
		<div className={styles.appContainer}>
			<div className={styles.sidebar}>
				<button className={styles.sidebarButton}>Open File</button>
				<div className={styles.treeView}>{/* Tree View Content */}</div>
			</div>
			<div className={styles.content}>
				<RegisterEditor />
			</div>
		</div>
	)
}

export default App
