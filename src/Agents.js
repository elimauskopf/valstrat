import React, { useState } from 'react';
import Draggable from 'react-draggable';
import brim from './images/Brimm.png';
import jett from './images/Jett.png';
import cypher from './images/Cypher.png';
import omen from './images/Omen.png';
import phoenix from './images/Phoenix.png';
import sova from './images/Sova.png';
import sage from './images/Sage.png';
import viper from './images/Viper.png';
import './stylesheets/agents.css'




export default function Agents() {
	const nodeRef = React.useRef(null);
	//const [resetPos, toggle] = useState(null)
	const agentOrder = [
		brim, brim, jett, jett,
		cypher, cypher, omen, omen,
		phoenix, phoenix, sova, sova,
		sage, sage, viper, viper
	]
	const agents = agentOrder.map( (agent, idx)  => 
		<Draggable nodeRef={nodeRef} key={idx} >
				<img ref={nodeRef} draggable="false" src={agent} alt="breach"  style={{width: '50px', height: '50px' }}onClick={(e) => console.log(nodeRef)} />
		</Draggable> 
	)



	return (
		<div className="grid-container">
			<h2 className="grid-item-1"> Agents </h2>
			{agents }
		</div>
	)
}