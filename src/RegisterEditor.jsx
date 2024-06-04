import React, { useState } from 'react'

const RegisterEditor = ({ register, onSave }) => {
	const [editedRegister, setEditedRegister] = useState(register)

	const handleChange = e => {
		const { name, value } = e.target
		setEditedRegister(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		onSave(editedRegister)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" name="name" value={editedRegister.name} onChange={handleChange} />
			</label>
			<label>
				Address:
				<input type="text" name="address" value={editedRegister.address} onChange={handleChange} />
			</label>
			<label>
				Description:
				<textarea name="description" value={editedRegister.description} onChange={handleChange} />
			</label>
			<button type="submit">Save</button>
		</form>
	)
}

export default RegisterEditor
