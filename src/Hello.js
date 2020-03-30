import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) => {
		return(
		<div className = 'f1 tc'>
		     <h1>Hello React</h1>
		     <p>{ props.greet }</p>
		</div>   
		);
	}

export default Hello;  