import React from 'react';
import Map from './Map'
import Icons from './Icons'
import './stylesheets/index.css'
import breachBlue from './images/BreachBlue.png'
import breachGreen from './images/BreachGreen.png'
import brimBlue from './images/BrimBlue.png';
import brimGreen from './images/BrimGreen.png';
import cypherBlue from './images/CypherBlue.png';
import cypherGreen from './images/CypherGreen.png';
import jettBlue from './images/JettBlue.png';
import jettGreen from './images/JettGreen.png';
import omenBlue from './images/OmenBlue.png';
import omenGreen from './images/OmenGreen.png';
import phoenixBlue from './images/PhoenixBlue.png';
import phoenixGreen from './images/PhoenixGreen.png';
import razeBlue from './images/RazeBlue.png';
import razeGreen from './images/RazeGreen.png';
import reynaBlue from './images/ReynaBlue.png';
import reynaGreen from './images/ReynaGreen.png';
import sageBlue from './images/SageBlue.png';
import sageGreen from './images/SageGreen.png';
import sovaBlue from './images/SovaBlue.png';
import sovaGreen from './images/SovaGreen.png';
import viperBlue from './images/ViperBlue.png';
import viperGreen from './images/ViperGreen.png';
import spike from './images/spikeIcon.png'
import smoke from './images/Valorant_Smoke.png'
import icewall from './images/Ice_Wall.png'


function App() {

	const agentProps = {
		iconOrder: [
			breachBlue, breachGreen,
			brimBlue, brimGreen,
			jettBlue, jettGreen,
			cypherBlue, cypherGreen,
			omenBlue, omenGreen,
			phoenixBlue, phoenixGreen,
			razeBlue, razeGreen,
			reynaBlue, reynaGreen,
			sovaBlue, sovaGreen,
			sageBlue, sageGreen,
			viperBlue, viperGreen
		],
		name: "Agents"
	}

	const iconProps = {

		iconOrder: [
			spike, smoke,
			smoke, smoke,
			smoke, smoke,
			smoke, smoke,
		],
		iceWall: [
			icewall, icewall
		],
		name: "Icons"
	}

	return (
		<div className="flex-container">
			<Icons {...agentProps} />
			<Map />
			<Icons {...iconProps} />
		</div>
	);
}

export default App;
