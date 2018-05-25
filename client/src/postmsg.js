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

		this.api_url = 'http://localhost:6060/api/addmessage';
	}

	componentWillMount(){
		this.setState({
		});
	}

	getText(e){
		let textAreaText = e.target.value;
		this.setState({msgText: textAreaText});
	}

	postNewMessage(){

		let msgText = this.state.msgText;

		// alert("Send new message: " + msgText);

		if(!msgText)
		{
			alert("Enter message text!");
			return;
		}

		let roomId = "8618528d-f739-4dd7-9be2-aa2fa0c9642a";

		axios.post(this.api_url, {
			text: msgText,
			userId: 12345,
			messageId: uuid.v4(),
			roomId: roomId 
			}).then( responseObj => {

			}, err => {
			this.setState({err: true}, () => {
				console.log(err);
				this.setState({
					err: true
				}); 
			})
		});

		/* axios.post('/user', {
			firstName: 'Fred',
			lastName: 'Flintstone'
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  }); */
	}

	render() {

		return (
			<div className="container msgform">
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
			</div>
		)
	}
}