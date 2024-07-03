import React, { useEffect, useState } from 'react'
import styles from './TreeView.module.css'

const TreeNode = ({ node, label }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}

	// console.log(`Rendering TreeNode: ${label}`, node) // Debugowanie

	return (
		<div className={styles.treeNode}>
			<div onClick={handleToggle}>
				{label}: {typeof node === 'object' ? (isExpanded ? '-' : '+') : node}
			</div>
			{isExpanded && typeof node === 'object' && !Array.isArray(node) && (
				// Jeśli node jest obiektem, iteruj przez jego klucze
				<div className={styles.treeChildren}>
					{Object.keys(node).map(key => (
						<TreeNode key={key} label={key} node={node[key]} />
					))}
				</div>
			)}
			{isExpanded && Array.isArray(node) && (
				// Jeśli node jest tablicą, iteruj przez jej elementy
				<div className={styles.treeChildren}>
					{node.map((item, index) => (
						<TreeNode key={index} label={item.name || index} node={item} />
					))}
				</div>
			)}
		</div>
	)
}

const TreeView = ({ data }) => {
	useEffect(() => {
		console.log('TreeView data:', data)
	}, [data])

	return (
		<div className={styles.treeView}>
			{/* Iterowanie przez główne klucze obiektu data */}
			{Object.keys(data).map(key => (
				<TreeNode key={key} label={key} node={data[key]} />
			))}
		</div>
	)
}

export default TreeView
