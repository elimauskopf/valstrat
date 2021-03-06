import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './stylesheets/agents.css'


export function setSizeHelper(size, option) {

	// Extract width and height from state
	let width = Number(size.width.slice(0, -2))
	let height = Number(size.height.slice(0, -2))

	if (option === "plus") {

		// Max size
		if (width < 4) {
			width += .1;
			height += .1;
		}


	} else {

		// Min size
		if (width > 1) {
			width -= .1;
			height -= .1;
		}
	}

	return {
		width: (Math.round(width * 10) / 10).toFixed(1) + "em",
		height: (Math.round(height * 10) / 10).toFixed(1) + "em"
	}
}


export default function Agents(props) {

	// Need a noderef to avoid warnings for react draggable
	let nodeRef = React.useRef(Draggable);

	/* 
	Keys are used to initialize icons
	By chaging keys we can reset the internal state of the icons and move 
	them back to starting positions 
	*/
	const initialState = [...Array(props.iconOrder.length).keys()]
	let [keys, setKeys] = useState(initialState)

	// put icon width and height on state
	const [size, setSize] = useState({ width: '2.0em', height: '2.0em' })
	const [wallSize] = useState({ width: '2.0em', height: '1.0em' })
	let walls;



	const icons = props.iconOrder.map((agent, idx) =>
		<Draggable nodeRef={nodeRef} key={keys[idx]}>
			<img
				style={{ width: size.width, height: size.height }}
				ref={nodeRef}
				draggable="false"
				src={agent}
				alt="icon"
				className="icons"
			/>
		</Draggable>
	)

	if (props.name === "Icons") {
	walls = props.iceWall.map((agent, idx) => 
			<Draggable nodeRef={nodeRef} key={keys[idx]}>
				<img
					style={{ width: wallSize.width, height: wallSize.height }}
					ref={nodeRef}
					draggable="false"
					src={agent}
					alt="icon"
					className="icons"
				/>
			</Draggable>
		)
	}



	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> {props.name} </h2>
			{icons}
			{walls && walls}
			<button className="size-button" onClick={() => setSize(setSizeHelper(size, "plus"))} > Size: + </button>
			<button className="size-button" onClick={() => setSize(setSizeHelper(size))} > Size: - </button>
			<button className="reset-icon-button" onClick={() => setKeys(keys.map(key => key + props.iconOrder.length))} > Reset </button>

		</div>
	)
}