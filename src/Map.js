import React from 'react';
import split from './images/SplitEmpty.png'
import bind from './images/bindEmpty.png'
import haven from './images/havenEmpty.png'
import './stylesheets/map.css';
import CanvasDraw from './canvas/index'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			map: haven,
			color: "#ffc600",
			brushRadius: 3,
			lazyRadius: 4,
			canvasWidth: 0,
			canvasHeight: 0,
			erase: false,
			eraseButtonColor: "",
			zoomButtonColor: "",
			zoomDisabled: true,
			drawDisabled: false,
			scale: 1
		}

		this.handleSelect = this.handleSelect.bind(this)
		this.colorChanger = this.colorChanger.bind(this)
		this.clearBoard = this.clearBoard.bind(this)
		this.undoLast = this.undoLast.bind(this)
		this.drawImage = this.drawImage.bind(this)
		this.toggleErase = this.toggleErase.bind(this)
		this.updateCanvasDimensions = this.updateCanvasDimensions.bind(this)
		this.toggleZoom = this.toggleZoom.bind(this)
		this.updateScale = this.updateScale.bind(this)
		this.addBrushRadius = this.addBrushRadius.bind(this)
		this.subtractBrushRadius = this.subtractBrushRadius.bind(this)
	}

	handleSelect(e) {

		if (e.target.value === 'bind') {
			this.setState({ map: bind })
		} else if (e.target.value === 'split') {
			this.setState({ map: split })
		}
		else if (e.target.value === 'haven') {
			this.setState({ map: haven })
		}

		setTimeout(this.drawImage, 100)

	}

	updateScale(scale) {
		this.setState({ scale: scale.scale })
	}

	addBrushRadius() {
		let newBrushRadius = this.state.brushRadius + 1
		this.setState({brushRadius: newBrushRadius})
	}

	subtractBrushRadius() {
		let newBrushRadius = this.state.brushRadius - 1
		this.setState({brushRadius: newBrushRadius})
	}
	



	updateCanvasDimensions() {

		let size = window.innerHeight - 270;

		this.setState({
			canvasHeight: size,
			canvasWidth: size + 10
		})
		
		/* if (window.innerHeight <= 600) {
			this.setState({
				canvasHeight: 400,
				canvasWidth: 400
			})
		} else if (window.innerHeight <= 750) {
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
		} */
	}

	componentDidMount() {
		console.log(window.innerHeight)
		this.updateCanvasDimensions()
		window.addEventListener('resize', this.updateCanvasDimensions)
	}

	colorChanger(e) {
		if (e.target.className.includes("blue")) {
			this.setState({ color: "#0000ff" })
		} else if (e.target.className.includes("green")) {
			this.setState({ color: "#008000" })
		} else if (e.target.className.includes("yellow")) {
			this.setState({ color: "#ffff00" })
		} else if (e.target.className.includes("purple")) {
			this.setState({ color: "#800080" })
		}

		if (this.state.erase) {
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
		if (this.state.erase) {
			this.setState({ erase: false, eraseButtonColor: "", brushRadius: 5 })
		} else {
			this.setState({ erase: true, eraseButtonColor: "Red", brushRadius: 10 })
		}
	}

	toggleZoom() {
		if (this.state.zoomDisabled) {
			this.setState({
				zoomDisabled: false,
				drawDisabled: true,
				zoomButtonColor: "Red"
			})
		} else {
			this.setState({
				zoomDisabled: true,
				drawDisabled: false,
				zoomButtonColor: ""
			})
		}
	}


	render() {
		return (
			<div>
				<div className="selector btn-group">
					<button value="bind" onClick={this.handleSelect}>Bind</button>
					<button value="haven" onClick={this.handleSelect}>Haven</button>
					<button value="split" onClick={this.handleSelect}>Split</button>
				</div>
				<div className="map">
					<TransformWrapper
						options={{
							disabled: this.state.zoomDisabled
						}}
						onWheelStop={this.updateScale}
					>
						<TransformComponent>
							<CanvasDraw
								ref={canvasDraw => { this.Canvas = canvasDraw }}
								imgSrc={this.state.map}
								lazyRadius={this.state.lazyRadius}
								brushColor={this.state.color}
								brushRadius={this.state.brushRadius}
								canvasWidth={this.state.canvasWidth}
								canvasHeight={this.state.canvasHeight}
								erase={this.state.erase}
								hideInterface={true}
								scale={this.state.scale}
								disabled={this.state.drawDisabled}

							/>
						</TransformComponent>
					</TransformWrapper>
				</div>
				<div className="buttons">
					<button className="button blue" onClick={this.colorChanger}></button>
					<button className="button green" onClick={this.colorChanger}></button>
					<button className="button yellow" onClick={this.colorChanger}></button>
					<button className="button purple" onClick={this.colorChanger}></button>
					<button className="reset-button brush-size-button" onClick={this.addBrushRadius}> brush: +</button>
					<button className="reset-button brush-size-button" onClick={this.subtractBrushRadius}> brush: -</button>
				</div>
				<div className="buttons"> 
					<button style={{ backgroundColor: this.state.zoomButtonColor }} className="reset-button" onClick={this.toggleZoom}> Zoom </button>
					<button style={{ backgroundColor: this.state.eraseButtonColor }} className="reset-button" onClick={this.toggleErase}> Erase </button>
					<button className="reset-button" onClick={this.clearBoard}> Clear </button>
					<button className="reset-button" onClick={this.undoLast}> Undo </button>
				</div>
			</div>

		)
	}
}
