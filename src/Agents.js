import React, { useState } from 'react';
import Draggable from 'react-draggable';
import breach from './images/breach.png';
import './stylesheets/agents.css'




export default function Agents() {
	const nodeRef = React.useRef(null);
	//const [resetPos, toggle] = useState(null)
	const agentOrder = [
		breach, breach, breach, breach,
		breach, breach, breach, breach
	]
	const agents = agentOrder.map( (agent, idx)  => 
		<Draggable nodeRef={nodeRef} key={idx} >
				<img ref={nodeRef} draggable="false" src={agent} alt="breach" style={{width: '50px', height: 'px' }} onClick={(e) => console.log(nodeRef)} />
		</Draggable> 
	)



	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> Agents </h2>
			{agents }
		</div>
	)
}