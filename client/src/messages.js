import React from "react";
import axios from "axios";

export default class Messages extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			allMessages: []
			/* currentRoomId: props.roomid.id,
			currentRoomName: props.roomid.name */
		}

		this.api_url = 'http://localhost:6060/api';
	}

	componentDidMount(){
		let roomId = "8618528d-f739-4dd7-9be2-aa2fa0c9642a";
		// let roomId = this.state.currentRoomId || "";
		// let roomId = this.props.roomid || "";
		this.getRoomMessages(roomId);
	}

	getRoomMessages(roomId){

		if(!roomId)
			return;

		let messages = [];
			axios.get(this.api_url + `/${roomId}/messages`).then( responseObj => {

				if(responseObj.hasOwnProperty("data"))
				{
					messages = responseObj.data;
					if(messages.length > 0)
					{
						this.setState({allMessages: messages});
					}
				}
			}, err => {
				this.setState({err: true}, () => {
					console.log(err);
					this.setState({
						err: true
					}); 
				})
		} );
	}
	
	render() {

		let roomName = this.state.currentRoomName || "";
		let allMessages = this.state.allMessages || [];
		let err = this.state.err;

		if(err && allMessages.length == 0)
		{
			return <div><h2>No messages in room...</h2></div>;
		}

		return (
			<div className="messages">
				<h2>{roomName}</h2>
				<div className="text-right">
					{allMessages.map((item, index) => {
						return <p key={index}>{item.text}</p>
					})}
				</div>
			</div>
			)
	}
}

		