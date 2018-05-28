import React from "react";
import axios from "axios";

export default class Messages extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentRoomName: null,
			allMessages: []
		}
	}

	/* componentDidMount(){
		if(this.props.selectedRoom) {
			this.setState({currentRoomId: nextProps.selectedRoom.id});
		}
	} */

	componentWillReceiveProps(nextProps){
		this.setState({currentRoomName: nextProps.selectedRoom.name});
		this.getRoomMessages(nextProps.selectedRoom.id);
	}
	
	/* shouldComponentUpdate(nextProps, nextState){
		return false;
	} */

	getRoomMessages(roomId){

		if(!roomId)
			return;

		let messages = [];
			axios.get(confObj.api_url + `/${roomId}/messages`).then( responseObj => {

				if(responseObj.hasOwnProperty("data"))
				{
					messages = responseObj.data;
					if(messages.length >= 0)
					{
						this.setState({allMessages: messages, err: false}, () => {
							// console.log(this.state);
						});
					}
				}
			}, err => {
				this.setState({err: true}, () => {
					console.log(err);
				})
		} );
	}

	render() {

		let error = this.state.err || false;
		let roomName = this.state.currentRoomName || "Choose a room";
		let allMessages = this.state.allMessages || [];

		if(error) {
			return (<div className="messages">
						<h2>Server error occured...</h2>
					</div>
			)
		}
		
		if(allMessages.length == 0) {
			return (<div className="messages">
						<h2>No messages in room...</h2>
					</div>
			)
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

		