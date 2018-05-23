import React from "react";
import uuid from "uuid";
import axios from "axios";
//import {Component} from "react";


export default class PostMsg extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			msgText: "",
			err: false
		}
	}

	componentWillMount(){
		this.setState({
		});
	}

	/* enterGetTempMode() {
		let city = this.state.currentText; 
		if(city === "" || city === this.props.emptyNoteText)
		{
			alert("You must enter the name of city!");
			return;
		}

		let inTempMode = this.state.inTempMode;

		if(inTempMode) {
			if(this.timerId){
				clearInterval(this.timerId);
			}
			this.responseObj = null;
		} else {
			this.timerId = setInterval( () => {
				let wUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=875012f111377f30bfe2073d73e59ee8&units=metric`;

				axios.get(wUrl).then( data => {
					this.responseObj = data;
					this.componentDidMount();
				}, err => {
					this.setState({err: true}, () => {
						clearInterval(this.timerId);
						console.log(err);
						this.setState({
							inTempMode: false,
							tempText: "Info by city not found!",
							err: true
						}); 
					})
				} );		
			}, this.timerDelay);
		}

		this.setState({
			inTempMode: !inTempMode
		}); 
	} */

	render() {

		/* if(this.state.err){
			return <div>Oops!!! We've got problems on server!</div>
		} */

		return (
			<div>
			</div>
			)
	}
}