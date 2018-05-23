import React from "react";

export default function(props){
	return (<li><div onClick={props.onClick}>{props.name}</div></li>)
}