import React from 'react'
import styles from './RegisterEditor.module.css'

const RegisterEditor = () => {
	const renderWindows = () => {
		const windows = []
		for (let i = 0; i < 32; i++) {
			windows.push(
				<div key={i} className={styles.rwWindow}>
					R/W
				</div>
			)
		}
		return windows
	}
	return (
		<div className={styles.registerContainer}>
			<div className={styles.registerHeader}>Register</div>
			<div className={styles.formGroup}>
				<label htmlFor="name">Name</label>
				<div className={styles.value} id="name">
					ACSR
				</div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="description">Description</label>
				<div className={styles.value} id="description">
					Analog comparator Control and Status Register
				</div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="group">Group</label>
				<div className={styles.value} id="group"></div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="reference">Reference</label>
				<div className={styles.value} id="reference"></div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="address">Address</label>
				<div className={styles.value} id="address">
					0x0001
				</div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="offset">Offset</label>
				<div className={styles.value} id="offset">
					0x0000
				</div>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="blocksize">Blocksize</label>
				<div className={styles.value} id="blocksize"></div>
			</div>
		</div>
	)
}

export default RegisterEditor
