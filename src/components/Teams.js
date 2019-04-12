import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { getTeams } from '../utils/api';
import * as style from '../App.less';

class Teams extends Component {

	constructor(props) {
			super(props);

			this.state = {
				teams: [],
			};
	}

	componentDidMount() {
		const teamDropDown = document.getElementById('teamDropDown');

		// call api
		getTeams().then(response => this.setState({ teams: response }));

		teamDropDown.addEventListener('change', (el) => {
			// send length of selected dropdown option
			this.dropDownArrowPosition(el.target.value.length)
		});
	}

	dropDownArrowPosition(characters) {
		const arrow = document.getElementById('arrow');

		// set arrow style
		arrow.style.marginLeft = `${(characters*13)}px`
	}

	render() {
		const { teams } = this.state;
		const arrowSpacing = 35;

		return (
			<>
				<div className={style.Breadcrumb_Teams_Container}>
					<Breadcrumb className={style.Breadcrumb} />
					<div>
						<select className={style.Breadcrumb_Teams_Dropdown} id="teamDropDown">
							<option value="all">All</option>
							{teams.map((team, id) =>
								<option key={team.id} value={team.name}>{team.name}</option>
							)}
						</select>
						<div className={style.Breadcrumb_Teams_Dropdown_Arrow_Container}>
							<span style={{marginLeft: arrowSpacing + 'px'}} className={style.Breadcrumb_Teams_Dropdown_Arrow} id="arrow">&nbsp;</span>
						</div>
					</div>
				</div>

				<main className={[style.Content, style.Wrap].join(' ')}>
					{/* loop over teams */}
					{teams.map(team =>
						<div key={team.id} className={style.Box}>
							<div className={style.Box_Head}>{team.name}</div>
							<div className={style.Box_Body}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
							<div className={style.Box_Buttons}>
								<Link className={style.Box_Button__Link} to="/">
									<div className={style.Box_Button}>Edit</div>
								</Link>
								{/* <Link className={style.Box_Button__Link} to={"/teams/" + team.id}> */}
								<Link className={style.Box_Button__Link} to={{ pathname: `/teams/${team.id}`, state: { foo: 'bar'} }}>
									<div className={style.Box_Button}>View</div>
								</Link>
							</div>
						</div>
					)}
				</main>
			</>
		);
	}
}

export default Teams;
