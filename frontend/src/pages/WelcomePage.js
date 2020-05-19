import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			userID: "",
			placeTitle: "",
			description: "",
			errorMessage: "",
			listOfPlaces: []

		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e, placeTitle, description) {
		e.preventDefault();

		const userID = localStorage.getItem('userID');
		if (placeTitle.length > 0 && description.length > 0) {
			console.log(placeTitle, description, userID);
			fetch(`http://localhost:3000/places/add`, {
				method: "POST",
				body: JSON.stringify({
					placeTitle: this.state.placeTitle,
					description: this.state.description,
					userID: userID
				}),
				headers: {
					"Content-type": "application/json",
					Accept: "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
					if (response.statusCode === 401) {
						this.setState({
							errorMessage: "Place already exists"
						})
					}
				})
				window.location.reload()
		} else {
			this.setState({
				errorMessage: "Please fill fields"
			})
		}
	}

	componentDidMount() {
		document.title = 'Welcome to PRS';

		fetch(`http://localhost:3000/places/listofplaces`, {
			method: "GET",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				this.setState({
					listOfPlaces: response
				})
			})
	}

	render() {
		const { placeTitle, description, listOfPlaces, errorMessage } = this.state;
		return (
			<div className="Ap">
				<div className="FormFieldB">
					<h4>Welcome to Place Review System</h4>
					<h5>Places listed below can be reviewed</h5>
				</div>

				<div className="FormFieldB">
					<div className="PlaceTitle">

						{listOfPlaces.map((item, index) => (	
							<Link
								to={{
									pathname: `/ratingPage/${item.place_title}`,
								}}
								key={index}
								className="FormTitle_Ln">
								{item.place_title}
							</Link>
						))}
					</div>


					<form onSubmit={this.handleSubmit}>
				
					<h5>Add a new place and description to review</h5>

					<div className="FormFieldT">
						<input type="text"
							placeholder="Place Title"
							value={placeTitle}
							name="placeTitle"
							onChange={this.handleChange} />
					</div>

						<div className="FormFText">
							<textarea type="text"
								placeholder="Description"
								defaultValue={description}
								name="description"
								onChange={this.handleChange} />
						</div>

						<div className="validation_welcomepage">
							<h2 style={{ margin: 30 }}> {errorMessage}</h2>
							<button className="FormT_button" >Add</button>
						</div>
					</form>

				</div>
			</div>
		)
	}
}
export default App;
