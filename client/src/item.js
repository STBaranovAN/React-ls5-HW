import React from "react";

export default function(props){
	return (<li><div onClick={props.onClick}><b>{props.name}</b></div></li>)
}