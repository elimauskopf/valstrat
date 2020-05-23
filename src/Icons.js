import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './stylesheets/agents.css'


export default function Agents(props) {
	let nodeRef = React.useRef(Draggable);
	const initialState = [...Array(props.iconOrder.length).keys()]
	let [keys, setKeys] = useState(initialState)
	let icons;

	

	// agents prop recieved
	if (props.agents) {
		icons = props.iconOrder.map((agent, idx) => {
			//even: return green icon
			if (idx % 2 === 0) {
				return (
					<Draggable nodeRef={nodeRef} key={keys[idx]} >
						<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icon-green"  />
					</Draggable>
				)
			}
			return (
				<Draggable nodeRef={nodeRef} key={keys[idx]} >
					<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icon-blue"  />
				</Draggable>
			)
		}
		)
	}

	// render normal icons otherwise
	else {
		icons = props.iconOrder.map((agent, idx) =>
			<Draggable nodeRef={nodeRef} key={keys[idx]}>
				<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icons"  />
			</Draggable>
		)
	}




	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> {props.name} </h2>
			{icons}
			<button className="reset-icon-button" onClick={() => setKeys(keys.map(key => key+props.iconOrder.length))} > reset </button>
		</div>
	)
}