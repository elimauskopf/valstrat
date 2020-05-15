import React from 'react';
import split from './images/split.webp'
import bind from './images/bind.jpg'
import haven from './images/haven.jpg'
import './stylesheets/map.css';
import CanvasDraw from 'react-canvas-draw'

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			map: split,
			color: "#ffc600",
			brushRadius: 5,
			lazyRadius: 5
		}
		
		this.handleSelect = this.handleSelect.bind(this)
		this.colorChanger = this.colorChanger.bind(this)
		this.clearBoard = this.clearBoard.bind(this)
		this.undoLast = this.undoLast.bind(this)
	}

	handleSelect(e) {

		if (e.target.value === 'bind') {
			this.setState({map: bind})
			this.Canvas.drawImage()
		} else if (e.target.value === 'split') {
			this.setState({map: split})
			this.Canvas.drawImage()
		} 
		else if (e.target.value === 'haven') {
			this.setState({map: haven})
			this.Canvas.drawImage()
		}
	}

	colorChanger(e) {
		//e.preventDefault()
		console.log(e.target.className)
		if (e.target.className.includes("blue")) {
			console.log("here1")
			this.setState({color: "#0000ff"})
		} else if (e.target.className.includes("red")) {
			console.log("here2")
			this.setState({color: "#ff0000"})
		} else if (e.target.className.includes("yellow")) {
			this.setState({color: "#ffff00"})
		}
	}

	clearBoard() {
		this.Canvas.clear()
	}

	undoLast() {
		this.Canvas.undo()
	}

	render() {
		return (
			<div>
				<div className='selector'> 
					<label htmlFor="cars">Choose a Map: </label>

					<select name="maps" onChange={this.handleSelect}>
						<option value="">--Please choose an option--</option>
						<option value="bind">Bind</option>
						<option value="split">Split</option>
						<option value="haven">Haven</option>
					</select>
				</div>
				<div className="map">
					<CanvasDraw
						ref={canvasDraw => (this.Canvas = canvasDraw)}
						imgSrc={this.state.map}
						brushColor={this.state.color}
						brushRadius={this.state.brushRadius}
					/>
				</div>
				<div className="buttons"> 
						<button className="button blue" onClick={this.colorChanger}></button>
						<button className="button red" onClick={this.colorChanger}></button>
						<button className="button yellow" onClick={this.colorChanger}></button>
						<button className="reset-button" onClick={this.clearBoard}> clear </button>
						<button className="reset-button" onClick={this.undoLast}> undo </button>
					</div>
			</div>

		)
	}
}
