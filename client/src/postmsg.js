import React from "react";
import uuid from "uuid";
import axios from "axios";
//import {Component} from "react";


export default class PostMsg extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			msgText: "",
			currentRoom: {},
			err: false
		}

		this.api_url = 'http://localhost:6060/api/addmessage';
	}

	getText(e){
		let textAreaText = e.target.value;
		this.setState({msgText: textAreaText});
	}

	componentWillReceiveProps(nextProps){
		this.setState({currentRoom: nextProps.selectedRoom});
	}

	postNewMessage(){

		let msgText = this.state.msgText;
		if(!msgText)
		{
			// alert("Enter message text!");
			this.setState({err: true});
			return;
		}

		let currentRoom = this.state.currentRoom;

		axios.post(this.api_url, {
			text: msgText,
			userId: 12345,
			messageId: uuid.v4(),
			roomId: currentRoom.id 
			}).then( responseObj => {
				this.props.setRoom(currentRoom)
				this.setState({
					msgText: "",
					err: false
				}); 
			}, err => {
			this.setState({err: true}, () => {
				console.log(err);
				this.setState({
					err: true
				}); 
			})
		});
	}

	render() {

		return (
			<div className="container msgform">
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
				<div className="row" style={ {display: this.state.err ? "block" : "none"} }>
					<div className="col"><p className="error">Enter message text!</p></div>
				</div>
				<div className="row">
					<div className="col">
						<textarea
							className="form-control" 
							value={this.state.msgText}
							onChange={this.getText.bind(this)}
						>
						</textarea>
					</div>
				</div>
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col text-right">
						<button className="btn btn-primary"
							onClick={this.postNewMessage.bind(this)}
						>
							New message
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
			</div>
		)
	}
}