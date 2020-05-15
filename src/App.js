import React from 'react';
import Map from './Map'
import Agents from './Agents'
import './stylesheets/index.css'


function App() {
  return (
	<div className="flex-container">
		<Agents /> 
		<Map />
  		
	</div>
  
  );
}

export default App;
