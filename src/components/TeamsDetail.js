import React, { Component } from 'react';
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

				<main className={style.Content}>
					<div className={style.List}>
							<ul>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
								<li className={style.List_Item}><span>Joe Allen</span><span>Austin, TX</span></li>
							</ul>
					</div>
					<div className={style.Detail}>
						<div className={style.Detail_Head}>
							<img className={style.Detail_Employee_Image} src="https://via.placeholder.com/450x200/E8117F/ffffff?text=Placeholder+For...+" />
							<span className={style.Detail_Employee_Desc}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</span>
						</div>
						<div className={style.Detail_Nav}>
							<ul className={style.Detail_Nav_List}>
								<li>Recent Files</li>
								<li>Recent Commits</li>
								<li>Recent Issues</li>
							</ul>
						</div>
						<div className={style.Detail_Employee_Details}>
							<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
							<hr />
							<p>file: 7862251d-1923-457c-a6f9-c940008063bb</p>
							<p>type: UltricesVelAugue.js</p>
							<p>version: text/javascript</p>
							<p>commit: 2.36</p>
							<p>source: GitHub</p>
							<hr />
							<p>file: 6bf3167e-f56b-43b5-91b7-4bc59aecc53e</p>
							<p>type: Elementum.css</p>
							<p>version: application/x-pointplus</p>
							<p>commit: 0.15</p>
							<p>source: GitHub</p>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Teams;
