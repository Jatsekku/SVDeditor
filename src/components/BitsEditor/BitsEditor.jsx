import React from 'react'
import styles from './BitsEditor.module.css'

const BitBox = ( {x0, y0, span, name, continuation}) => {
	let dynamicStyle = {
		gridColumnStart: x0,
		gridRowStart: y0,
		gridColumnEnd: x0+span+1,
		gridRowEnd: y0,
	}

	if (continuation === "left") {
		dynamicStyle.borderTopLeftRadius = 0;
		dynamicStyle.borderBottomLeftRadius = 0;
	} else if (continuation === "right" ) {
		dynamicStyle.borderTopRightRadius = 0;
		dynamicStyle.borderBottomRightRadius = 0;
	}

	console.log(dynamicStyle)

	return (
		<div className={styles.bitBox} style={dynamicStyle}>
			<label htmlFor="name">{name}</label>
		</div>
	)
}
const BitsEditor = ( {size} ) => {

	return (
		<div className={styles.bitsContainer}>
			<BitBox x0={1} y0={1} span={0} name={1}/>
			<BitBox x0={2} y0={1} span={0} name={1} />
			<BitBox x0={3} y0={1} span={0} name={1}/>
			<BitBox x0={4} y0={1} span={3} name={1} continuation={"right"}/>
		</div>
	)
}

export default BitsEditor
