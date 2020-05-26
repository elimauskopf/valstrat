import React from 'react';
import split from './images/SplitEmpty.png'
import bind from './images/bindEmpty.png'
import haven from './images/havenEmpty.png'
import './stylesheets/map.css';
import CanvasDraw from './canvas/index'

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			map: split,
			color: "#ffc600",
			brushRadius: 5,
			lazyRadius: 5,
			canvasWidth: 0,
			canvasHeight: 0,
			erase: false,
			eraseButtonColor: ""
		}

		this.handleSelect = this.handleSelect.bind(this)
		this.colorChanger = this.colorChanger.bind(this)
		this.clearBoard = this.clearBoard.bind(this)
		this.undoLast = this.undoLast.bind(this)
		this.drawImage = this.drawImage.bind(this)
		this.toggleErase = this.toggleErase.bind(this)
		this.updateCanvasDimensions = this.updateCanvasDimensions.bind(this)
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

	updateCanvasDimensions() {

			console.log(window.innerHeight)
		if(window.innerHeight  <= 600) {
			this.setState({
				canvasHeight: 400,
				canvasWidth: 400
			})
		} else if(window.innerHeight  <= 750) {
			this.setState({
				canvasHeight: 500,
				canvasWidth: 500 
			})
		} else if (window.innerHeight <= 1080) {
			this.setState({
				canvasHeight: 750,
				canvasWidth: 760
			})
		} else if (window.innerHeight <= 1200) {
			this.setState({
				canvasHeight: 900,
				canvasWidth: 900
			})
		} else {
			this.setState({
				canvasHeight: 1000,
				canvasWidth: 1000
			})
		}
	}

	componentDidMount(){
		console.log(window.innerHeight)
		this.updateCanvasDimensions()
		window.addEventListener('resize', this.updateCanvasDimensions)
	}

	colorChanger(e) {
		if (e.target.className.includes("blue")) {
			this.setState({color: "#0000ff"})
		} else if (e.target.className.includes("green")) {
			this.setState({color: "#008000"})
		} else if (e.target.className.includes("yellow")) {
			this.setState({color: "#ffff00"})
		} else if (e.target.className.includes("purple")) {
			this.setState({color: "#800080"})
		}

		if(this.state.erase) {
			this.toggleErase()
		}
	}

	clearBoard() {
		this.Canvas.clear()
	}

	drawImage() {
		this.Canvas.clear()
		this.Canvas.drawImage()
	}

	undoLast() {
		this.Canvas.undo()
	}

	toggleErase() {
		if(this.state.erase) {
			this.setState({erase: false, eraseButtonColor:"", brushRadius: 5})
		} else {
			this.setState({erase: true, eraseButtonColor:"Red", brushRadius: 10})
		}
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
						erase={this.state.erase}
						hideInterface={true}
					/>
				</div>
				<div className="buttons"> 
						<button className="button blue" onClick={this.colorChanger}></button>
						<button className="button green" onClick={this.colorChanger}></button>
						<button className="button yellow" onClick={this.colorChanger}></button>
						<button className="button purple" onClick={this.colorChanger}></button>
						<button style={{backgroundColor: this.state.eraseButtonColor}} className="reset-button" onClick={this.toggleErase}> Erase </button>
						<button className="reset-button" onClick={this.clearBoard}> Clear </button>
						<button className="reset-button" onClick={this.undoLast}> Undo </button>
					</div>
			</div>

		)
	}
}
