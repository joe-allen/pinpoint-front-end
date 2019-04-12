import React, { Component } from 'react';
import Header from '../../components/Header';
import { Routes } from '../../routes'


class HomeView extends Component {
	render() {

		console.log("Routes: ", Routes);
		return (
			<>
					<Header />
					<h1>Home View</h1>
			</>
		);
	}
}

export default HomeView;
