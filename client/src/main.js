import React from "react";
import axios from "axios";
import Rooms from "./rooms";

export default class Main extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}

	componentWillMount(){
	}
	
	render() {
		return (
			<div className="main">
				<Rooms></Rooms>
			</div>
			)
	}
}

		