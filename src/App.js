import React from 'react';
import Map from './Map'
import Icons from './Icons'
import './stylesheets/index.css'
import brim from './images/Brimm.png';
import jett from './images/Jett.png';
import cypher from './images/Cypher.png';
import omen from './images/Omen.png';
import phoenix from './images/Phoenix.png';
import sova from './images/Sova.png';
import sage from './images/Sage.png';
import viper from './images/Viper.png';
import spike from './images/spikeIcon.png'
import smoke from './images/Valorant_Smoke.png'


function App() {

	const agentProps = {
		iconOrder: [
			brim, brim, jett, jett,
			cypher, cypher, omen, omen,
			phoenix, phoenix, sova, sova,
			sage, sage, viper, viper
		],
		name: "Agents",
		agents: true
	}

	const iconProps = {
		
		iconOrder: [
			spike, smoke,
			smoke, smoke, 
			smoke, smoke,
			smoke, smoke
		],
		name: "Icons"
	}

  return (
	<div className="flex-container">
		<Icons {...agentProps} /> 
		<Map />
		<Icons {...iconProps}/>	
	</div>
  
  );
}

export default App;
