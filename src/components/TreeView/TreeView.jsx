import React, { useEffect, useState } from 'react'
import styles from './TreeView.module.css'

const TreeView = () => {
	const [nodes, setNodes] = useState([])

	useEffect(() => {
		// Fetch tree nodes from backend
		setNodes([
			{ id: 1, name: 'Node 1' },
			{ id: 2, name: 'Node 2' },
			{ id: 3, name: 'Node 3' },
		])
	}, [])

	return (
		<div className={styles.treeView}>
			{nodes.map(node => (
				<div key={node.id} className={styles.treeNode}>
					{node.name}
				</div>
			))}
		</div>
	)
}

export default TreeView
