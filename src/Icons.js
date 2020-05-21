import React from 'react';
import Draggable from 'react-draggable';
import './stylesheets/agents.css'




export default function Agents(props) {
	const nodeRef = React.useRef(null);
	
	
	const icons = props.iconOrder.map( (agent, idx)  => 
		<Draggable nodeRef={nodeRef} key={idx} >
				<img ref={nodeRef} draggable="false" src={agent} alt="breach"  style={{width: '50px', height: '50px' }}onClick={(e) => console.log(nodeRef)} />
		</Draggable> 
	)



	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> {props.name} </h2>
			{ icons }
		</div>
	)
}