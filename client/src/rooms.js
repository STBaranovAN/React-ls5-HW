import React from "react";
import axios from "axios";
import Room from "./item";

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
	
	render() {

		let allRooms = this.state.allRooms ? this.state.allRooms : [];

		if(allRooms.length == 0)
		{
			return <h2>No rooms...</h2>;
		}

		// allRooms = [{ name: "1" }, { name: "2" }, { name: "3" }];

		return (
			<ul className="rooms">
				{allRooms.map((item, index) => {
					return <Room key={index} name={item.name} onClick={ () => alert(`This is room: ${item.name}`) }/>
				})}
			</ul>
		)
	}
}

		