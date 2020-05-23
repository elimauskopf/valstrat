import React from 'react';
import Draggable from 'react-draggable';
import './stylesheets/agents.css'




export default function Agents(props) {
	const nodeRef = React.useRef(Draggable);
	let icons;

	

	// agents prop recieved
	if (props.agents) {
		icons = props.iconOrder.map((agent, idx) => {
			//even: return green icon
			if (idx % 2 === 0) {
				return (
					<Draggable nodeRef={nodeRef} key={idx} >
						<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icon-green" onClick={(e) => console.log(nodeRef)} />
					</Draggable>
				)
			}
			return (
				<Draggable nodeRef={nodeRef} key={idx} >
					<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icon-blue" onClick={(e) => console.log(nodeRef)} />
				</Draggable>
			)
		}
		)
	}

	// render normal icons otherwise
	else {
		icons = props.iconOrder.map((agent, idx) =>
			<Draggable nodeRef={nodeRef} key={idx} >
				<img ref={nodeRef} draggable="false" src={agent} alt="icon" className="icons" onClick={(e) => console.log(nodeRef)} />
			</Draggable>
		)
	}




	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> {props.name} </h2>
			{icons}
		</div>
	)
}