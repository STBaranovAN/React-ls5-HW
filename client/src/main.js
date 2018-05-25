import React from "react";
import axios from "axios";
import Rooms from "./rooms";
import Messages from "./messages";
import PostMsg from "./postmsg";

export default class Main extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selectedRoom: null
		}

		this.setRoom = this.setRoom.bind(this);
	}

	setRoom(roomObj){
		this.setState({selectedRoom: roomObj});
	}
	
	render() {
		return (
			<div className="main container">
				<div className="row">
					<div className="col">
						<Rooms setRoom={this.setRoom}/>
					</div>
					<div className="col">
						<Messages selectedRoom={this.state.selectedRoom}/>
						<PostMsg setRoom={this.setRoom} selectedRoom={this.state.selectedRoom}/>
					</div>
				</div>
			</div>
			)
	}
}

		