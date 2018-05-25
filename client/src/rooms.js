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

		this.api_url = 'http://localhost:6060/api';
	}

	componentWillMount(){
	}

	componentDidMount(){
		this.getAllRooms();
	}

	getAllRooms(){
		let rooms = [];
			axios.get(this.api_url).then( responseObj => {

				if(responseObj.hasOwnProperty("data"))
				{
					rooms = responseObj.data.chats;
					if(rooms.length > 0)
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

	updateMessages(roomId){

		let rooms = this.state.allRooms;

		let currentRoom = rooms.find( element => {
			if(element.id === roomId)
			{
				this.setState({currentRoom: element});
				return;
			}
		});
	}
	
	render() {
		let allRooms = this.state.allRooms || [];
		let currentRoom = this.state.currentRoom || {}

		if(allRooms.length == 0)
		{
			return <h2>No rooms...</h2>;
		}

		// allRooms = [{ name: "1" }, { name: "2" }, { name: "3" }];

		return (
			<div className="container">
				<div className="row">
					<div className="col rooms">
						<ul>
							{allRooms.map((item, index) => {
								return <Room key={index} name={item.name} onClick={this.updateMessages.bind(this, item.id)}/>
							})}
						</ul>
					</div>
					<div className="col">
						<Messages roomid={currentRoom.id}/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						&nbsp;
					</div>
					<div className="col">	
						<PostMsg/>
					</div>
				</div>
			</div>
		)
	}
}

		