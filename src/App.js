import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentuser: null,
		};
	}

	unsuscribeFromAuth = null;

	componentDidMount() {
		this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentuser: user });
		});
	}

	componentWillUnmount() {
		this.unsuscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentuser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
