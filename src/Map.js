import React from 'react';
import split from './images/SplitEmpty.png'
import bind from './images/bindEmpty.png'
import haven from './images/havenEmpty.png'
import './stylesheets/map.css';
import CanvasDraw from 'react-canvas-draw'

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			map: split,
			color: "#ffc600",
			brushRadius: 5,
			lazyRadius: 5,
			canvasWidth: 0,
			canvasHeight: 0
		}

		this.handleSelect = this.handleSelect.bind(this)
		this.colorChanger = this.colorChanger.bind(this)
		this.clearBoard = this.clearBoard.bind(this)
		this.undoLast = this.undoLast.bind(this)
		this.drawImage = this.drawImage.bind(this)
	}

	handleSelect(e) {
		console.log(e.target.value)
		if (e.target.value === 'bind') {
			this.setState({map: bind})
		} else if (e.target.value === 'split') {
			this.setState({map: split})
		}  
		else if (e.target.value === 'haven') {
			this.setState({map: haven})
		}

		
	}

	componentWillMount(){
		console.log(window.screen.height)
		if(window.screen.width  <= 812) {
			this.setState({
				canvasHeight: 200,
				canvasWidth: 200
			})
		} else if(window.screen.width  <= 1024) {
			this.setState({
				canvasHeight: 400,
				canvasWidth: 400 
			})
		} else if (window.screen.height <= 1080) {
			this.setState({
				canvasHeight: 850,
				canvasWidth: 860
			})
		} else {
			this.setState({
				canvasHeight: 1000,
				canvasWidth: 1000
			})
		}
	}

	colorChanger(e) {
		if (e.target.className.includes("blue")) {
			this.setState({color: "#0000ff"})
		} else if (e.target.className.includes("green")) {
			this.setState({color: "#008000"})
		} else if (e.target.className.includes("yellow")) {
			this.setState({color: "#ffff00"})
		}
	}

	clearBoard() {
		console.log(window.screen.height)
		this.Canvas.clear()
	}

	drawImage() {
		this.Canvas.clear()
		this.Canvas.drawImage()
	}

	undoLast() {
		this.Canvas.undo()
	}

	render() {
		return (
			<div>
				<div className='selector'> 
					<label htmlFor="cars"> </label>

					<select className='select-css' name="maps" onChange={this.handleSelect}>
						<option value="split">Split</option> 
						<option value="bind">Bind</option>
						<option value="haven">Haven</option>
					</select>
					<button className="select-button" onClick={this.drawImage}> Change </button>
				</div>
				
				<div className="map">
					<CanvasDraw
						ref={canvasDraw => (this.Canvas = canvasDraw)}
						imgSrc={this.state.map}
						brushColor={this.state.color}
						brushRadius={this.state.brushRadius}
						canvasWidth={this.state.canvasWidth}
						canvasHeight={this.state.canvasHeight}
					/>
				</div>
				<div className="buttons"> 
						<button className="button blue" onClick={this.colorChanger}></button>
						<button className="button green" onClick={this.colorChanger}></button>
						<button className="button yellow" onClick={this.colorChanger}></button>
						<button className="reset-button" onClick={this.clearBoard}> Clear </button>
						<button className="reset-button" onClick={this.undoLast}> Undo </button>
					</div>
			</div>

		)
	}
}
