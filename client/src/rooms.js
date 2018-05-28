import React from "react";
import axios from "axios";
import Room from "./item";
import Messages from "./messages";
import PostMsg from "./postmsg";

export default class Rooms extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			allRooms: [],
			currentRoom: {},
			err: false
		}
	}

	componentWillMount(){
	}

	componentDidMount(){
		this.getAllRooms();
	}

	getAllRooms(){
		let rooms = [];
			axios.get(confObj.api_url).then( responseObj => {

				if(responseObj.hasOwnProperty("data"))
				{
					rooms = responseObj.data.chats;
					if(rooms.length >= 0)
					{
						this.setState({allRooms: rooms});
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
		let error = this.state.err || false;
		let allRooms = this.state.allRooms || [];
		let currentRoom = this.state.currentRoom || {};

		if(error)		
		{
			return (<div className="rooms">
						<h2>Server error occured...</h2>
					</div>
			)
		}
		
		if(allRooms.length == 0) {
			return (<div className="rooms">
						<h2>No rooms...</h2>
					</div>
			)
		}

		return (
			<div className="rooms">
						<ul>
							{allRooms.map((item, index) => {
								return <Room
										key={index} name={item.name} 
										onClick={() => { 
											this.props.setRoom(item);
										}}
									/>
							})}
						</ul>
			</div>
		)
	}
}

		