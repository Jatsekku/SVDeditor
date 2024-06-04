import React from 'react'

const RegisterViewer = ({ registers }) => {
	if (!registers || registers.length === 0) {
		return <p>Brak danych do wyświetlenia.</p>
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{registers.map((register, index) => (
					<tr key={index}>
						<td>{register.name}</td>
						<td>{register.address}</td>
						<td>{register.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default RegisterViewer
